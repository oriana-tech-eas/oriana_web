'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Modal from "@/components/Modal/Modal"
import { useContactsContext } from '@/app/app/_context/ContactsContext'
import ContactForm from '@/app/app/market/contacts/components/ContactForm'
import { useGetContact } from '@/app/app/market/contacts/_domain/contacts'


const EditContactModal = ({ params }: { params: { id: number } }) => {
  const { id } = params
  const router = useRouter()
  const { refreshContacts } = useContactsContext()
  const { contact, error, isLoading } = useGetContact(id)

  const handleSuccess = () => {
    refreshContacts()
    router.back()
  }

  const handleCancel = () => {
    router.back()
  }

  if (isLoading) {
    return (
      <Modal title='Editar contacto'>
        <div className='flex justify-center items-center p-4'>
          <p className='text-lg text-center text-neutral-400 animate-pulse'>Cargando...</p>
        </div>
      </Modal>
    )
  }

  if (error || !contact) {
    return (
      <Modal title='Error'>
        <div className='p-4'>
          <p className='text-lg text-center text-red-500'>Error al cargar el contacto</p>
        </div>
      </Modal>
    )
  }

  return (
    <Modal title='Editar contacto'>
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
    </Modal>
  )
}

export default EditContactModal