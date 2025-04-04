import Container from '@/components/Container/Container'
import React from 'react'
import ProductForm from './ProductForm'
import Button from '@/components/Button/Button'

const NewProduct = () => {
  return (
    <Container>
      <div className='mb-5'>
        <Button href='/products' variant='secondary' className='w-fit mb-4'>Volver</Button>
        <h2 className='text-2xl font-semibold dark:text-neutral-50'>Crear producto</h2>
      </div>
      <ProductForm />
    </Container>
  )
}

export default NewProduct