'use client'

import React, { useState } from 'react'
import CalendarHeader from '../components/CalendarHeader'
import CalendarGrid from '../components/CalendarGrid'
import DayDetails from '../components/DayDetails'
import AppointmentDetails from '../components/AppointmentDetails'
import { Appointment } from '../../_shared/@types/booking'
import { useAppointments } from '../../_domain/booking/useAppointments'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths } from 'date-fns'
import EmptyState from '@/components/EmptyState/EmptyState'

const AppointmentsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const { appointments, isLoading, error } = useAppointments({ 
    startDate: format(startOfMonth(currentDate), 'yyyy-MM-dd'),
    endDate: format(endOfMonth(currentDate), 'yyyy-MM-dd')
  })

  // Generate calendar days for the current month
  const calendarDays = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  })

  // Handle month navigation
  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => subMonths(prevDate, 1))
    setSelectedDate(null)
    setSelectedAppointment(null)
  }

  const goToNextMonth = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1))
    setSelectedDate(null)
    setSelectedAppointment(null)
  }

  const goToToday = () => {
    setCurrentDate(new Date())
    setSelectedDate(new Date())
    setSelectedAppointment(null)
  }

  // Filter appointments for the selected date
  const selectedDateAppointments = selectedDate 
    ? appointments?.filter(appointment => 
        format(new Date(appointment.start_time), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
      )
    : []

  // Handle appointment selection
  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
  }

  // Handle day selection
  const handleDayClick = (date: Date) => {
    setSelectedDate(date)
    setSelectedAppointment(null)
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
    <div className="grid grid-cols-12 gap-6">
      {/* Calendar Section - 8 columns on larger screens */}
      <div className="col-span-12 lg:col-span-8 space-y-4">
        <CalendarHeader 
          currentDate={currentDate}
          onPrevMonth={goToPreviousMonth}
          onNextMonth={goToNextMonth}
          onToday={goToToday}
        />
        
        <CalendarGrid
          days={calendarDays}
          appointments={appointments || []}
          isLoading={isLoading}
          selectedDate={selectedDate}
          onDayClick={handleDayClick}
          currentMonth={currentDate}
        />
      </div>

      {/* Details Section - 4 columns on larger screens */}
      <div className="col-span-12 lg:col-span-4 space-y-4">
        {selectedAppointment ? (
          <AppointmentDetails 
            appointment={selectedAppointment}
            onClose={() => setSelectedAppointment(null)}
          />
        ) : selectedDate ? (
          <DayDetails 
            date={selectedDate}
            appointments={selectedDateAppointments || []}
            isLoading={isLoading}
            onAppointmentClick={handleAppointmentClick}
          />
        ) : (
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border dark:border-neutral-700">
            <p className="text-neutral-500 dark:text-neutral-400 text-center">
              Selecciona un día para ver las citas
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AppointmentsCalendar