'use client'

import React, { useState } from 'react'

import { useAppointments } from '../../_domain/booking/useAppointments'
import { format, startOfWeek, endOfWeek, addWeeks, subWeeks } from 'date-fns'
import { es } from 'date-fns/locale'
import Table from '@/components/Table/Table'
import TableRow from '@/components/Table/TableRow'
import TableCell from '@/components/Table/TableCell'
import Button from '@/components/Button/Button'
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, PencilIcon, XMarkIcon } from '@heroicons/react/24/outline'
import EmptyState from '@/components/EmptyState/EmptyState'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Appointment } from '../../_shared/@types/booking'
import Paginator from '@/components/Paginator/Paginator'
import PaginatorInfo from '@/components/Paginator/PaginatorInfo'

const AppointmentsList = () => {
  const [dateRange, setDateRange] = useState({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 })
  })
  const [pageNumber, setPageNumber] = useState(1)
  const [filter, setFilter] = useState('all')

  const { appointments, isLoading, error, pagination } = useAppointments({
    startDate: format(dateRange.start, 'yyyy-MM-dd'),
    endDate: format(dateRange.end, 'yyyy-MM-dd'),
    status: filter !== 'all' ? filter : undefined,
    page: pageNumber
  })

  // Handle week navigation
  const goToPreviousWeek = () => {
    setDateRange(prev => ({
      start: subWeeks(prev.start, 1),
      end: subWeeks(prev.end, 1)
    }))
  }

  const goToNextWeek = () => {
    setDateRange(prev => ({
      start: addWeeks(prev.start, 1),
      end: addWeeks(prev.end, 1)
    }))
  }

  const goToCurrentWeek = () => {
    setDateRange({
      start: startOfWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfWeek(new Date(), { weekStartsOn: 1 })
    })
  }

  if (error) {
    return (
      <EmptyState
        type="error"
        title="Error al cargar las citas"
        description="Hubo un problema al cargar las citas. Por favor, intenta nuevamente."
      />
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4 bg-white dark:bg-neutral-900 p-4 rounded-lg border dark:border-neutral-700">
        <div className="flex items-center">
          <span className="text-neutral-700 dark:text-neutral-300 mr-2">
            {format(dateRange.start, "d 'de' MMMM", { locale: es })} - {format(dateRange.end, "d 'de' MMMM, yyyy", { locale: es })}
          </span>
          <div className="flex border dark:border-neutral-700 rounded-lg overflow-hidden ml-2">
            <button
              className="p-1.5 hover:bg-amber-50 dark:hover:bg-neutral-800"
              onClick={goToPreviousWeek}
            >
              <ChevronLeftIcon className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
            </button>
            <button
              className="p-1.5 hover:bg-amber-50 dark:hover:bg-neutral-800"
              onClick={goToNextWeek}
            >
              <ChevronRightIcon className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
            </button>
          </div>
          <Button
            variant="secondary-booking"
            size="sm"
            onClick={goToCurrentWeek}
            className="ml-2"
          >
            Esta semana
          </Button>
        </div>

        <div className="flex">
          <select
            className="border border-neutral-400 dark:border-neutral-700 rounded-lg px-3 py-1 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Todas las citas</option>
            <option value="pending">Pendientes</option>
            <option value="confirmed">Confirmadas</option>
            <option value="completed">Completadas</option>
            <option value="cancelled">Canceladas</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4"></div>
            <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2"></div>
            <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6"></div>
            <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-2/3"></div>
          </div>
        </div>
      ) : appointments && appointments.length > 0 ? (
        <>
          <Table data={{ columns: ['Fecha', 'Horario', 'Cliente', 'Servicio', 'Profesional', 'Estado', 'Acciones'] }}>
            {appointments.map((appointment: Appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{format(new Date(appointment.start_time), 'dd/MM/yyyy')}</TableCell>
                <TableCell>
                  {format(new Date(appointment.start_time), 'HH:mm')} - {format(new Date(appointment.end_time), 'HH:mm')}
                </TableCell>
                <TableCell>{appointment.client_name}</TableCell>
                <TableCell>{appointment.service_name}</TableCell>
                <TableCell>{appointment.staff_name || '-'}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {getStatusLabel(appointment.status)}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button
                      variant="secondary-booking"
                      size="sm"
                      href={`/app/booking/appointments/${appointment.id}`}
                    >
                      <EyeIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary-booking"
                      size="sm"
                      href={`/app/booking/appointments/${appointment.id}/edit`}
                    >
                      <PencilIcon className="h-4 w-4" />
                    </Button>
                    {appointment.status !== 'cancelled' && (
                      <Button
                        variant="danger"
                        size="sm"
                        href={`/app/booking/appointments/${appointment.id}/cancel`}
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </Table>
          
          {pagination && (
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Appointment pagination">
              <PaginatorInfo
                from={pagination.from}
                to={pagination.to}
                total={pagination.total}
              />
              <Paginator setter={setPageNumber} items={pagination.links} />
            </nav>
          )}
        </>
      ) : (
        <EmptyState
          type="empty"
          icon={<CalendarDaysIcon className="h-12 w-12 text-amber-500" />}
          title="No hay citas para este período"
          description="Intenta cambiar el rango de fechas o crear una nueva cita"
          actionButton={
            <Button
              variant="primary-booking"
              href="/app/booking/appointments/new"
            >
              Nueva cita
            </Button>
          }
        />
      )}
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

export default AppointmentsList