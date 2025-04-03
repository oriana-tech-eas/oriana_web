import React from 'react'
import { EyeIcon } from '@heroicons/react/24/outline'
import { Contact, Contacts } from '../_domain/types'
import Link from 'next/link'
import Avatar from '@/components/Avatar/Avatar'

const ContactsList = ({ contacts }: Contacts) => {
  
  return (
    <ul className='w-full flex flex-col space-y-2'>
      {
        contacts?.map((contact: Contact) => (
          <li key={contact.id} className='border border-neutral-300 dark:border-neutral-700 px-3 py-2 rounded-lg gap-4 flex items-center justify-between'>
            <Avatar initials={contact.initials} name={contact.name} size='md'/>
            <div className='flex-1'>
              <h5 className='font-semibold dark:text-neutral-50'>{contact.name}</h5>
              <p className='text-neutral-500'>{contact.email}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Link href={`/contacts/${contact.id}`} className='hover:bg-neutral-100 dark:hover:bg-neutral-800 p-5 rounded-full'>
                <EyeIcon className='size-5 text-neutral-500'/>
              </Link>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default ContactsList