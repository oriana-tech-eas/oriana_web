'use client'

import Container from '@/components/Container/Container'
import React from 'react'
import { useContactsContext } from '@/app/app/_context/ContactsContext'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button/Button'
import ContactForm from '../components/ContactForm'

const NewContactPage = () => {
  const router = useRouter()
  const { refreshContacts } = useContactsContext()

  const handleSuccess = () => {
    refreshContacts()
    router.push('/app/market/contacts')
  }

  const handleCancel = () => {
    router.push('/app/market/contacts')
  }

  return (
    <Container>
      <div className='w-full md:max-w-lg mx-auto'>
        <div className='mb-5'>
          <Button href='/app/market/contacts' variant='secondary' className='w-fit mb-5'>Volver</Button>
          <h2 className='text-2xl font-semibold dark:text-neutral-50'>Registrar contacto</h2>
        </div>
        <ContactForm 
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      </div>
    </Container>
  )
}

export default NewContactPage