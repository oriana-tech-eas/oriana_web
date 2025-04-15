/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Link from 'next/link'
import { formatCurrency } from '@/utils/currencies'

const ProductsList = ({ products }: any) => {

  return (
    <ul className='w-full mx-auto flex flex-col space-y-2'>
      {
        products?.data.map((product: any) => (
          <li key={product.id} className='border duration-200 dark:border-neutral-700 px-3 py-2 rounded-lg flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-900'>
            <Link href={`/products/${product.id}`}>
              <div className='flex gap-3 items-center justify-between'>
                <div className='size-20 rounded-lg bg-neutral-200 overflow-hidden'>
                  <img src={product.image} alt={product.name} className='w-full h-full object-fill'/>
                </div>
                <div className='flex-1'>
                  <h5 className='font-semibold text-lg dark:text-neutral-50'>{product.name}</h5>
                  <p className='text-neutral-400 text-sm'>{product.description}</p>
                  <p className='text-neutral-800 dark:text-neutral-300'>
                    Precio: <span className='font-semibold'>{formatCurrency({ amount: product.price, currency: "PYG" })} Gs.</span>
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default ProductsList