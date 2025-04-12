'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import { ArrowLeftIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import SearchableInput from '@/components/SearchableInput/SearchableInput'
import SearchableInputItem from '@/components/SearchableInput/SearchableInputItem'
import SearchableSelectedItem from '@/components/SearchableInput/SearchableSelectedItem'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import { Contact } from '@/app/app/_shared/@types/contacts'
import { formatCurrency } from '@/utils/currencies'
import InvoicePreview from './InvoicePreview'
import DatePicker from "tailwind-datepicker-react"
import { DatePickerTheme } from '@/utils'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface InvoiceFormProps {
  type: 'invoice' | 'quote'
  getContacts: (params: any) => any
  getProducts: (params: any) => any
  onSubmit: (data: any) => Promise<void>
}

interface InvoiceItem {
  id: number
  product_id: number
  name: string
  price: number
  quantity: number
  discount: number
  description?: string
  total: number
}

const InvoiceForm = ({ type, getContacts, getProducts, onSubmit }: InvoiceFormProps) => {
  const router = useRouter()
  const isInvoice = type === 'invoice'
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showDueDatePicker, setShowDueDatePicker] = useState(false)
  const [contactQuery, setContactQuery] = useState('')
  const [productQuery, setProductQuery] = useState('')
  const [invoiceDate, setInvoiceDate] = useState(new Date())
  const [dueDate, setDueDate] = useState(new Date(new Date().setDate(new Date().getDate() + 7)))
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([])
  const [currentItemQuantity, setCurrentItemQuantity] = useState<number>(1)
  const [currentItemDiscount, setCurrentItemDiscount] = useState<number>(0)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [notes, setNotes] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  // Load contacts and products using the provided functions
  const { contacts } = getContacts({
    pageNumber: 1,
    contactsType: 'customer',
    querySearch: contactQuery
  })

  const { products } = getProducts({
    pageNumber: 1,
    querySearch: productQuery
  })

  // Calculate totals
  const subtotal = invoiceItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const totalDiscount = invoiceItems.reduce((acc, item) => acc + (item.price * item.quantity * item.discount / 100), 0)
  const total = subtotal - totalDiscount

  // Date picker options
  const datePickerOptions = {
    autoHide: true,
    todayBtn: true,
    todayBtnText: "Hoy",
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

  // Add selected product to invoice items
  const addItemToInvoice = () => {
    if (selectedProduct) {
      const newItem: InvoiceItem = {
        id: Date.now(), // Temporary ID
        product_id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: currentItemQuantity,
        discount: currentItemDiscount,
        description: selectedProduct.description,
        total: selectedProduct.price * currentItemQuantity * (1 - currentItemDiscount / 100)
      }
      setInvoiceItems([...invoiceItems, newItem])
      setSelectedProduct(null)
      setCurrentItemQuantity(1)
      setCurrentItemDiscount(0)
      setProductQuery('')
    }
  }

  // Remove item from invoice
  const removeItem = (itemId: number) => {
    setInvoiceItems(invoiceItems.filter(item => item.id !== itemId))
  }

  // Update item quantity
  const updateItemQuantity = (itemId: number, quantity: number) => {
    setInvoiceItems(invoiceItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, quantity)
        return {
          ...item,
          quantity: newQuantity,
          total: item.price * newQuantity * (1 - item.discount / 100)
        }
      }
      return item
    }))
  }

  // Update item discount
  const updateItemDiscount = (itemId: number, discount: number) => {
    setInvoiceItems(invoiceItems.map(item => {
      if (item.id === itemId) {
        const newDiscount = Math.min(100, Math.max(0, discount))
        return {
          ...item,
          discount: newDiscount,
          total: item.price * item.quantity * (1 - newDiscount / 100)
        }
      }
      return item
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedContact || invoiceItems.length === 0) {
      alert('Por favor seleccione un cliente y agregue al menos un producto')
      return
    }

    setIsSubmitting(true)
    try {
      const data = {
        contact_id: selectedContact.id,
        items: invoiceItems.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
          discount: item.discount
        })),
        date: invoiceDate.toISOString().split('T')[0],
        due_date: dueDate.toISOString().split('T')[0],
        notes: notes,
        subtotal: subtotal,
        total: total,
      }
      
      await onSubmit(data)
      router.push(`/app/${isInvoice ? 'sales' : 'quotes'}`)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
    }
  }

  const handleInvoiceDateChange = (selectedDate: Date) => {
    setInvoiceDate(selectedDate)
  }

  const handleDueDateChange = (selectedDate: Date) => {
    setDueDate(selectedDate)
  }

  useEffect(() => {
    if (selectedProduct) {
      addItemToInvoice()
    }
  }, [selectedProduct])

  return (
    <Container>
      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-12 md:col-span-6'>
          <Button variant='secondary' href={`/app/${isInvoice ? 'sales' : 'quotes'}`} className='w-fit mb-6'>
            <ArrowLeftIcon className='size-5 mr-2' />
            Volver
          </Button>
          <form onSubmit={handleSubmit}>
            <div className='mb-8'>
              <h3 className='text-xl font-semibold mb-4 dark:text-neutral-50'>
                {isInvoice ? 'Detalles de la venta' : 'Detalles de la cotización'}
              </h3>
              
              {/* Contact selection */}
              <div className="mb-6">
                <SearchableInput
                  label='Cliente'
                  selectedItem={
                    selectedContact && (
                      <SearchableSelectedItem
                        icon={true}
                        item={selectedContact}
                        setSelected={() => setSelectedContact(null)}
                      />
                    )
                  }
                  value={contactQuery}
                  handler={(e) => setContactQuery(e.target.value)}
                  data={contacts?.data?.data?.map((contact: Contact) => (
                    <SearchableInputItem
                      key={contact.id}
                      data={{
                        id: contact.id,
                        label: contact.name,
                        description: contact.email,
                      }}
                      onClick={() => setSelectedContact(contact)}
                      hasIcon={true}
                    />
                  ))}
                  emptyAction={{
                    href: '/app/contacts/new',
                    label: 'Nuevo cliente',
                    title: 'No se encontraron resultados',
                  }}
                />
              </div>
              
              {/* Date selection */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <InputLabel>Fecha</InputLabel>
                  <DatePicker
                    options={datePickerOptions}
                    show={showDatePicker} 
                    onChange={handleInvoiceDateChange} 
                    setShow={setShowDatePicker}
                  />
                </div>
                {isInvoice && (
                  <div>
                    <InputLabel>Fecha de vencimiento</InputLabel>
                    <DatePicker
                      options={datePickerOptions}
                      show={showDueDatePicker} 
                      onChange={handleDueDateChange} 
                      setShow={setShowDueDatePicker}
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div className='mb-8'>
              <h3 className='text-xl font-semibold mb-4 dark:text-neutral-50'>
                Productos
              </h3>
              
              {/* Products list */}
              <div className="mb-4">
                {invoiceItems.length > 0 ? (
                  <div className="border rounded-lg p-4 mb-4 divide-y">
                    {invoiceItems.map((item) => (
                      <div key={item.id} className="py-3 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{item.name}</h4>
                          <Button
                            variant='ghost-link'
                            onClick={() => removeItem(item.id)}
                            className="text-red-500"
                            type="button"
                          >
                            <TrashIcon className="size-5" />
                          </Button>
                        </div>
                        <p className="text-sm text-neutral-500">{item.description}</p>
                        <div className="flex gap-4 items-center mt-2">
                          <div className="w-24">
                            <InputLabel>Precio</InputLabel>
                            <Input
                              type="text"
                              value={formatCurrency({ amount: item.price, currency: 'PYG' })}
                              readOnly
                            />
                          </div>
                          <div className="w-24">
                            <InputLabel>Cantidad</InputLabel>
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                            />
                          </div>
                          <div className="w-24">
                            <InputLabel>Descuento %</InputLabel>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              value={item.discount}
                              onChange={(e) => updateItemDiscount(item.id, parseInt(e.target.value))}
                            />
                          </div>
                          <div className="flex-grow">
                            <InputLabel>Subtotal</InputLabel>
                            <Input
                              type="text"
                              value={formatCurrency({ amount: item.price * item.quantity, currency: 'PYG' })}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed rounded-lg p-8 text-center text-neutral-500 mb-4">
                    No hay productos agregados
                  </div>
                )}
              </div>
              
              {/* Add product section */}
              <div className="mb-6">
                <div className="flex gap-3">
                  <div className="flex-grow">
                    <SearchableInput
                      label='Agregar producto'
                      selectedItem={
                        selectedProduct && (
                          <SearchableSelectedItem
                            icon={true}
                            item={selectedProduct}
                            setSelected={() => setSelectedProduct(null)}
                          />
                        )
                      }
                      value={productQuery}
                      handler={(e) => setProductQuery(e.target.value)}
                      data={products?.data?.data?.map((product: any) => (
                        <SearchableInputItem
                          key={product.id}
                          data={{
                            id: product.id,
                            label: product.name,
                            description: formatCurrency({ amount: product.price, currency: 'PYG' }),
                          }}
                          onClick={() => setSelectedProduct(product)}
                          hasIcon={true}
                        />
                      ))}
                      emptyAction={{
                        href: '/app/products/new',
                        label: 'Nuevo producto',
                        title: 'No se encontraron resultados',
                      }}
                    />
                  </div>
                  <div className="w-20">
                    <InputLabel>Cantidad</InputLabel>
                    <Input
                      type="number"
                      min="1"
                      value={currentItemQuantity}
                      onChange={(e) => setCurrentItemQuantity(parseInt(e.target.value))}
                    />
                  </div>
                  <div className="w-20">
                    <InputLabel>Dto. %</InputLabel>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={currentItemDiscount}
                      onChange={(e) => setCurrentItemDiscount(parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </div>
              
              {/* Notes */}
              <div className="mb-6">
                <InputLabel>Notas</InputLabel>
                <textarea
                  className="w-full border border-neutral-400 dark:text-neutral-50 dark:border-neutral-700 rounded-lg p-2 focus:border-rose-400 outline-rose-400/50 focus:ring-2 focus:ring-rose-500/35 focus:ring-offset-1 outline-4 outline-offset-1 dark:bg-neutral-800"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Agregar notas o comentarios (opcional)"
                ></textarea>
              </div>

              <div className='flex gap-3 mt-8'>
                <Button
                  variant='secondary-market'
                  onClick={() => router.push(`/app/${isInvoice ? 'sales' : 'quotes'}`)}
                  type="button"
                >
                  Cancelar
                </Button>
                <Button
                  variant='secondary-market'
                  type='submit'
                  disabled={isSubmitting || !selectedContact || invoiceItems.length === 0}
                >
                  Guardar borrador
                </Button>
                <Button
                  variant='primary-market'
                  type='submit'
                  disabled={isSubmitting || !selectedContact || invoiceItems.length === 0}
                >
                  {isInvoice ? 'Registrar venta' : 'Crear cotización'}
                </Button>
              </div>
            </div>
          </form>
        </div>
        
        <div className='col-span-12 md:col-span-6'>
          <InvoicePreview
            type={type}
            contact={selectedContact}
            items={invoiceItems}
            subtotal={subtotal}
            discount={totalDiscount}
            total={total}
            date={invoiceDate}
            dueDate={dueDate}
          />
        </div>
      </div>
    </Container>
  )
}

export default InvoiceForm;