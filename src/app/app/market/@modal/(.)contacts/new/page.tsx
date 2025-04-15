'use client'

import { useRouter } from 'next/navigation'
import Modal from "@/components/Modal/Modal"
import React from "react"
import { useContactsContext } from '@/app/app/_context/ContactsContext'
import ContactForm from '@/app/app/market/contacts/components/ContactForm'


const ContactsNewPage = () => {
  const router = useRouter()
  const { refreshContacts } = useContactsContext()

  const handleSuccess = () => {
    refreshContacts()
    // Force redirect to contacts main page instead of going back
    router.push('/app/market/contacts')
  }

  const handleCancel = () => {
    // Force redirect to contacts main page instead of going back to avoid modal issues
    router.push('/app/market/contacts')
  }

  return (
    <Modal title='Agregar nuevo contacto'>
      <ContactForm
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
    </Modal>
  )
}

export default ContactsNewPage