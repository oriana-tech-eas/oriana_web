'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useProducts = ({ pageNumber, querySearch }: { pageNumber: number, querySearch?: string }) => {
  const router = useRouter()
  const [errors, setErrors] = useState([])

  const queryParams: { [key: string]: number | string } = {}
  
  if (pageNumber !== undefined) {
    queryParams['page'] = pageNumber;
  }
  
  if (querySearch !== undefined && querySearch !== '' && querySearch.length > 2) {
    queryParams['query'] = querySearch;
  }

  const queryString = Object.keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');
    
  const { data: products, error: allProductsError, isLoading: allProductsLoading } = useSWR(`/api/products?${queryString}`, fetcher, { revalidateOnFocus: false })

  // Create a new product
  const createProduct = async (props: any) => {
    await axios.get('/sanctum/csrf-cookie')

    setErrors([])

    try {
      await axios.post('/api/products', props)
      router.push('/products')
    } catch (error: any) {
      setErrors(error.response.data.errors)
    }
  }

  return {
    products,
    allProductsError,
    allProductsLoading,
    createProduct,
    errors,
  }
}

export const useGetProduct = (id: number) => {
  const { data: product, error: singleProductError, isLoading: singleProductLoading } = useSWR(id ? `/api/products/${id}` : null, () => fetcher(`/api/products/${id}`), { revalidateOnFocus: false })

  return {
    product,
    error: singleProductError,
    isLoading: singleProductLoading,
  }
}

export const useDeleteProduct = () => {
  const router = useRouter()

  const deleteProduct = async (id: number) => {
    await axios.delete(`/api/products/${id}`)
    .then(() => {
      router.push('/products')
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  return {
    deleteProduct,
  }
}