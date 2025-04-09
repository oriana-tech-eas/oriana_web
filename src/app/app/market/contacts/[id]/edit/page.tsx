'use client'

import Container from '@/components/Container/Container'
import React from 'react'
import { useGetContact } from '../../_domain/contacts'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/navigation'
import { useContactsContext } from '@/app/app/_context/ContactsContext'
import ContactForm from '../../components/ContactForm'

const EditContactPage = ({ params }: { params: { id: number } }) => {
  const { id } = params
  const router = useRouter()
  const { refreshContacts } = useContactsContext()
  const { contact, error, isLoading } = useGetContact(id)

  const handleSuccess = () => {
    refreshContacts()
    router.push(`/app/contacts/${id}`)
  }

  const handleCancel = () => {
    router.push(`/app/contacts/${id}`)
  }

  if (isLoading) {
    return (
      <Container>
        <div className='w-full md:max-w-lg mx-auto'>
          <p className='text-lg text-center text-neutral-400 animate-pulse'>Cargando...</p>
        </div>
      </Container>
    )
  }

  if (error || !contact) {
    return (
      <Container>
        <div className='w-full md:max-w-lg mx-auto'>
          <p className='text-lg text-center text-red-500'>Error al cargar el contacto</p>
          <Button href='/app/contacts' variant='secondary' className='mx-auto mt-4 block'>
            Volver a contactos
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className='w-full md:max-w-lg mx-auto'>
        <div className='mb-5'>
          <Button href={`/app/contacts/${id}`} variant='secondary' className='w-fit mb-5'>Volver</Button>
          <h2 className='text-2xl font-semibold dark:text-neutral-50'>Editar contacto</h2>
        </div>
        <ContactForm
          initialData={{
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            address: contact.address,
            document: contact.document,
            contacts_type: contact.contacts_type as "customer" | "supplier",
          }}
          isEditing={true}
          contactId={contact.id}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      </div>
    </Container>
  )
}

export default EditContactPage