'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'

export const useGetCompanies = () => {
  const { data, error, isLoading } = useSWR('/api/companies', fetcher, { revalidateOnFocus: false })

  return {
    company: data?.data,
    error,
    isLoading,
  }
}

export const useCreateCompany = () => {
  const csrf = () => axios.get('/sanctum/csrf-cookie')
  const router = useRouter()

  const createCompany = async ({ setErrors, ...props }: {
    setErrors: React.Dispatch<React.SetStateAction<any>>,
    name: string,
    phone: string,
    address: string,
    description: string,
  }) => {
    await csrf()

    setErrors(() => [])

    axios
      .post('/api/companies', props)
      .then(() => {
        router.push('/app/company')
      })
      .catch(error => {
        if (error.response) {
          setErrors(() => error.response.data.errors)
        } else {
          setErrors(() => ({ general: ['Error al crear la empresa'] }))
        }
      })
  }

  return { createCompany }
}