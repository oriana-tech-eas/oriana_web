'use client'

import React from 'react'
import Container from '@/components/Container/Container'
import ServiceForm from '../../ServiceForm'
import { useGetService } from '../../../../_domain/booking/useServices'
import EmptyState from '@/components/EmptyState/EmptyState'

interface EditServicePageProps {
  params: {
    id: string
  }
}

const EditServicePage = ({ params }: EditServicePageProps) => {
  const serviceId = parseInt(params.id, 10)
  const { service, isLoading, error } = useGetService(serviceId)

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

  if (error || !service) {
    return (
      <Container>
        <EmptyState
          type="error"
          title="Error al cargar el servicio"
          description="No se pudo encontrar el servicio solicitado. Por favor, intenta de nuevo."
        />
      </Container>
    )
  }

  return (
    <Container>
      <ServiceForm initialData={service} />
    </Container>
  )
}

export default EditServicePage