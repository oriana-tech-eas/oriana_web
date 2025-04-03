'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { Contacts } from '../../_shared/@types/contacts'

interface useGetContactsProps { pageNumber: number, contactsType: 'customer' | 'supplier' | 'all', querySearch: string }

export const useGetContacts = ({ pageNumber, contactsType, querySearch }: useGetContactsProps) => {
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
  
  const { data, error, isLoading } = useSWR(`/api/contacts?${queryString}`, fetcher, { revalidateOnFocus: false })

  return {
    contacts: data,
    error,
    isLoading,
  }
}

export const useGetContact = (id: number) => {
  const { data, error, isLoading } = useSWR<Contacts>(['/api/contacts', id], () => fetcher(`/api/contacts/${id}`), { revalidateOnFocus: false })

  return {
    customer: data,
    error,
    isLoading,
  }
}

export const useDeleteContact = () => {
  const csrf = () => axios.get('/sanctum/csrf-cookie')
  const router = useRouter()

  const deleteContact = async (id: number) => {
    await csrf()

    axios
      .delete(`/api/contacts/${id}`)
      .then(() => {
        router.push('/contacts')
      })
  }

  return {
    deleteContact,
  }
}

export const useCreateContact = () => {
  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const createContact = async ({ setErrors, ...props }: {
    setErrors: React.Dispatch<React.SetStateAction<any>>,
    name: string,
    email: string,
    phone: string,
    address: string,
    contacts_type: 'customer' | 'supplier',
    document: string,
  }) => {
    await csrf()

    setErrors([])

    // Return the promise instead of using router.push directly
    return axios
      .post('/api/contacts', props)
      .catch(error => {
        setErrors(error.response.data.errors)
        throw error // Re-throw to allow handling in the component
      })
  }

  return {
    createContact,
  }
}