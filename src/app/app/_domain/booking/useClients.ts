'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import { Client, Pagination } from '../../_shared/@types/booking'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ClientFilters {
  querySearch?: string;
  page?: number;
}

// Helper function to build query string
const buildQueryString = (filters: ClientFilters): string => {
  const params = new URLSearchParams()
  
  if (filters.querySearch) params.append('search', filters.querySearch)
  if (filters.page) params.append('page', filters.page.toString())
  
  return params.toString()
}

// Hook to fetch clients with pagination and search
export const useGetClients = (filters: ClientFilters = {}) => {
  const queryString = buildQueryString(filters)
  const endpoint = `/api/booking/clients${queryString ? `?${queryString}` : ''}`
  
  const { data, error, isLoading, mutate } = useSWR<{
    data: Client[],
    pagination: Pagination
  }>(endpoint, fetcher, { revalidateOnFocus: false })

  return {
    clients: data,
    isLoading,
    error,
    refreshClients: mutate
  }
}

// Hook to fetch a single client
export const useGetClient = (id: number) => {
  const { data, error, isLoading, mutate } = useSWR<Client>(
    id ? `/api/booking/clients/${id}` : null,
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    client: data,
    isLoading,
    error,
    refreshClient: mutate
  }
}

// Hook for client CRUD operations
export const useClientActions = () => {
  const router = useRouter()
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  // Create new client
  const createClient = async (clientData: Partial<Client>, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.post('/api/booking/clients', clientData)
      
      if (redirect) {
        router.push('/app/booking/clients')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al crear el cliente. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Update existing client
  const updateClient = async (id: number, clientData: Partial<Client>, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.put(`/api/booking/clients/${id}`, clientData)
      
      if (redirect) {
        router.push('/app/booking/clients')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al actualizar el cliente. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Delete client
  const deleteClient = async (id: number, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.delete(`/api/booking/clients/${id}`)
      
      if (redirect) {
        router.push('/app/booking/clients')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al eliminar el cliente. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    createClient,
    updateClient,
    deleteClient,
    errors,
    isSubmitting
  }
}