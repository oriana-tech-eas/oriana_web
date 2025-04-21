'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import { Service, ServiceCategory } from '../../_shared/@types/booking'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Hook to fetch all services
export const useGetServices = (query?: string) => {
  const endpoint = `/api/booking/services${query ? `?search=${query}` : ''}`
  
  const { data, error, isLoading, mutate } = useSWR<Service[]>(
    endpoint, fetcher, { revalidateOnFocus: false }
  )

  return {
    services: data,
    isLoading,
    error,
    refreshServices: mutate
  }
}

// Hook to fetch a single service
export const useGetService = (id: number) => {
  const { data, error, isLoading, mutate } = useSWR<Service>(
    id ? `/api/booking/services/${id}` : null,
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    service: data,
    isLoading,
    error,
    refreshService: mutate
  }
}

// Hook to fetch service categories
export const useGetServiceCategories = () => {
  const { data, error, isLoading, mutate } = useSWR<ServiceCategory[]>(
    '/api/booking/service-categories',
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    categories: data,
    isLoading,
    error,
    refreshCategories: mutate
  }
}

// Hook for service CRUD operations
export const useServiceActions = () => {
  const router = useRouter()
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  // Create new service
  const createService = async (serviceData: Partial<Service>, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.post('/api/booking/services', serviceData)
      
      if (redirect) {
        router.push('/app/booking/services')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al crear el servicio. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Update existing service
  const updateService = async (id: number, serviceData: Partial<Service>, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.put(`/api/booking/services/${id}`, serviceData)
      
      if (redirect) {
        router.push('/app/booking/services')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al actualizar el servicio. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Delete service
  const deleteService = async (id: number, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.delete(`/api/booking/services/${id}`)
      
      if (redirect) {
        router.push('/app/booking/services')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al eliminar el servicio. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    createService,
    updateService,
    deleteService,
    errors,
    isSubmitting
  }
}