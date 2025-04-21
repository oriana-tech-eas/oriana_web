'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import { useAppointment, useAppointmentActions } from '../../../_domain/booking/useAppointments'
import { 
  ArrowLeftIcon,
  CalendarDaysIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  PencilIcon,
  PhoneIcon, 
  UserIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline'
import EmptyState from '@/components/EmptyState/EmptyState'
import { useToast } from '@/components/Toast/ToastProvider'

interface AppointmentViewPageProps {
  params: {
    id: string
  }
}

const AppointmentViewPage = ({ params }: AppointmentViewPageProps) => {
  const router = useRouter()
  const appointmentId = parseInt(params.id, 10)
  const { appointment, isLoading, error } = useAppointment(appointmentId)
  const { cancelAppointment, isSubmitting } = useAppointmentActions()
  const { addToast } = useToast()

  const handleCancel = async () => {
    if (!appointment) return
    
    const confirmCancel = window.confirm('¿Estás seguro de cancelar esta cita?')
    if (!confirmCancel) return
    
    try {
      await cancelAppointment(appointment.id)
      addToast('Cita cancelada correctamente', 'success')
      router.refresh()
    } catch (error) {
      addToast('Error al cancelar la cita', 'error')
      console.error('Error cancelling appointment:', error)
    }
  }

  if (isLoading) {
    return (
      <Container>
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded w-1/4 mb-6"></div>
          <div className="h-64 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
        </div>
      </Container>
    )
  }

  if (error || !appointment) {
    return (
      <Container>
        <EmptyState
          type="error"
          title="Error al cargar la cita"
          description="No se pudo encontrar la cita solicitada. Por favor, intenta de nuevo."
        />
      </Container>
    )
  }

  return (
    <Container>
      <div className="mb-6 flex items-center">
        <Button 
          variant="ghost-link" 
          href="/app/booking/appointments"
          className="mr-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Volver
        </Button>
        <h1 className="text-2xl font-bold dark:text-neutral-50">
          Detalles de la cita
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Main appointment information */}
          <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className={`inline-block px-2 py-1 mb-2 text-sm rounded-full ${getStatusColor(appointment.status)}`}>
                  {getStatusLabel(appointment.status)}
                </div>
                <h2 className="text-2xl font-bold dark:text-neutral-50">
                  {appointment.service_name}
                </h2>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="secondary-booking" 
                  href={`/app/booking/appointments/${appointment.id}/edit`}
                >
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Editar
                </Button>
                
                {appointment.status !== 'cancelled' && (
                  <Button 
                    variant="danger" 
                    onClick={handleCancel}
                    disabled={isSubmitting}
                  >
                    <XMarkIcon className="h-4 w-4 mr-1" />
                    Cancelar
                  </Button>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <CalendarDaysIcon className="h-5 w-5 text-amber-600 mr-2" />
                <span className="font-medium dark:text-neutral-50">
                  {format(new Date(appointment.start_time), "EEEE, d 'de' MMMM, yyyy", { locale: es })}
                </span>
              </div>
              
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-amber-600 mr-2" />
                <span className="font-medium dark:text-neutral-50">
                  {format(new Date(appointment.start_time), 'HH:mm')} - {format(new Date(appointment.end_time), 'HH:mm')}
                </span>
              </div>
              
              {appointment.price && (
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="font-medium dark:text-neutral-50">
                    {formatCurrency(appointment.price)}
                  </span>
                </div>
              )}
              
              {appointment.location && (
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="font-medium dark:text-neutral-50">
                    {appointment.location}
                  </span>
                </div>
              )}
            </div>
            
            {appointment.notes && (
              <div className="mt-4 border-t dark:border-neutral-700 pt-4">
                <h3 className="font-medium dark:text-neutral-50 mb-2">Notas</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {appointment.notes}
                </p>
              </div>
            )}
          </div>
          
          {/* Staff information if assigned */}
          {appointment.staff_name && (
            <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-6">
              <h3 className="font-medium dark:text-neutral-50 mb-4">Profesional asignado</h3>
              <div className="flex items-start">
                <div className="bg-amber-100 dark:bg-amber-900/50 rounded-full h-12 w-12 flex items-center justify-center text-amber-800 dark:text-amber-200 mr-4">
                  <UserIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg dark:text-neutral-50">
                    {appointment.staff_name}
                  </h4>
                  {/* Add more staff details here if available */}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Client information */}
        <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-6">
          <h3 className="font-medium dark:text-neutral-50 mb-4">Información del cliente</h3>
          
          <div className="flex items-start mb-6">
            <div className="bg-amber-100 dark:bg-amber-900/50 rounded-full h-12 w-12 flex items-center justify-center text-amber-800 dark:text-amber-200 mr-4">
              <UserIcon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-medium text-lg dark:text-neutral-50">
                {appointment.client_name}
              </h4>
              <Button
                variant="link-booking"
                size="sm"
                href={`/app/booking/clients/${appointment.client_id}`}
                className="mt-1"
              >
                Ver perfil del cliente
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            {appointment.client_email && (
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-neutral-500 mr-2" />
                <span className="dark:text-neutral-300">{appointment.client_email}</span>
              </div>
            )}
            
            {appointment.client_phone && (
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-neutral-500 mr-2" />
                <span className="dark:text-neutral-300">{appointment.client_phone}</span>
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-4 border-t dark:border-neutral-700">
            <Button
              variant="secondary-booking"
              className="w-full"
              onClick={() => {
                addToast('Esta funcionalidad estará disponible pronto', 'info')
              }}
            >
              Enviar recordatorio
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

// Helper functions for status display
const getStatusColor = (status: string): string => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'pending':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
    case 'cancelled':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'completed':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    default:
      return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200'
  }
}

const getStatusLabel = (status: string): string => {
  switch (status) {
    case 'confirmed':
      return 'Confirmada'
    case 'pending':
      return 'Pendiente'
    case 'cancelled':
      return 'Cancelada'
    case 'completed':
      return 'Completada'
    default:
      return status
  }
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export default AppointmentViewPage