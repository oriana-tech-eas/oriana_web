import React from 'react'
import { Contact } from '@/app/app/_shared/@types/contacts'
import { formatCurrency } from '@/utils/currencies'

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

interface InvoicePreviewProps {
  type: 'invoice' | 'quote'
  contact: Contact | null
  items: InvoiceItem[]
  subtotal: number
  discount: number
  total: number
  date: Date
  dueDate?: Date
}

const InvoicePreview = ({ 
  type, 
  contact, 
  items, 
  subtotal, 
  discount, 
  total,
  date,
  dueDate
}: InvoicePreviewProps) => {
  const isInvoice = type === 'invoice'
  const documentNumber = isInvoice ? 'INV-' + Date.now().toString().slice(-6) : 'QT-' + Date.now().toString().slice(-6)
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-PY', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className='w-full p-7 rounded-xl bg-neutral-100 dark:bg-neutral-900 h-full sticky top-24'>
      <h3 className='text-xl font-semibold mb-4 dark:text-neutral-50'>
        Vista previa
      </h3>
      <div className='bg-white dark:bg-neutral-800 min-h-96 rounded shadow-sm p-5 space-y-5'>
        {/* Header */}
        <div className='pb-4 border-b dark:border-neutral-700 flex justify-between items-center dark:text-neutral-100'>
          <p className='font-semibold text-xl'>Oriana Tech</p>
          <div className="text-right">
            <p className="font-medium text-lg">{isInvoice ? 'FACTURA' : 'COTIZACIÓN'}</p>
            <p className="text-sm text-neutral-500">{documentNumber}</p>
          </div>
        </div>

        {/* Client & Dates */}
        <div className='grid grid-cols-2 gap-4 border-b dark:border-neutral-700 pb-4'>
          <div>
            <p className='text-sm text-neutral-500'>Cliente</p>
            <h5 className='text-lg font-semibold dark:text-neutral-50'>
              {contact?.name || "Seleccione un cliente"}
            </h5>
            {contact && (
              <>
                <p className="text-sm">{contact.email}</p>
                <p className="text-sm">{contact.address}</p>
                <p className="text-sm">{contact.phone}</p>
              </>
            )}
          </div>
          <div className="text-right">
            <div className="mb-2">
              <p className='text-sm text-neutral-500'>Fecha</p>
              <p className="font-medium">{formatDate(date)}</p>
            </div>
            {isInvoice && dueDate && (
              <div>
                <p className='text-sm text-neutral-500'>Vencimiento</p>
                <p className="font-medium">{formatDate(dueDate)}</p>
              </div>
            )}
          </div>
        </div>

        {/* Items */}
        <div className='py-4 border-b dark:border-neutral-700'>
          <div className='grid grid-cols-12 font-semibold mb-2 text-sm text-neutral-600 dark:text-neutral-400'>
            <div className="col-span-5">Descripción</div>
            <div className="col-span-2 text-right">Precio</div>
            <div className="col-span-1 text-center">Cant.</div>
            <div className="col-span-2 text-center">Dto.</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>
          
          {items.length > 0 ? (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className='grid grid-cols-12 text-sm py-1'>
                  <div className="col-span-5">
                    <p className="font-medium">{item.name}</p>
                    {item.description && <p className="text-xs text-neutral-500">{item.description}</p>}
                  </div>
                  <div className="col-span-2 text-right">{formatCurrency({ amount: item.price, currency: 'PYG' })}</div>
                  <div className="col-span-1 text-center">{item.quantity}</div>
                  <div className="col-span-2 text-center">{item.discount > 0 ? `${item.discount}%` : '-'}</div>
                  <div className="col-span-2 text-right">{formatCurrency({ amount: item.price * item.quantity, currency: 'PYG' })}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-neutral-500 py-4">
              No hay productos agregados
            </div>
          )}
        </div>

        {/* Totals */}
        <div className='space-y-2 text-right w-full flex flex-col items-end'>
          <div className='flex gap-4 text-neutral-600'>
            <p>Subtotal:</p>
            <p className="font-medium">{formatCurrency({ amount: subtotal, currency: 'PYG' })}</p>
          </div>
          <div className='flex gap-4 text-neutral-600'>
            <p>Descuento:</p>
            <p className="font-medium">{formatCurrency({ amount: discount, currency: 'PYG' })}</p>
          </div>
          <div className='flex gap-4 text-lg mt-2 dark:text-neutral-50 font-bold'>
            <p>Total:</p>
            <p>{formatCurrency({ amount: total, currency: 'PYG' })}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoicePreview