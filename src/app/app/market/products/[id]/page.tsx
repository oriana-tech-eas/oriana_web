/* eslint-disable @next/next/no-img-element */
'use client'

import Container from '@/components/Container/Container'
import React from 'react'
import Button from '@/components/Button/Button'
import { useDeleteProduct, useGetProduct } from '../_domain/products'
import { parseDatabaseBoolean } from '@/utils'
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/outline'
import InputLabel from '@/components/InputLabel/InputLabel'
import Input from '@/components/Input/Input'
import DetailSkeleton from './DetailSkeleton'

const ProductDetail = ({ params }: { params: { id: number} }) => {
  const { id } = params
  const { product, error, isLoading } = useGetProduct(id)
  const { deleteProduct } = useDeleteProduct()

  const handleDelete = async () => {
    await deleteProduct(id)
  }

  return (
    <Container>
        <div className='flex justify-between mb-5'>
          <Button href='/products' variant='secondary' className='w-fit'>Volver</Button>
          <h1 className='text-2xl font-bold dark:text-neutral-100'>Información general</h1>
          <div className='flex items-center gap-2'>
            <Button variant='secondary'>Editar</Button>
            <Button variant='danger' onClick={handleDelete}>Eliminar</Button>
          </div>
        </div>
        {isLoading && <DetailSkeleton />}
        {
          !isLoading && product && (
            <div className='grid grid-cols-12 gap-8'>
              <div className='col-span-12 md:col-span-8 space-y-5'>
                <div className='border dark:border-neutral-700 p-5 rounded-xl'>
                <h2 className='text-2xl font-bold dark:text-neutral-50'>{product?.name}</h2>
                <p className='text-neutral-500'>{ product.description }</p>

                <div className='flex flex-col gap-2 my-2'>
                  <InputLabel>Código de barras</InputLabel>
                  <Input value={product.barcode || ''} disabled />
                </div>
                </div>

                <div className='border dark:border-neutral-700 p-5 rounded-xl'>
                  <h3 className='text-lg font-bold dark:text-neutral-50'>Precio y Stock</h3>
                  <div className='flex gap-2 my-2 items-center'>
                    <p className='dark:text-neutral-50'>Inventario:</p>
                    { 
                      parseDatabaseBoolean(product.inventory) ? 
                        (<CheckBadgeIcon className='size-6 text-green-500' />) : 
                        (<XCircleIcon className='size-6 text-red-500' />)
                    }
                  </div>
                  <div className='flex flex-col gap-2 my-2'>
                    <InputLabel>Precio</InputLabel>
                    <Input value={product.price} disabled />
                  </div>
                  <div className='flex flex-col gap-2 my-2'>
                    <InputLabel>Costo</InputLabel>
                    <Input value={product.cost} disabled />
                  </div>
                  <div className='flex flex-col gap-2 my-2'>
                    <InputLabel>En stock</InputLabel>
                    <Input value={product.stock} disabled />
                  </div>
                </div>

              </div>
              <div className='col-span-12 md:col-span-4 space-y-5'>
                <div>
                  <InputLabel>Imagen</InputLabel>
                  <div className='w-full h-60 rounded-lg bg-neutral-200 overflow-hidden mb-5 mx-auto'>
                    <img src={product.image} alt={product.name} className='w-full h-full object-cover'/>
                  </div>
                </div>
                <div className='border dark:border-neutral-700 p-5 rounded-xl'>
                  <div className='flex flex-col gap-2 my-2'>
                    <InputLabel>Categoria</InputLabel>
                    <Input value={product.category?.name} disabled />
                  </div>
                </div>
                <div className='border dark:border-neutral-700 p-5 rounded-xl'>
                  <div className='flex flex-col gap-2 my-2'>
                    <InputLabel>Impuestos</InputLabel>
                    {
                      product.taxes?.map((tax: {name: string, id: number}) => (
                        <Input key={tax?.id} value={tax?.name} disabled />
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        }
        {
          !isLoading && error && (
            <p>Ocurrió un error al cargar el producto</p>
          )
        }
    </Container>
  )
}

export default ProductDetail