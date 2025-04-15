'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import Container from '@/components/Container/Container'
import Button from '@/components/Button/Button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import AppointmentForm from '../../components/AppointmentForm'

const NewAppointmentPage = () => {
  const searchParams = useSearchParams()
  const preselectedDate = searchParams.get('date') || undefined

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
          Nueva Cita
        </h1>
      </div>

      <AppointmentForm preselectedDate={preselectedDate} />
    </Container>
  )
}

export default NewAppointmentPage