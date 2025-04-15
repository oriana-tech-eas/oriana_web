'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import InputError from '@/components/InputError/InputError'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Service } from '../../_shared/@types/booking'
import { useServiceActions } from '../../_domain/booking/useServices'
import { useGetServiceCategories } from '../../_domain/booking/useServices'
import { useToast } from '@/components/Toast/ToastProvider'

interface ServiceFormProps {
  initialData?: Service
}

const ServiceForm = ({ initialData }: ServiceFormProps) => {
  const router = useRouter()
  const { addToast } = useToast()
  const isEditing = !!initialData
  
  // Form state
  const [name, setName] = useState(initialData?.name || '')
  const [description, setDescription] = useState(initialData?.description || '')
  const [price, setPrice] = useState(initialData?.price || 0)
  const [duration, setDuration] = useState(initialData?.duration || 60)
  const [categoryId, setCategoryId] = useState<number | undefined>(initialData?.category_id)
  const [color, setColor] = useState(initialData?.color || '#f59e0b') // Default amber color
  const [isActive, setIsActive] = useState(initialData?.is_active !== false)
  
  // Fetch categories
  const { categories } = useGetServiceCategories()
  const { createService, updateService, errors, isSubmitting } = useServiceActions()

  // Format price input
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Strip non-numeric characters
    const rawValue = e.target.value.replace(/[^0-9]/g, '')
    const numericValue = parseInt(rawValue, 10) || 0
    setPrice(numericValue)
  }

  // Format price for display
  const formattedPrice = new Intl.NumberFormat('es-PY', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const serviceData = {
      name,
      description,
      price,
      duration,
      category_id: categoryId,
      color,
      is_active: isActive
    }
    
    try {
      if (isEditing && initialData) {
        await updateService(initialData.id, serviceData)
        addToast('Servicio actualizado correctamente', 'success')
      } else {
        await createService(serviceData)
        addToast('Servicio creado correctamente', 'success')
      }
      
      router.push('/app/booking/services')
    } catch (error) {
      console.error('Error saving service:', error)
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center">
        <Button 
          variant="ghost-link" 
          href="/app/booking/services"
          className="mr-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Volver
        </Button>
        <h1 className="text-2xl font-bold dark:text-neutral-50">
          {isEditing ? 'Editar servicio' : 'Nuevo servicio'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white dark:bg-neutral-900 rounded-lg border dark:border-neutral-700 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <InputLabel htmlFor="name">Nombre del servicio</InputLabel>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <InputError messages={errors?.name || []} />
            </div>
            
            <div>
              <InputLabel htmlFor="category">Categoría (opcional)</InputLabel>
              <select
                id="category"
                className="w-full border border-neutral-400 dark:border-neutral-700 rounded-lg p-2 dark:bg-neutral-800 dark:text-neutral-50"
                value={categoryId || ''}
                onChange={(e) => setCategoryId(e.target.value ? parseInt(e.target.value, 10) : undefined)}
              >
                <option value="">Selecciona una categoría</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <InputError messages={errors?.category_id || []} />
            </div>
            
            <div className="md:col-span-2">
              <InputLabel htmlFor="description">Descripción (opcional)</InputLabel>
              <textarea
                id="description"
                className="w-full border border-neutral-400 dark:border-neutral-700 rounded-lg p-2 dark:bg-neutral-800 dark:text-neutral-50"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <InputError messages={errors?.description || []} />
            </div>
            
            <div>
              <InputLabel htmlFor="price">Precio (Gs.)</InputLabel>
              <Input
                id="price"
                type="text"
                value={formattedPrice}
                onChange={handlePriceChange}
                required
              />
              <InputError messages={errors?.price || []} />
            </div>
            
            <div>
              <InputLabel htmlFor="duration">Duración (minutos)</InputLabel>
              <Input
                id="duration"
                type="number"
                min="5"
                step="5"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value, 10))}
                required
              />
              <InputError messages={errors?.duration || []} />
            </div>
            
            <div>
              <InputLabel htmlFor="color">Color</InputLabel>
              <div className="flex">
                <input
                  id="color"
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="p-1 h-10 w-10 border border-neutral-400 dark:border-neutral-700 rounded-lg mr-2 cursor-pointer"
                />
                <Input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex-1"
                />
              </div>
              <InputError messages={errors?.color || []} />
            </div>
            
            <div className="flex items-center">
              <input
                id="is_active"
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="rounded bg-neutral-50 active:bg-amber-500 checked:bg-amber-500 hover:checked:bg-amber-600 focus:checked:bg-amber-500 outline-none focus:ring-2 focus:ring-amber-500/35 focus:ring-offset-1 duration-200"
              />
              <InputLabel htmlFor="is_active" className="ml-2">
                Servicio activo
              </InputLabel>
              <InputError messages={errors?.is_active || []} />
            </div>
          </div>
        </div>

        {/* Error message for general errors */}
        {errors?.general && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {errors.general[0]}
          </div>
        )}

        {/* Form actions */}
        <div className="flex justify-between">
          <Button
            variant="secondary-booking"
            onClick={() => router.push('/app/booking/services')}
            type="button"
          >
            Cancelar
          </Button>
          
          <Button
            variant="primary-booking"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Guardando...' : isEditing ? 'Actualizar servicio' : 'Crear servicio'}
          </Button>
        </div>
      </form>

      {isEditing && (
        <div className="mt-8 pt-6 border-t dark:border-neutral-700">
          <h2 className="text-xl font-semibold mb-4 dark:text-neutral-50">Zona de peligro</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Al eliminar este servicio, también se eliminarán todas las citas asociadas. Esta acción no se puede deshacer.
          </p>
          <Button
            variant="danger"
            onClick={() => {
              // Show confirmation dialog
              if (window.confirm('¿Estás seguro de eliminar este servicio? Esta acción no se puede deshacer.')) {
                // In a real implementation, call deleteService from useServiceActions
                addToast('Esta funcionalidad estará disponible pronto', 'info')
              }
            }}
          >
            Eliminar servicio
          </Button>
        </div>
      )}
    </div>
  )
}

export default ServiceForm