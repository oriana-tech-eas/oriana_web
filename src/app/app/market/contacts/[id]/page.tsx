'use client'

import Container from '@/components/Container/Container'
import React from 'react'
import { useDeleteContact, useGetContact } from '../_domain/contacts'
import Button from '@/components/Button/Button'
import Avatar from '@/components/Avatar/Avatar'
import Link from 'next/link'

const ContactDetail = ({ params }: { params: { id: number} }) => {
  const { id } = params
  const { contact, error, isLoading } = useGetContact(id)
  const { deleteContact } = useDeleteContact()

  const handleDelete = () => {
    if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      try {
        deleteContact(id)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <Container>
      <div className='w-full md:max-w-3xl mx-auto'>
        {isLoading && <p className='text-lg text-center text-neutral-400 animate-pulse'>Cargando...</p>}
        {
          !isLoading && contact && (
            <div className='border dark:text-neutral-50 dark:border-neutral-700 rounded-2xl max-w-xl mx-auto'>
              <Avatar initials={contact?.initials} name={contact?.name} size='xl' className='mx-5 my-5'/>
              <div className='p-5'>
                <h2 className='text-2xl font-bold'>{contact?.name}</h2>
                <p className='mt-2'><span className='font-semibold'>Dirección:</span> {contact.address}</p>
                <p className='mt-1'><span className='font-semibold'>Email:</span> {contact.email}</p>
                <p className='mt-1'><span className='font-semibold'>Teléfono:</span> {contact.phone}</p>
                <p className='mt-1'><span className='font-semibold'>Documento:</span> {contact.document}</p>
                <p className='mt-1'><span className='font-semibold'>Tipo:</span> {contact.contacts_type === 'customer' ? 'Cliente' : 'Proveedor'}</p>
              </div>
              <div className='border-t dark:border-neutral-700 p-5 flex gap-2'>
                <Link href={`/app/contacts/${id}/edit`} passHref>
                  <Button variant='secondary'>Editar</Button>
                </Link>
                <Button variant='danger' onClick={handleDelete}>Eliminar</Button>
              </div>
            </div>
          )
        }
        {
          !isLoading && error && (
            <p>Ocurrió un error al cargar el contacto</p>
          )
        }
      </div>
    </Container>
  )
}

export default ContactDetail