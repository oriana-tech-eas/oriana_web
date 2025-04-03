import Container from '@/components/Container/Container'
import React from 'react'
import { Metadata } from 'next';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import ContactsContent from './ContactsContent';
import PageTitleLarge from '@/components/PageTitle/PageTitleLarge';

export const metadata: Metadata = {
  title: "Contactos",
  description: "Directorio de contactos disponibles",
};

const Contacts = () => {

  return (
    <Container>
      <PageTitleLarge
        title='Contactos'
        action='/contacts/new'
        actionLabel='Nuevo contacto'
        icon={<UserGroupIcon className='size-8 text-neutral-500 dark:text-neutral-400'/>}
      />

      <div className='my-6'>
        <ContactsContent />
      </div>
    </Container>
  )
}

export default Contacts