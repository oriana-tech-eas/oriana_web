'use client'

import React, { useState } from 'react'
import { useDeleteCategory, useGetCategories } from '../../_domain/categories/useGetCategories'
import { TrashIcon } from '@heroicons/react/24/outline'
import Button from '@/components/Button/Button'
import Toast from '@/components/Toast/Toast'
import { useSWRConfig } from 'swr'

interface MessageProp {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

interface CategoryItemProp {
  id: string
  name: string
  is_shared: boolean
}

const CategoriesList = () => {
  const [message, setMessage] = useState<MessageProp | null>(null)
  const { mutate } = useSWRConfig()
  const { categories, isLoading, error }: any = useGetCategories({
    category_type: 'all'
  })
  const { deleteCategory } = useDeleteCategory()

  const handleDelete = async (id: string) => {
    console.log('Deleting category with id:', id)
    try {
      await deleteCategory(id)
    } catch (error) {
      setMessage({
        message: 'Error al eliminar la categoría',
        type: 'error'
      })
    } finally {
      mutate('/api/categories?category_type=all')
      mutate('/api/categories?category_type=product')
      mutate('/api/categories?category_type=expense')
      setMessage({
        message: 'Categoría eliminada con éxito',
        type: 'success'
      })
    }
  }

  return isLoading ? <div>Cargando...</div> : (
    <>
      {
        message && <Toast type={message.type}>{message.message}</Toast>
      }
      <div className='mt-5'>
        <ul className='border dark:border-neutral-700 overflow-hidden rounded-lg divide-y divide-neutral-200 dark:divide-neutral-700'>
          {categories?.map((category: CategoryItemProp) => (
            <li key={category.id} className='flex items-center justify-between py-3 px-2 dark:text-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-900 duration-200 group'>
              {category.name}

              {
                !category.is_shared && (
                  <Button variant="ghost-link" onClick={() => handleDelete(category.id)}>
                    <TrashIcon className='h-4 w-4 ml-2 text-neutral-600 dark:text-neutral-300 hover:text-red-500 duration-150 ease-linear opacity-0 group-hover:opacity-100' />
                  </Button>
                )
              }              
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CategoriesList