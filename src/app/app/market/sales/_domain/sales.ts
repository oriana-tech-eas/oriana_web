'use client'

import axios from '@/configs/axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export interface SaleItem {
  product_id: number
  quantity: number
  price: number
  discount: number
}

export interface CreateSaleProps {
  contact_id: number
  items: SaleItem[]
  date: string
  due_date: string
  notes?: string
  subtotal: number
  total: number
}

export const useCreateSale = () => {
  const router = useRouter()
  const [errors, setErrors] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  const createSale = async (data: CreateSaleProps) => {
    setIsLoading(true)
    setErrors({})
    
    try {
      // Get CSRF token
      await axios.get('/sanctum/csrf-cookie')
      
      // Make the API call to create the sale
      const response = await axios.post('/api/sales', data)
      
      // Redirect to sales list on success
      router.push('/app/sales')
      
      return response.data
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al crear la venta'] })
      }
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createSale,
    errors,
    isLoading
  }
}

export const useCreateQuote = () => {
  const router = useRouter()
  const [errors, setErrors] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  const createQuote = async (data: CreateSaleProps) => {
    setIsLoading(true)
    setErrors({})
    
    try {
      // Get CSRF token
      await axios.get('/sanctum/csrf-cookie')
      
      // Make the API call to create the quote
      const response = await axios.post('/api/quotes', data)
      
      // Redirect to quotes list on success
      router.push('/app/quotes')
      
      return response.data
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al crear la cotización'] })
      }
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createQuote,
    errors,
    isLoading
  }
}