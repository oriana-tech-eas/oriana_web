'use client'

import Container from '@/components/Container/Container'
import React from 'react'
import { useDeleteContact, useGetContact } from '../_domain/contacts'
import Button from '@/components/Button/Button'
import Avatar from '@/components/Avatar/Avatar'

const CustomerDetail = ({ params }: { params: { id: number} }) => {
  const { id } = params
  const { customer, error, isLoading } = useGetContact(id)
  const { deleteContact } = useDeleteContact()

  const handleDelete = () => {
    try {
      deleteContact(id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <div className='w-full md:max-w-3xl mx-auto'>
        {isLoading && <p className='text-lg text-center text-neutral-400 animate-pulse'>Cargando...</p>}
        {
          !isLoading && customer && (
            <div className='border dark:text-neutral-50 dark:border-neutral-700 rounded-2xl max-w-xl mx-auto'>
              <Avatar initials={customer?.initials} name={customer?.name} size='xl' className='mx-5 my-5'/>
              <div className='p-5'>
                <h2 className='text-2xl font-bold'>{customer?.name}</h2>
                <p>{ customer.address }</p>
                <p>{ customer.email }</p>
                <p>{ customer.phone }</p>
              </div>
              <div className='border-t dark:border-neutral-700 p-5 flex gap-2'>
                <Button variant='secondary'>Editar</Button>
                <Button variant='danger' onClick={handleDelete}>Eliminar</Button>
              </div>
            </div>
          )
        }
        {
          !isLoading && error && (
            <p>Ocurrió un error al cargar el cliente</p>
          )
        }
      </div>
    </Container>
  )
}

export default CustomerDetail