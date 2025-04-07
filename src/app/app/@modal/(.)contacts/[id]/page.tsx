'use client'

import React from 'react'
import Button from '@/components/Button/Button'
import Avatar from '@/components/Avatar/Avatar'
import Modal from '@/components/Modal/Modal'
import { useDeleteContact, useGetContact } from '@/app/app/contacts/_domain/contacts'

const CustomerDetailModal = ({ params }: { params: { id: number} }) => {
  const { id } = params
  const { contact, error, isLoading } = useGetContact(id)
  const { deleteContact } = useDeleteContact()

  const handleDelete = () => {
    try {
      deleteContact(id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal title='Contacto'>
      <div className='w-full md:max-w-3xl mx-auto'>
        {isLoading && <p className='text-lg text-center text-neutral-400 animate-pulse'>Cargando...</p>}
        {
          !isLoading && contact && (
            <>
              <Avatar initials={contact?.initials} name={contact?.name} size='xl' className='mx-auto my-5'/>
              <div className='p-5'>
                <h2 className='text-2xl font-bold'>{contact?.name}</h2>
                <p>{ contact.address }</p>
                <p>{ contact.email }</p>
                <p>{ contact.phone }</p>
              </div>
              <div className='p-5 flex gap-2'>
                <Button href={`/app/contacts/${id}/edit`} variant='secondary'>Editar</Button>
              </div>
            </>
          )
        }
        {
          !isLoading && error && (
            <p>Ocurrió un error al cargar el cliente, intente nuevamente.</p>
          )
        }
      </div>
    </Modal>
  )
}

export default CustomerDetailModal