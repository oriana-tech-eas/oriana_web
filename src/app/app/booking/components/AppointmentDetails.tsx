import React from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Appointment } from '../../_shared/@types/booking'
import Button from '@/components/Button/Button'
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon, MapPinIcon, PhoneIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface AppointmentDetailsProps {
  appointment: Appointment
  onClose: () => void
}

const AppointmentDetails = ({ appointment, onClose }: AppointmentDetailsProps) => {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 h-full">
      <div className="border-b dark:border-neutral-700 p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold dark:text-neutral-50">
          Detalles de la cita
        </h3>
        <button 
          className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
          onClick={onClose}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4">
        <div className={`inline-block px-2 py-1 mb-3 text-sm rounded-full ${getStatusColor(appointment.status)}`}>
          {getStatusLabel(appointment.status)}
        </div>
        
        <h2 className="text-xl font-bold dark:text-neutral-50 mb-1">
          {appointment.service_name}
        </h2>
        
        <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-4">
          <ClockIcon className="h-4 w-4 mr-2" />
          <span>
            {format(new Date(appointment.start_time), 'HH:mm')} - {format(new Date(appointment.end_time), 'HH:mm')}
          </span>
          <span className="mx-2">•</span>
          <CalendarDaysIcon className="h-4 w-4 mr-2" />
          <span>
            {format(new Date(appointment.start_time), "d 'de' MMMM, yyyy", { locale: es })}
          </span>
        </div>
        
        {appointment.price && (
          <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-4">
            <CurrencyDollarIcon className="h-4 w-4 mr-2" />
            <span>{formatCurrency(appointment.price)}</span>
          </div>
        )}
        
        <div className="space-y-4 mb-6">
          <div className="border-t dark:border-neutral-700 pt-4">
            <h4 className="font-medium dark:text-neutral-50 mb-2">Cliente</h4>
            <div className="flex items-start">
              <div className="bg-amber-100 dark:bg-amber-800 rounded-full h-10 w-10 flex items-center justify-center text-amber-800 dark:text-amber-100 mr-3">
                <UserIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium dark:text-neutral-50">{appointment.client_name}</div>
                {appointment.client_email && (
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {appointment.client_email}
                  </div>
                )}
                {appointment.client_phone && (
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center mt-1">
                    <PhoneIcon className="h-3.5 w-3.5 mr-1" />
                    {appointment.client_phone}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {appointment.staff_name && (
            <div className="border-t dark:border-neutral-700 pt-4">
              <h4 className="font-medium dark:text-neutral-50 mb-2">Profesional</h4>
              <div className="font-medium dark:text-neutral-50">{appointment.staff_name}</div>
            </div>
          )}
          
          {appointment.location && (
            <div className="border-t dark:border-neutral-700 pt-4">
              <h4 className="font-medium dark:text-neutral-50 mb-2">Ubicación</h4>
              <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{appointment.location}</span>
              </div>
            </div>
          )}
          
          {appointment.notes && (
            <div className="border-t dark:border-neutral-700 pt-4">
              <h4 className="font-medium dark:text-neutral-50 mb-2">Notas</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {appointment.notes}
              </p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="secondary-booking" 
            href={`/app/booking/appointments/${appointment.id}/edit`}
          >
            Editar
          </Button>
          
          {appointment.status !== 'cancelled' ? (
            <Button 
              variant="danger" 
              href={`/app/booking/appointments/${appointment.id}/cancel`}
            >
              Cancelar
            </Button>
          ) : (
            <Button 
              variant="primary-booking" 
              href={`/app/booking/appointments/${appointment.id}/reschedule`}
            >
              Reprogramar
            </Button>
          )}
        </div>
      </div>
    </div>
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

export default AppointmentDetails