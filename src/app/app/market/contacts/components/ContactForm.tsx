'use client'

import React, { useState, useEffect } from 'react'
import InputLabel from '@/components/InputLabel/InputLabel'
import Input from '@/components/Input/Input'
import InputError from '@/components/InputError/InputError'
import Button from '@/components/Button/Button'
import { ContactFormData, ContactFormErrors, ContactFormProps } from '../_domain/types'
import { useCreateContact, useUpdateContact } from '../_domain/contacts'
import { useContactsContext } from '@/app/app/_context/ContactsContext'

const ContactForm: React.FC<ContactFormProps> = ({
  initialData,
  onSuccess,
  onCancel,
  isEditing = false,
  contactId
}) => {
  const { createContact } = useCreateContact();
  const { updateContact } = useUpdateContact();
  const { refreshContacts } = useContactsContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  // Default form data
  const defaultFormData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    document: '',
    contacts_type: 'customer',
  };

  // Merge initial data with defaults
  const formData = { ...defaultFormData, ...initialData };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      contacts_type: formData.get('contacts_type') as "customer" | "supplier",
      address: formData.get('address') as string,
      document: formData.get('document') as string,
    };
    
    try {
      if (isEditing && contactId) {
        await updateContact(contactId, {
          ...data,
          setErrors
        });
      } else {
        await createContact({
          ...data,
          setErrors
        });
      }
      
      refreshContacts();
      onSuccess();
    } catch (error) {
      console.error('Error saving contact:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-2 flex flex-col'>
        <InputLabel>Tipo de contacto</InputLabel>
        <ul className="items-center w-full text-sm font-medium text-neutral-900 bg-white border border-neutral-400 rounded-lg sm:flex dark:bg-neutral-700 dark:border-neutral-600 dark:text-white">
          <li className="w-full border-b border-neutral-400 sm:border-b-0 sm:border-r dark:border-neutral-600">
            <div className="flex items-center ps-3">
              <input 
                id="customer" 
                type="radio" 
                defaultChecked={formData.contacts_type === 'customer'} 
                value="customer" 
                name="contacts_type" 
                className="w-4 h-4 text-rose-500 bg-neutral-100 border-neutral-300 focus:ring-rose-500 dark:focus:ring-rose-500 dark:ring-offset-neutral-700 dark:focus:ring-offset-neutral-700 focus:ring-2 dark:bg-neutral-600 dark:border-neutral-500" 
              />
              <label htmlFor="customer" className="w-full py-3 ms-2 text-sm font-medium text-neutral-900 dark:text-neutral-300">
                Cliente
              </label>
            </div>
          </li>
          <li className="w-full border-b border-neutral-400 sm:border-b-0 sm:border-r dark:border-neutral-600">
            <div className="flex items-center ps-3">
              <input 
                id="supplier" 
                type="radio" 
                defaultChecked={formData.contacts_type === 'supplier'}
                value="supplier" 
                name="contacts_type" 
                className="w-4 h-4 text-rose-500 bg-neutral-100 border-neutral-300 focus:ring-rose-500 dark:focus:ring-rose-500 dark:ring-offset-neutral-700 dark:focus:ring-offset-neutral-700 focus:ring-2 dark:bg-neutral-600 dark:border-neutral-500" 
              />
              <label htmlFor="supplier" className="w-full py-3 ms-2 text-sm font-medium text-neutral-900 dark:text-neutral-300">
                Proveedor
              </label>
            </div>
          </li>
        </ul>
      </div>

      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor='name'>Nombre</InputLabel>
        <Input name='name' type='text' defaultValue={formData.name} required/>
        <InputError messages={errors?.name || []} className='mt-2'/>
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <Input name='email' type='email' defaultValue={formData.email} required/>
        <InputError messages={errors?.email || []} className='mt-2'/>
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor='phone'>Teléfono</InputLabel>
        <Input name='phone' type='tel' defaultValue={formData.phone} required/>
        <InputError messages={errors?.phone || []} className='mt-2'/>
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor='address'>Dirección</InputLabel>
        <Input name='address' type='text' defaultValue={formData.address} required/>
        <InputError messages={errors?.address || []} className='mt-2'/>
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor='document'>Documento</InputLabel>
        <Input name='document' type='text' defaultValue={formData.document} required/>
        <InputError messages={errors?.document || []} className='mt-2'/>
      </div>
      <div className='mb-2 flex gap-2'>
        <Button variant='primary-market' type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Guardando...' : isEditing ? 'Actualizar' : 'Guardar'}
        </Button>
        <Button variant='secondary-market' type='button' onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;