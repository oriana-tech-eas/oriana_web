'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import { Staff, StaffAvailability } from '../../_shared/@types/booking'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Hook to fetch all staff members
export const useGetStaff = (query?: string) => {
  const endpoint = `/api/booking/staff${query ? `?search=${query}` : ''}`
  
  const { data, error, isLoading, mutate } = useSWR<Staff[]>(
    endpoint, fetcher, { revalidateOnFocus: false }
  )

  return {
    staff: data,
    isLoading,
    error,
    refreshStaff: mutate
  }
}

// Hook to fetch a single staff member
export const useGetStaffMember = (id: number) => {
  const { data, error, isLoading, mutate } = useSWR<Staff>(
    id ? `/api/booking/staff/${id}` : null,
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    staffMember: data,
    isLoading,
    error,
    refreshStaffMember: mutate
  }
}

// Hook to fetch staff availability
export const useGetStaffAvailability = (staffId: number) => {
  const { data, error, isLoading, mutate } = useSWR<StaffAvailability[]>(
    staffId ? `/api/booking/staff/${staffId}/availability` : null,
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    availability: data,
    isLoading,
    error,
    refreshAvailability: mutate
  }
}

// Hook for staff CRUD operations
export const useStaffActions = () => {
  const router = useRouter()
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  // Create new staff member
  const createStaffMember = async (staffData: Partial<Staff>, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.post('/api/booking/staff', staffData)
      
      if (redirect) {
        router.push('/app/booking/staff')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al crear el profesional. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Update existing staff member
  const updateStaffMember = async (id: number, staffData: Partial<Staff>, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.put(`/api/booking/staff/${id}`, staffData)
      
      if (redirect) {
        router.push('/app/booking/staff')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al actualizar el profesional. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Update staff availability
  const updateStaffAvailability = async (
    staffId: number, 
    availabilityData: StaffAvailability[]
  ) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.put(
        `/api/booking/staff/${staffId}/availability`, 
        { availability: availabilityData }
      )
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al actualizar la disponibilidad. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Delete staff member
  const deleteStaffMember = async (id: number, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.delete(`/api/booking/staff/${id}`)
      
      if (redirect) {
        router.push('/app/booking/staff')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al eliminar el profesional. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    createStaffMember,
    updateStaffMember,
    updateStaffAvailability,
    deleteStaffMember,
    errors,
    isSubmitting
  }
}