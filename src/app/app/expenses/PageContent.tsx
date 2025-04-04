'use client'

import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import Paginator from '@/components/Paginator/Paginator'
import PaginatorInfo from '@/components/Paginator/PaginatorInfo'
import Table from '@/components/Table/Table'
import TableCell from '@/components/Table/TableCell'
import TableRow from '@/components/Table/TableRow'
import React, { useState } from 'react'
import { useExpenses } from './_domain/expenses'
import EmptyState from '@/components/EmptyState/EmptyState'
import { formatCurrency, formatDate } from '@/utils/currencies'
import ExpensesSkeleton from './new/ExpensesSkeleton'
import Link from 'next/link'

const PageContent = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [querySearch, setQuerySearch] = useState('')
  const { expenses, allExpensesError, allExpensesLoading } = useExpenses({ pageNumber: pageNumber, querySearch: querySearch })

  return (
    <div className='mt-8'>
      <div className='flex gap-4 mb-4'>
        <div className='flex-1'>
          <InputLabel>Buscar</InputLabel>
          <Input 
            type='search'
            placeholder='Buscar gastos'
            className='w-full'
            value={querySearch}
            onChange={(e) => setQuerySearch(e.target.value)}
          />
        </div>
      </div>
      {
        expenses?.data?.length === 0 && allExpensesLoading && (<ExpensesSkeleton />)
      }
      {
        (expenses?.data?.length === 0 && !allExpensesLoading) && (
          <EmptyState type='empty' title='No se encontraron gastos' description='Parece que no hay gastos registrados.' />
        )
      }
      {
        (expenses && (expenses?.data?.length ?? 0) > 0 && !allExpensesError && !allExpensesLoading) && (
          <>
            <Table data={{ columns: ['Fecha', 'Proveedor', 'Descripción', 'Monto'] }}>
              {
                expenses?.data?.map((expense, index) => (
                  <TableRow key={index}>
                    <TableCell>{formatDate(expense.expense_date)}</TableCell>
                    <TableCell>
                      <Link href={`/contacts/${expense.contact_id}`} className='hover:text-neutral-900'>
                        {expense.contact_name}
                      </Link>
                    </TableCell>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>Gs. {formatCurrency({ amount: expense.amount, currency: 'PYG' })}</TableCell>
                  </TableRow>
                ))
              }
            </Table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label='Expenses paginate'>
              <PaginatorInfo
                from={expenses.from}
                to={expenses.to}
                total={expenses.total}
              />
              <Paginator setter={setPageNumber} items={expenses?.links} />
            </nav>
          </>
        )
      }
    </div>
  )
}

export default PageContent