'use client'

import { useGetContacts } from '../../contacts/_domain/contacts'
import { useProducts } from '../../products/_domain/products'
import InvoiceForm from '../components/InvoiceForm'
import { useToast } from '@/components/Toast/ToastProvider'
import { useCreateSale } from '../_domain/sales'

const NewSalePage = () => {
  const { addToast } = useToast()
  const { createSale, errors, isLoading } = useCreateSale()

  const handleSubmit = async (data: any) => {
    try {
      await createSale(data)
      addToast('Venta registrada correctamente', 'success')
      return Promise.resolve()
    } catch (error) {
      console.error('Error creating invoice:', error)
      
      // Show detailed errors or generic message
      if (errors.general) {
        addToast(errors.general[0], 'error')
      } else {
        addToast('Error al registrar la venta', 'error')
      }
      
      return Promise.reject(error)
    }
  }

  return (
    <InvoiceForm
      type="invoice"
      getContacts={useGetContacts}
      getProducts={useProducts}
      onSubmit={handleSubmit}
    />
  )
}

export default NewSalePage