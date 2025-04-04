'use client'

import React, { useState } from 'react'
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import PageTitle from '@/components/PageTitle/PageTitle'
import { DatePickerTheme } from '@/utils'
import { ArrowLeftIcon, ArrowRightIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline'
import DatePicker from 'tailwind-datepicker-react'
import { useGetContacts } from '../../contacts/_domain/contacts'
import SearchableInput from '@/components/SearchableInput/SearchableInput'
import { useGetCategories } from '../../_domain/categories/useGetCategories'
import SearchableInputItem from '@/components/SearchableInput/SearchableInputItem'
import { useGetTaxes } from '../../_domain/taxes/useTaxes'
import SearchableSelectedItem from '@/components/SearchableInput/SearchableSelectedItem'
import { formatCurrency } from '@/utils/currencies'
import { CategoryType, SupplierType, TaxType } from './expenses.types'
import { useExpenses } from '../_domain/expenses'
import { useToast } from '@/components/Toast/ToastProvider';


const NewExpensesPage = () => {
  const [show, setShow] = React.useState(false)
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [supplierQuery, setSupplierQuery] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [supplier, setSupplier] = useState<SupplierType | null>(null)
  const [selectedTax, setSelectedTax] = useState<TaxType | null>(null)
  const [category, setCategory] = useState<CategoryType | null>(null)
  const { createExpense, errors } = useExpenses({ pageNumber: 1, querySearch: '' })
  const { taxes }: any = useGetTaxes()
  const { categories }: any = useGetCategories({
    category_type: 'expense'
  })
  const { contacts }: any = useGetContacts({
    pageNumber: 1,
    contactsType: 'supplier',
    querySearch: supplierQuery
  })

  const options = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    clearBtnText: "Borrar",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: DatePickerTheme,
    icons: {
      prev: () => <ArrowLeftIcon className='size-5 text-neutral-900 dark:text-neutral-50' />,
      next: () => <ArrowRightIcon className='size-5 text-neutral-900 dark:text-neutral-50' />,
    },
    defaultDate: new Date(),
    language: "es",
    disabledDates: [],
    weekDays: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Selecciona una fecha",
    inputDateFormatProp: {
      day: undefined,
      month: undefined,
      year: undefined,
    }
  }

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

  const handleSupplierSearch = (e: any) => {
    setSupplierQuery(e.target.value)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    const numericValue = parseInt(rawValue, 10) || 0;

    setAmount(numericValue);
  };

  const formattedAmount = formatCurrency({ amount, currency: 'PYG' });

  const handleCreation = (e: React.FormEvent, redirect: boolean) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!supplier || !category || !selectedTax) {
      setIsSubmitting(false)
      addToast('Faltan datos, revise el formulario', 'error');
      return console.error('Faltan datos');
    }

    const data = {
      'description': description,
      'amount': amount,
      'contact_id': supplier.id,
      'category_id': category.id,
      'tax_id': selectedTax.id,
      'date': date.toISOString().slice(0, 19).replace('T', ' '),
    }

    createExpense({
      data: data,
      redirect: redirect
    })
    
    setIsSubmitting(false)

    addToast('Gasto registrado correctamente', 'success');
    
    setDescription('')
    setAmount(0)
    setCategory(null)
    setSupplier(null)
    setSelectedTax(null)
  }

  return (
    <Container>      
      <PageTitle className="mb-4">Registrar gasto</PageTitle>
      <div className="grid grid-cols-12 gap-4">
        <div className='col-span-6'>
          <div className='border relative border-dashed text-neutral-700 border-neutral-400 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-900 bg-neutral-100 dark:bg-neutral-950 rounded-lg p-5 h-full flex items-center justify-center duration-200'>
            <input type='file' className='w-full h-full absolute top-0 left-0 opacity-0' />
            <div className='flex flex-col gap-2 items-center'>
              <DocumentArrowUpIcon className='size-10'/>
              <p>Arrastra tus documento aqui</p>
            </div>
          </div>
        </div>
        <div className='col-span-6 space-y-3'>
          <div className='flex flex-col gap-2'>
            <InputLabel>Fecha</InputLabel>
            <DatePicker options={options} show={show} onChange={handleDateChange} setShow={handleClose} />
          </div>
          <SearchableInput
            label='Proveedor'
            value={supplierQuery}
            handler={handleSupplierSearch}
            selectedItem={
              supplier &&
              <SearchableSelectedItem
                icon={true}
                item={supplier}
                setSelected={() => setSupplier(null)}
              />
            }
            data={
              contacts?.data?.data?.map((contact: any) => 
                <SearchableInputItem
                  key={contact.id}
                  data={{
                      id: contact.id,
                      label: contact.name,
                      description: contact.email,
                    }}
                  onClick={() => setSupplier(contact)}
                  hasIcon={true}
                />
              )
            }
            emptyAction={{
              href: '/contacts/new',
              label: 'Registrar',
              title: '¿No encontras el proveedor?'
            }}
          />
          <div className='flex flex-col gap-2'>
            <SearchableInput
              label='Categoria'
              selectedItem={
                category &&
                <SearchableSelectedItem
                  icon={false}
                  item={category}
                  setSelected={() => setCategory(null)}
                />
              }
              data={
                categories?.map((category: CategoryType) => 
                  <SearchableInputItem
                    key={category.id}
                    data={{
                      id: category.id,
                      label: category.name,
                    }}
                    onClick={() => setCategory(category)}
                  />
                )
              }
              emptyAction={{
                href: '/preferences/categories/new',
                label: 'Registrar',
                title: '¿No encontras la categoria?'
              }}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <InputLabel>Importe</InputLabel>
            <Input type='text' value={formattedAmount} onChange={handleAmountChange} required/>
          </div>
          <div className='flex flex-col gap-2'>
            <SearchableInput
              label='Impuesto'
              selectedItem={
                selectedTax &&
                <SearchableSelectedItem
                  icon={false}
                  item={selectedTax}
                  setSelected={() => setSelectedTax(null)}
                />
              }
              data={
                taxes?.data?.map((tax: TaxType) => 
                  <SearchableInputItem
                    key={tax.id}
                    data={{
                      id: tax.id,
                      label: tax.name,
                    }}
                    onClick={() => setSelectedTax(tax)}
                  />
                )
              }
            />
          </div>
          <div className='flex flex-col gap-2'>
            <InputLabel>Descripción</InputLabel>
            <Input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
          </div>
          <div className='flex gap-2 mt-5'>
            <Button href='/expenses' variant='secondary' disabled={isSubmitting}>Cancelar</Button>
            <Button variant='secondary' type='submit' onClick={e => handleCreation(e, false)} disabled={isSubmitting}>Guardar y nuevo</Button>
            <Button variant='primary' type='submit' onClick={e => handleCreation(e, true)} disabled={isSubmitting}>Guardar y salir</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NewExpensesPage