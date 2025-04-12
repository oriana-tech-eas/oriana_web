'use client'

import { useGetContacts } from '../../contacts/_domain/contacts'
import { useProducts } from '../../products/_domain/products'
import InvoiceForm from '../../sales/components/InvoiceForm'
import { useToast } from '@/components/Toast/ToastProvider'
import { useCreateQuote } from '../../sales/_domain/sales'

const NewQuotePage = () => {
  const { addToast } = useToast()
  const { createQuote, errors, isLoading } = useCreateQuote()

  const handleSubmit = async (data: any) => {
    try {
      await createQuote(data)
      addToast('Cotización creada correctamente', 'success')
      return Promise.resolve()
    } catch (error) {
      console.error('Error creating quotation:', error)
      
      // Show detailed errors or generic message
      if (errors.general) {
        addToast(errors.general[0], 'error')
      } else {
        addToast('Error al crear la cotización', 'error')
      }
      
      return Promise.reject(error)
    }
  }

  return (
    <InvoiceForm
      type="quote"
      getContacts={useGetContacts}
      getProducts={useProducts}
      onSubmit={handleSubmit}
    />
  )
}

export default NewQuotePage