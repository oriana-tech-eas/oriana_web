
import Container from '@/components/Container/Container'
import React from 'react'
import ProductContent from './ProductsContent'
import { CubeIcon } from '@heroicons/react/24/outline'
import PageTitleLarge from '@/components/PageTitle/PageTitleLarge'

const Products = () => {
  return (
    <Container>
      <PageTitleLarge
        title='Productos'
        action='/products/new'
        actionLabel='Agregar producto'
        icon={<CubeIcon className='size-8 text-neutral-500 dark:text-neutral-400'/>}
      />

      <ProductContent />
    </Container>
  )
}

export default Products