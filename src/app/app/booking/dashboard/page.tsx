'use client'

import Container from '@/components/Container/Container'
import { CalendarDaysIcon, UsersIcon, UserGroupIcon, Cog8ToothIcon, UserIcon } from '@heroicons/react/24/outline'
import PageTitle from '@/components/PageTitle/PageTitle'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Button from '@/components/Button/Button'
import Link from 'next/link'
import { useAppointments } from '../../_domain/booking/useAppointments'

const BookingDashboardPage = () => {
  const today = format(new Date(), "yyyy-MM-dd")
  const { appointments, isLoading } = useAppointments({ 
    startDate: today,
    endDate: today
  })

  const quickAccessItems = [
    {
      title: 'Citas',
      icon: <CalendarDaysIcon className="h-6 w-6 text-amber-600" />,
      description: 'Gestiona tu agenda de citas',
      href: '/app/booking/appointments',
    },
    {
      title: 'Clientes',
      icon: <UsersIcon className="h-6 w-6 text-amber-600" />,
      description: 'Administra tus clientes',
      href: '/app/booking/clients',
    },
    {
      title: 'Servicios',
      icon: <Cog8ToothIcon className="h-6 w-6 text-amber-600" />,
      description: 'Configura los servicios que ofreces',
      href: '/app/booking/services',
    },
    {
      title: 'Personal',
      icon: <UserIcon className="h-6 w-6 text-amber-600" />,
      description: 'Gestiona tu equipo',
      href: '/app/booking/staff',
    },
  ]

  return (
    <Container>
      <div className="flex justify-between items-center mb-6">
        <PageTitle>Oriana Booking</PageTitle>
        <Button
          variant="primary-booking"
          href="/app/booking/appointments/new"
        >
          Nueva cita
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border dark:border-neutral-700">
          <h2 className="text-xl font-semibold mb-4 dark:text-neutral-50">
            Acceso rápido
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickAccessItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-amber-50 dark:hover:bg-neutral-800 transition duration-200"
              >
                <div className="flex items-start">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-neutral-50">{item.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border dark:border-neutral-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold dark:text-neutral-50">
              Citas de hoy
            </h2>
            <span className="text-neutral-500 dark:text-neutral-400">
              {format(new Date(), "EEEE, d 'de' MMMM", { locale: es })}
            </span>
          </div>
          
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-10 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
              <div className="h-10 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
              <div className="h-10 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
            </div>
          ) : appointments && appointments.length > 0 ? (
            <div className="space-y-3">
              {appointments.slice(0, 5).map((appointment) => (
                <Link
                  key={appointment.id}
                  href={`/app/booking/appointments/${appointment.id}`}
                  className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-amber-50 dark:hover:bg-neutral-800 transition duration-200"
                >
                  <div>
                    <div className="font-medium dark:text-neutral-50">
                      {format(new Date(appointment.start_time), 'HH:mm')} - {appointment.client_name}
                    </div>
                    <div className="text-sm text-amber-600 dark:text-amber-400">
                      {appointment.service_name}
                    </div>
                  </div>
                  <div className={`px-2 py-1 text-xs rounded-full ${getStatusColor(appointment.status)}`}>
                    {getStatusLabel(appointment.status)}
                  </div>
                </Link>
              ))}
              
              {appointments.length > 5 && (
                <Link
                  href="/app/booking/appointments"
                  className="block text-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm mt-2"
                >
                  Ver todas las citas ({appointments.length})
                </Link>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <CalendarDaysIcon className="h-12 w-12 text-neutral-400 mx-auto mb-3" />
              <h3 className="text-lg font-medium dark:text-neutral-300 mb-1">No hay citas para hoy</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                ¿Quieres programar una nueva cita?
              </p>
              <Button
                variant="primary-booking"
                href="/app/booking/appointments/new"
                size="sm"
              >
                Nueva cita
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border dark:border-neutral-700">
          <h2 className="text-xl font-semibold mb-4 dark:text-neutral-50">
            Resumen
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-600 dark:text-neutral-400">Citas hoy</span>
              <span className="font-semibold dark:text-neutral-50">{appointments?.length || 0}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-600 dark:text-neutral-400">Citas esta semana</span>
              <span className="font-semibold dark:text-neutral-50">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-600 dark:text-neutral-400">Clientes activos</span>
              <span className="font-semibold dark:text-neutral-50">32</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-600 dark:text-neutral-400">Servicios ofrecidos</span>
              <span className="font-semibold dark:text-neutral-50">8</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border dark:border-neutral-700">
          <h2 className="text-xl font-semibold mb-4 dark:text-neutral-50">
            Clientes frecuentes
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-800 dark:text-amber-200 mr-3">
                  <UserIcon className="h-4 w-4" />
                </div>
                <span className="dark:text-neutral-50">Ana García</span>
              </div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">8 citas</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-800 dark:text-amber-200 mr-3">
                  <UserIcon className="h-4 w-4" />
                </div>
                <span className="dark:text-neutral-50">Carlos Martínez</span>
              </div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">6 citas</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-800 dark:text-amber-200 mr-3">
                  <UserIcon className="h-4 w-4" />
                </div>
                <span className="dark:text-neutral-50">María López</span>
              </div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">5 citas</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border dark:border-neutral-700">
          <h2 className="text-xl font-semibold mb-4 dark:text-neutral-50">
            Servicios populares
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="dark:text-neutral-50">Corte de cabello</span>
              <div className="w-1/2 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-neutral-50">Manicura</span>
              <div className="w-1/2 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-neutral-50">Pedicura</span>
              <div className="w-1/2 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-neutral-50">Masaje</span>
              <div className="w-1/2 bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
              </div>
            </div>
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

export default BookingDashboardPage