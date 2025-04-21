import React from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Appointment } from '../../_shared/@types/booking'
import Button from '@/components/Button/Button'
import { CalendarDaysIcon, PlusIcon } from '@heroicons/react/24/outline'

interface DayDetailsProps {
  date: Date
  appointments: Appointment[]
  isLoading: boolean
  onAppointmentClick: (appointment: Appointment) => void
}

const DayDetails = ({ 
  date, 
  appointments, 
  isLoading, 
  onAppointmentClick 
}: DayDetailsProps) => {
  const formattedDate = format(date, "EEEE, d 'de' MMMM", { locale: es })
  
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 h-full">
      <div className="border-b dark:border-neutral-700 p-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold capitalize dark:text-neutral-50">
            {formattedDate}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {appointments.length} {appointments.length === 1 ? 'cita' : 'citas'}
          </p>
        </div>
        <Button 
          variant="primary-booking" 
          size="sm"
          href={`/app/booking/appointments/new?date=${format(date, 'yyyy-MM-dd')}`}
        >
          <PlusIcon className="h-4 w-4 mr-1" />
          Nueva cita
        </Button>
      </div>
      
      <div className="p-4">
        {isLoading ? (
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded w-1/3 mb-1"></div>
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2"></div>
                <div className="h-10 bg-neutral-200 dark:bg-neutral-800 rounded w-full mt-2"></div>
              </div>
            ))}
          </div>
        ) : appointments.length > 0 ? (
          <div className="space-y-3">
            {appointments
              .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
              .map(appointment => (
                <div 
                  key={appointment.id}
                  className="border dark:border-neutral-700 rounded-lg p-3 cursor-pointer hover:bg-amber-50 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => onAppointmentClick(appointment)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium dark:text-neutral-50">
                        {format(new Date(appointment.start_time), 'HH:mm')} - {format(new Date(appointment.end_time), 'HH:mm')}
                      </div>
                      <div className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                        {appointment.service_name}
                      </div>
                    </div>
                    <div className={`px-2 py-1 text-xs rounded-full ${getStatusColor(appointment.status)}`}>
                      {getStatusLabel(appointment.status)}
                    </div>
                  </div>
                  
                  <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    Cliente: {appointment.client_name}
                  </div>
                  
                  {appointment.staff_name && (
                    <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      Profesional: {appointment.staff_name}
                    </div>
                  )}
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <CalendarDaysIcon className="h-10 w-10 text-neutral-400 mx-auto mb-4" />
            <h4 className="text-neutral-700 dark:text-neutral-300 font-medium">No hay citas programadas</h4>
            <p className="text-neutral-500 text-sm mt-1">
              Programa una nueva cita para este día
            </p>
            <Button
              variant="primary-booking"
              className="mt-4"
              href={`/app/booking/appointments/new?date=${format(date, 'yyyy-MM-dd')}`}
            >
              <PlusIcon className="h-4 w-4 mr-1" />
              Nueva cita
            </Button>
          </div>
        )}
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

export default DayDetails