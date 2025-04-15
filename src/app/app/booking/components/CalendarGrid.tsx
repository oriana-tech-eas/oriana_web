import React from 'react'
import { format, isSameMonth, isSameDay, isToday } from 'date-fns'
import { Appointment } from '../../_shared/@types/booking'


interface CalendarGridProps {
  days: Date[]
  appointments: Appointment[]
  isLoading: boolean
  selectedDate: Date | null
  onDayClick: (date: Date) => void
  currentMonth: Date
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  days,
  appointments,
  isLoading,
  selectedDate,
  onDayClick,
  currentMonth
}) => {
  // Group appointments by date for easier access
  const appointmentsByDate = appointments.reduce((acc, appointment) => {
    const date = format(new Date(appointment.start_time), 'yyyy-MM-dd')
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(appointment)
    return acc
  }, {} as Record<string, Appointment[]>)

  // Days of the week header
  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 overflow-hidden">
      {/* Calendar header - days of week */}
      <div className="grid grid-cols-7 border-b dark:border-neutral-700">
        {weekDays.map(day => (
          <div 
            key={day} 
            className="py-2 text-center text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar body - days grid */}
      <div className="grid grid-cols-7 grid-rows-[repeat(6,_minmax(100px,_1fr))]">
        {days.map(day => {
          const dateKey = format(day, 'yyyy-MM-dd')
          const dayAppointments = appointmentsByDate[dateKey] || []
          const isDayInCurrentMonth = isSameMonth(day, currentMonth)
          const isSelectedDay = selectedDate ? isSameDay(day, selectedDate) : false
          const isTodayDate = isToday(day)

          // Apply different styling based on day status
          let dayClasses = "p-2 border-b border-r dark:border-neutral-700 relative cursor-pointer hover:bg-amber-50 dark:hover:bg-neutral-800 transition-colors"
          
          // Day not in current month
          if (!isDayInCurrentMonth) {
            dayClasses += " bg-neutral-50 dark:bg-neutral-950 text-neutral-400 dark:text-neutral-600"
          }
          
          // Selected day
          if (isSelectedDay) {
            dayClasses += " bg-amber-100 dark:bg-amber-900 hover:bg-amber-100 dark:hover:bg-amber-900"
          }
          
          // Today
          if (isTodayDate) {
            dayClasses += " font-bold"
          }

          return (
            <div 
              key={dateKey} 
              className={dayClasses}
              onClick={() => onDayClick(day)}
            >
              <div className="flex justify-between">
                <span className={`${isTodayDate ? 'h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center' : ''}`}>
                  {format(day, 'd')}
                </span>
                
                {dayAppointments.length > 0 && isDayInCurrentMonth && (
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-800 text-amber-700 dark:text-amber-200 text-xs font-medium">
                    {dayAppointments.length}
                  </span>
                )}
              </div>

              {/* Appointment indicators - limited to 3 visible for space */}
              {isDayInCurrentMonth && dayAppointments.length > 0 && (
                <div className="mt-1 space-y-1">
                  {dayAppointments.slice(0, 2).map((appointment) => (
                    <div 
                      key={appointment.id} 
                      className="text-xs px-1 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 truncate"
                    >
                      {format(new Date(appointment.start_time), 'HH:mm')} - {appointment.client_name}
                    </div>
                  ))}
                  {dayAppointments.length > 2 && (
                    <div className="text-xs text-amber-600 dark:text-amber-400">
                      + {dayAppointments.length - 2} más
                    </div>
                  )}
                </div>
              )}

              {/* Loading indicator */}
              {isLoading && isDayInCurrentMonth && (
                <div className="absolute inset-0 bg-white/50 dark:bg-neutral-900/50 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CalendarGrid