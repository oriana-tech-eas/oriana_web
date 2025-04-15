'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import { Appointment, AppointmentFilters, Pagination } from '../../_shared/@types/booking'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Helper function to build query string from filters
const buildQueryString = (filters: AppointmentFilters): string => {
  const params = new URLSearchParams()

  if (filters.startDate) params.append('start_date', filters.startDate)
  if (filters.endDate) params.append('end_date', filters.endDate)
  if (filters.status) params.append('status', filters.status)
  if (filters.client_id) params.append('client_id', filters.client_id.toString())
  if (filters.staff_id) params.append('staff_id', filters.staff_id.toString())
  if (filters.service_id) params.append('service_id', filters.service_id.toString())
  if (filters.page) params.append('page', filters.page.toString())

  return params.toString()
}

// Hook to fetch appointments with optional filtering
export const useAppointments = (filters: AppointmentFilters = {}) => {
  const queryString = buildQueryString(filters)
  const endpoint = `/api/booking/appointments${queryString ? `?${queryString}` : ''}`

  const { data, error, isLoading, mutate } = useSWR<{
    data: Appointment[],
    pagination: Pagination
  }>(endpoint, fetcher, { revalidateOnFocus: false })

  return {
    appointments: data?.data || [],
    pagination: data?.pagination,
    isLoading,
    error,
    refreshAppointments: mutate
  }
}

// Hook to fetch a single appointment
export const useAppointment = (id: number) => {
  const { data, error, isLoading, mutate } = useSWR<Appointment>(
    id ? `/api/booking/appointments/${id}` : null,
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    appointment: data,
    isLoading,
    error,
    refreshAppointment: mutate
  }
}

// Hook to create, update, or delete appointments
export const useAppointmentActions = () => {
  const router = useRouter()
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  // Create new appointment
  const createAppointment = async (appointmentData: any, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.post('/api/booking/appointments', appointmentData)
      
      if (redirect) {
        router.push('/app/booking/appointments')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al crear la cita. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Update existing appointment
  const updateAppointment = async (id: number, appointmentData: any, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.put(`/api/booking/appointments/${id}`, appointmentData)
      
      if (redirect) {
        router.push('/app/booking/appointments')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al actualizar la cita. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Cancel appointment
  const cancelAppointment = async (id: number, reason?: string, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.post(`/api/booking/appointments/${id}/cancel`, { reason })
      
      if (redirect) {
        router.push('/app/booking/appointments')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al cancelar la cita. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  // Delete appointment (only for admins)
  const deleteAppointment = async (id: number, redirect = true) => {
    setIsSubmitting(true)
    setErrors({})

    try {
      await csrf()
      const response = await axios.delete(`/api/booking/appointments/${id}`)
      
      if (redirect) {
        router.push('/app/booking/appointments')
      }
      
      return response.data
    } catch (error: any) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors)
      } else {
        setErrors({ general: ['Error al eliminar la cita. Inténtalo de nuevo.'] })
      }
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    createAppointment,
    updateAppointment,
    cancelAppointment,
    deleteAppointment,
    errors,
    isSubmitting
  }
}