import Paginator from '@/components/Paginator/Paginator'
import React from 'react'
import { mockSales } from './sales.mock'
import Button from '@/components/Button/Button'
import Table from '@/components/Table/Table'
import TableRow from '@/components/Table/TableRow'
import TableCell from '@/components/Table/TableCell'
import PaginatorInfo from '@/components/Paginator/PaginatorInfo'

const PageContent = () => {
  return (
    <div className='mt-8'>
      <Table data={{ columns: ['#', 'Cliente', 'Fecha', 'Monto', ''] }}>
        {
          mockSales.map((sale, index) => (
            <TableRow key={index}>
              <TableCell>{sale.id}</TableCell>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <div className='size- rounded-full bg-gray-200'></div>
                  <div>
                    <h4 className='font-semibold'>
                      {sale.client}
                    </h4>
                    <p className='text-gray-500'>4687201</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{sale.date}</TableCell>
              <TableCell>{sale.amount}</TableCell>
              <TableCell>
                <Button href='/sales/1' variant='secondary'>
                  Detalles
                </Button>
              </TableCell>
            </TableRow>
          ))
        }
      </Table>
      {/* <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label='Customer paginate'>
        <PaginatorInfo
          from={1}
          to={10}
          total={40}
        />
        <Paginator items={mockPages} />
      </nav> */}
    </div>
  )
}

export default PageContent