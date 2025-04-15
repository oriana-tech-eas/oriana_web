'use client'
import React, { useState } from 'react'
import ProductsList from './components/ProductsList'
import { useProducts } from './_domain/products'
import { formatDateTime } from '@/utils'
import PaginatorInfo from '@/components/Paginator/PaginatorInfo'
import Paginator from '@/components/Paginator/Paginator'

const ProductContent = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { products, allProductsLoading, allProductsError }: any = useProducts({
    pageNumber: pageNumber
  })

  return (
    <div className='mt-8'>
      <div className='grid grid-cols-12 my-10'>
        <div className='col-span-12 md:col-span-4'>
          <h5 className='text-sm text-neutral-500'>Total</h5>
          <p className="text-xl dark:text-gray-100">{products?.data?.total}</p>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <h5 className='text-sm text-neutral-500'>Nuevos</h5>
          <p className="text-xl dark:text-gray-100">{products?.recently_added}</p>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <h5 className='text-sm text-neutral-500'>Ultima actualización</h5>
          <p className="text-xl dark:text-gray-100">{formatDateTime(products?.last_update)}</p>
        </div>
      </div>
      {
        !allProductsLoading && !allProductsError &&
        <>
          <ProductsList products={products?.data} />
          <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label='Customer paginate'>
            <PaginatorInfo
              from={products?.data?.from}
              to={products?.data?.to}
              total={products?.data?.total}
            />
            <Paginator setter={setPageNumber} items={products?.data?.links} />
          </nav>
        </>
      }
    </div>
  )
}

export default ProductContent