'use client'

import { fetcher } from '@/app/app/_infraestructure/fetcher'
import useSWR from 'swr'

export type Tax = {
  id: number;
  name: string;
  rate: number;
}

export type Taxes = {
  data: Tax[]
  [key: string]: any;
}

export const useGetTaxes = () => {
  const { data, error, isLoading } = useSWR<Taxes>('/api/taxes', fetcher, { revalidateOnFocus: false })

  return {
    taxes: data,
    taxesError: error,
    taxesLoading: isLoading,
  }
}