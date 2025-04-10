'use client'

import React, { useState } from 'react'
import Container from '@/components/Container/Container'
import PageTitleLarge from '@/components/PageTitle/PageTitleLarge'
import { Cog8ToothIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useGetServices } from '../../_domain/booking/useServices'
import Button from '@/components/Button/Button'
import EmptyState from '@/components/EmptyState/EmptyState'
import { formatCurrency } from '@/utils/currencies'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import { useToast } from '@/components/Toast/ToastProvider'

const ServicesPage = () => {
  const { addToast } = useToast()
  const [searchQuery, setSearchQuery] = useState('')
  const { services, isLoading, error, refreshServices } = useGetServices(searchQuery.length > 2 ? searchQuery : undefined)
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`
    }
    
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    
    if (remainingMinutes === 0) {
      return `${hours} h`
    }
    
    return `${hours} h ${remainingMinutes} min`
  }
  
  return (
    <Container>
      <PageTitleLarge
        title="Servicios"
        action="/app/booking/services/new"
        actionLabel="Nuevo servicio"
        product="booking"
        icon={<Cog8ToothIcon className="size-8 text-neutral-500 dark:text-neutral-400" />}
      />
      
      <div className="my-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <InputLabel>Buscar servicios</InputLabel>
            <Input
              type="search"
              placeholder="Buscar por nombre"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        
        {!isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-4 animate-pulse"
              >
                <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2 mb-4"></div>
                <div className="flex justify-between">
                  <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded w-1/4"></div>
                  <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : services && services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services?.map((service) => (
              <div 
                key={service.id} 
                className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-4 relative group"
              >
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                  <Button 
                    variant="secondary-booking" 
                    size="sm"
                    href={`/app/booking/services/${service.id}/edit`}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="danger" 
                    size="sm"
                    onClick={() => {
                      // In a real implementation, this would show a confirmation dialog
                      // and then delete the service using useServiceActions
                      addToast('Esta funcionalidad estará disponible pronto', 'info')
                    }}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
                
                <h3 className="text-lg font-medium dark:text-neutral-50 mb-1">
                  {service.name}
                </h3>
                {service.description && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
                    {service.description}
                  </p>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-amber-700 dark:text-amber-400">
                    {formatCurrency({ amount: service.price, currency: 'PYG' })}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {formatDuration(service.duration)}
                  </span>
                </div>
                
                {service.category_name && (
                  <span className="inline-block mt-2 px-2 py-1 text-xs rounded bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
                    {service.category_name}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            type="empty"
            title="No hay servicios"
            description="No se encontraron servicios. Crea un nuevo servicio para empezar."
            actionButton={
              <Button
                variant="primary-booking"
                href="/app/booking/services/new"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Nuevo servicio
              </Button>
            }
          />
        )}
      </div>
    </Container>
  )
}

export default ServicesPage