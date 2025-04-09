'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { format, addMinutes, parse } from 'date-fns'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import InputError from '@/components/InputError/InputError'
import { DatePickerTheme } from '@/utils'
import DatePicker from 'tailwind-datepicker-react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Appointment, AppointmentFormData } from '../../_shared/@types/booking'
import { useAppointmentActions } from '../../_domain/booking/useAppointments'
import { useGetServices } from '../../_domain/booking/useServices'
import { useGetStaff } from '../../_domain/booking/useStaff'
import { useGetClients } from '../../_domain/booking/useClients'
import SearchableInput from '@/components/SearchableInput/SearchableInput'
import SearchableInputItem from '@/components/SearchableInput/SearchableInputItem'
import SearchableSelectedItem from '@/components/SearchableInput/SearchableSelectedItem'
import { useToast } from '@/components/Toast/ToastProvider'

interface AppointmentFormProps {
  initialData?: Appointment
  preselectedDate?: string  // Format: YYYY-MM-DD
}

const AppointmentForm = ({ initialData, preselectedDate }: AppointmentFormProps) => {
  const router = useRouter()
  const { addToast } = useToast()
  const isEditing = !!initialData
  
  // Format initial date for datepicker
  const parseInitialDate = () => {
    if (initialData) {
      return new Date(initialData.start_time)
    } else if (preselectedDate) {
      return new Date(preselectedDate)
    }
    return new Date()
  }

  // States
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>(parseInitialDate())
  const [startTime, setStartTime] = useState(initialData ? format(new Date(initialData.start_time), 'HH:mm') : '09:00')
  const [endTime, setEndTime] = useState(initialData ? format(new Date(initialData.end_time), 'HH:mm') : '10:00')
  const [selectedClient, setSelectedClient] = useState<any>(null)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedStaff, setSelectedStaff] = useState<any>(null)
  const [notes, setNotes] = useState(initialData?.notes || '')
  const [status, setStatus] = useState(initialData?.status || 'pending')
  
  // Query states
  const [clientQuery, setClientQuery] = useState('')
  const [serviceQuery, setServiceQuery] = useState('')
  const [staffQuery, setStaffQuery] = useState('')

  // Fetch data using custom hooks
  const { services } = useGetServices()
  const { staff } = useGetStaff()
  const { clients } = useGetClients({ querySearch: clientQuery })
  const { createAppointment, updateAppointment, errors, isSubmitting } = useAppointmentActions()

  // Initialize form if editing
  useEffect(() => {
    if (initialData) {
      // Find and set selected entities based on IDs
      if (services) {
        const service = services.find(s => s.id === initialData.service_id)
        if (service) setSelectedService(service)
      }
      
      if (staff && initialData.staff_id) {
        const staffMember = staff.find(s => s.id === initialData.staff_id)
        if (staffMember) setSelectedStaff(staffMember)
      }
      
      // Client will be fetched separately
      setSelectedClient({
        id: initialData.client_id,
        name: initialData.client_name,
        email: initialData.client_email,
        phone: initialData.client_phone,
      })
    }
  }, [initialData, services, staff])

  // Datepicker options
  const datePickerOptions = {
    autoHide: true,
    todayBtn: true,
    todayBtnText: "Hoy",
    clearBtn: true,
    clearBtnText: "Borrar",
    maxDate: new Date("2030-01-01"),
    minDate: new Date(),
    theme: DatePickerTheme,
    icons: {
      prev: () => <ArrowLeftIcon className="size-5 text-neutral-900 dark:text-neutral-50" />,
      next: () => <ArrowRightIcon className="size-5 text-neutral-900 dark:text-neutral-50" />,
    },
    defaultDate: selectedDate,
    language: "es",
    disabledDates: [],
    weekDays: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Selecciona una fecha",
    inputDateFormatProp: {
      day: undefined,
      month: undefined,
      year: undefined,
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedClient || !selectedService) {
      addToast('Por favor selecciona cliente y servicio', 'error')
      return
    }
    
    // Prepare datetime strings
    const dateStr = format(selectedDate, 'yyyy-MM-dd')
    const startDateTime = `${dateStr}T${startTime}:00`
    const endDateTime = `${dateStr}T${endTime}:00`
    
    const appointmentData: AppointmentFormData = {
      client_id: selectedClient.id,
      service_id: selectedService.id,
      staff_id: selectedStaff?.id,
      date: dateStr,
      start_time: startDateTime,
      end_time: endDateTime,
      notes,
      status
    }
    
    try {
      if (isEditing && initialData) {
        await updateAppointment(initialData.id, appointmentData)
        addToast('Cita actualizada correctamente', 'success')
      } else {
        await createAppointment(appointmentData)
        addToast('Cita creada correctamente', 'success')
      }
      
      router.push('/app/booking/appointments')
    } catch (error) {
      console.error('Error al guardar la cita:', error)
    }
  }

  // Calculate end time when service or start time changes
  useEffect(() => {
    if (selectedService && startTime) {
      try {
        const startDateTime = parse(startTime, 'HH:mm', new Date())
        const endDateTime = addMinutes(startDateTime, selectedService.duration || 60)
        setEndTime(format(endDateTime, 'HH:mm'))
      } catch (error) {
        console.error('Error calculating end time:', error)
      }
    }
  }, [selectedService, startTime])

  // Handle date selection from datepicker
  const handleDateChange = (selectedDate: Date) => {
    setSelectedDate(selectedDate)
  }

  const handleDatePickerClose = (state: boolean) => {
    setShowDatePicker(state)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Client selection */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-4">
        <h3 className="text-lg font-semibold mb-4 dark:text-neutral-50">Cliente</h3>
        
        <SearchableInput
          label="Cliente"
          value={clientQuery}
          handler={(e) => setClientQuery(e.target.value)}
          selectedItem={
            selectedClient && (
              <SearchableSelectedItem
                icon={true}
                item={selectedClient}
                setSelected={() => setSelectedClient(null)}
              />
            )
          }
          data={
            clients?.data?.map((client: any) => (
              <SearchableInputItem
                key={client.id}
                data={{
                  id: client.id,
                  label: client.name,
                  description: client.email || client.phone,
                }}
                onClick={() => setSelectedClient(client)}
                hasIcon={true}
              />
            ))
          }
          emptyAction={{
            href: '/app/booking/clients/new',
            label: 'Nuevo cliente',
            title: 'No se encontraron resultados',
          }}
        />
        <InputError messages={errors?.client_id || []} />
      </div>

      {/* Appointment details */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-4">
        <h3 className="text-lg font-semibold mb-4 dark:text-neutral-50">Detalles de la cita</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <InputLabel>Fecha</InputLabel>
            <DatePicker 
              options={datePickerOptions} 
              onChange={handleDateChange} 
              show={showDatePicker} 
              setShow={handleDatePickerClose} 
            />
            <InputError messages={errors?.date || []} />
          </div>

          <div>
            <InputLabel>Estado de la cita</InputLabel>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="w-full border border-neutral-400 dark:border-neutral-700 rounded-lg p-2 dark:bg-neutral-800 dark:text-neutral-50"
            >
              <option value="pending">Pendiente</option>
              <option value="confirmed">Confirmada</option>
              <option value="completed">Completada</option>
              <option value="cancelled">Cancelada</option>
            </select>
            <InputError messages={errors?.status || []} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <InputLabel>Hora de inicio</InputLabel>
            <Input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
            <InputError messages={errors?.start_time || []} />
          </div>

          <div>
            <InputLabel>Hora de fin</InputLabel>
            <Input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
            <InputError messages={errors?.end_time || []} />
          </div>
        </div>

        <div className="mb-4">
          <SearchableInput
            label="Servicio"
            value={serviceQuery}
            handler={(e) => setServiceQuery(e.target.value)}
            selectedItem={
              selectedService && (
                <SearchableSelectedItem
                  icon={false}
                  item={selectedService}
                  setSelected={() => setSelectedService(null)}
                />
              )
            }
            data={
              services?.map((service: any) => (
                <SearchableInputItem
                  key={service.id}
                  data={{
                    id: service.id,
                    label: service.name,
                    description: `${service.duration} min - ${formatCurrency(service.price)}`,
                  }}
                  onClick={() => setSelectedService(service)}
                  hasIcon={true}
                />
              ))
            }
            emptyAction={{
              href: '/app/booking/services/new',
              label: 'Nuevo servicio',
              title: 'No se encontraron resultados',
            }}
          />
          <InputError messages={errors?.service_id || []} />
        </div>

        <div className="mb-4">
          <SearchableInput
            label="Profesional (opcional)"
            value={staffQuery}
            handler={(e) => setStaffQuery(e.target.value)}
            selectedItem={
              selectedStaff && (
                <SearchableSelectedItem
                  icon={true}
                  item={selectedStaff}
                  setSelected={() => setSelectedStaff(null)}
                />
              )
            }
            data={
              staff?.map((staffMember: any) => (
                <SearchableInputItem
                  key={staffMember.id}
                  data={{
                    id: staffMember.id,
                    label: staffMember.name,
                    description: staffMember.position || '',
                  }}
                  onClick={() => setSelectedStaff(staffMember)}
                  hasIcon={true}
                />
              ))
            }
            emptyAction={{
              href: '/app/booking/staff/new',
              label: 'Nuevo profesional',
              title: 'No se encontraron resultados',
            }}
          />
          <InputError messages={errors?.staff_id || []} />
        </div>

        <div>
          <InputLabel>Notas (opcional)</InputLabel>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-neutral-400 dark:border-neutral-700 rounded-lg p-2 dark:bg-neutral-800 dark:text-neutral-50"
            rows={3}
          />
          <InputError messages={errors?.notes || []} />
        </div>
      </div>

      {/* Error message for general errors */}
      {errors.general && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {errors.general[0]}
        </div>
      )}

      {/* Form actions */}
      <div className="flex justify-between">
        <Button
          variant="secondary-booking"
          onClick={() => router.push('/app/booking/appointments')}
          type="button"
        >
          Cancelar
        </Button>
        
        <Button
          variant="primary-booking"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Guardando...' : isEditing ? 'Actualizar cita' : 'Crear cita'}
        </Button>
      </div>
    </form>
  )
}

// Helper function to format currency
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export default AppointmentForm