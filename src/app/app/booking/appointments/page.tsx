'use client'

import React from 'react'
import Container from '@/components/Container/Container'
import AppointmentsCalendar from '../components/AppointmentsCalendar'
import PageTitleLarge from '@/components/PageTitle/PageTitleLarge'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/Tabs'
import AppointmentsList from '../components/AppointmenstList'

const AppointmentsPage = () => {
  return (
    <Container>
      <PageTitleLarge
        title="Citas"
        action="/app/booking/appointments/new"
        actionLabel="Nueva cita"
        product="booking"
        icon={<CalendarDaysIcon className="size-8 text-neutral-500 dark:text-neutral-400" />}
      />
      
      <div className="mt-6">
        <Tabs defaultValue="calendar">
          <TabsList>
            <TabsTrigger value="calendar">Calendario</TabsTrigger>
            <TabsTrigger value="list">Lista</TabsTrigger>
          </TabsList>
          <TabsContent value="calendar">
            <div className="p-4 pt-6">
              <AppointmentsCalendar />
            </div>
          </TabsContent>
          <TabsContent value="list">
            <div className="p-4 pt-6">
              <AppointmentsList />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  )
}

export default AppointmentsPage