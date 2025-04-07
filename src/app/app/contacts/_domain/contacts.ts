'use client'

import useSWR, { mutate } from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { Contact } from '../../_shared/@types/contacts'
import { ContactFormData, ContactFormErrors } from './types'
import { useCallback } from 'react'

interface useGetContactsProps { 
  pageNumber: number, 
  contactsType: 'customer' | 'supplier' | 'all', 
  querySearch: string 
}

// Port: Define interfaces for repository operations
export interface ContactRepository {
  getContacts(params: useGetContactsProps): Promise<any>;
  getContact(id: number): Promise<Contact>;
  createContact(data: ContactFormData & { setErrors: (errors: ContactFormErrors) => void }): Promise<any>;
  updateContact(id: number, data: ContactFormData & { setErrors: (errors: ContactFormErrors) => void }): Promise<any>;
  deleteContact(id: number): Promise<void>;
}

// Adapter: Implementation of the repository using axios
export const createContactRepository = (): ContactRepository => {
  const csrf = () => axios.get('/sanctum/csrf-cookie')

  return {
    getContacts: async ({ pageNumber, contactsType, querySearch }: useGetContactsProps) => {
      const queryParams: { [key: string]: string | number } = {};
      
      if (contactsType !== undefined && contactsType !== 'all') {
        queryParams['contacts_type'] = contactsType;
      }
      if (pageNumber !== undefined) {
        queryParams['page'] = pageNumber;
      }
      if (querySearch !== undefined && querySearch !== '' && querySearch.length > 2) {
        queryParams['query'] = querySearch;
      }

      const queryString = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&');
      
      return fetcher(`/api/contacts?${queryString}`);
    },

    getContact: async (id: number) => {
      return fetcher(`/api/contacts/${id}`);
    },

    createContact: async ({ setErrors, ...data }: ContactFormData & { setErrors: (errors: ContactFormErrors) => void }) => {
      await csrf();
      setErrors({});

      try {
        const response = await axios.post('/api/contacts', data);
        return response.data;
      } catch (error: any) {
        if (error.response?.data?.errors) {
          setErrors(error.response.data.errors);
        }
        throw error;
      }
    },

    updateContact: async (id: number, { setErrors, ...data }: ContactFormData & { setErrors: (errors: ContactFormErrors) => void }) => {
      await csrf();
      setErrors({});

      try {
        const response = await axios.put(`/api/contacts/${id}`, data);
        return response.data;
      } catch (error: any) {
        if (error.response?.data?.errors) {
          setErrors(error.response.data.errors);
        }
        throw error;
      }
    },

    deleteContact: async (id: number) => {
      await csrf();
      await axios.delete(`/api/contacts/${id}`);
    },
  };
};

// Hook to use the repository with SWR for fetching contacts
export const useGetContacts = ({ pageNumber, contactsType, querySearch }: useGetContactsProps) => {
  const repository = createContactRepository();
  
  const { data, error, isLoading } = useSWR(
    [`/api/contacts`, pageNumber, contactsType, querySearch],
    () => repository.getContacts({ pageNumber, contactsType, querySearch }),
    { revalidateOnFocus: false }
  );

  return {
    contacts: data,
    error,
    isLoading,
  };
};

// Hook to use the repository with SWR for fetching a single contact
export const useGetContact = (id: number) => {
  const repository = createContactRepository();
  
  const { data, error, isLoading } = useSWR<Contact>(
    id ? [`/api/contacts`, id] : null,
    () => repository.getContact(id),
    { revalidateOnFocus: false }
  );

  return {
    contact: data,
    error,
    isLoading,
  };
};

// Hook to create a contact
export const useCreateContact = () => {
  const repository = createContactRepository();
  const refreshContactsList = useCallback(() => {
    mutate((key) => typeof key === 'string' && key.startsWith('/api/contacts'));
  }, []);

  return {
    createContact: async (data: ContactFormData & { setErrors: (errors: ContactFormErrors) => void }) => {
      const result = await repository.createContact(data);
      refreshContactsList();
      return result;
    },
    refreshContactsList,
  };
};

// Hook to update a contact
export const useUpdateContact = () => {
  const repository = createContactRepository();
  const refreshContactsList = useCallback(() => {
    mutate((key) => typeof key === 'string' && key.startsWith('/api/contacts'));
  }, []);

  return {
    updateContact: async (id: number, data: ContactFormData & { setErrors: (errors: ContactFormErrors) => void }) => {
      const result = await repository.updateContact(id, data);
      refreshContactsList();
      return result;
    },
    refreshContactsList,
  };
};

// Hook to delete a contact
export const useDeleteContact = () => {
  const repository = createContactRepository();
  const router = useRouter();
  const refreshContactsList = useCallback(() => {
    mutate((key) => typeof key === 'string' && key.startsWith('/api/contacts'));
  }, []);

  const deleteContact = async (id: number) => {
    try {
      await repository.deleteContact(id);
      refreshContactsList();
      router.push('/app/contacts');
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  };

  return {
    deleteContact,
    refreshContactsList,
  };
};