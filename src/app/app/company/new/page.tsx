'use client'

import Button from "@/components/Button/Button"
import Container from "@/components/Container/Container"
import Input from "@/components/Input/Input"
import InputError from "@/components/InputError/InputError"
import InputLabel from "@/components/InputLabel/InputLabel"
import { useState } from "react"
import { useCreateCompany } from "../../_domain/companies/company"

const NewCompany = () => {
  const { createCompany } = useCreateCompany()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({
    name: [],
    address: [],
    phone: [],
    description: []
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      address: formData.get('address') as string,
      phone: formData.get('phone') as string,
      description: formData.get('description') as string,
    }
    try {
      createCompany({
        name: data.name,
        address: data.address,
        phone: data.phone,
        description: data.description,
        setErrors
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container>
      <div className='w-full md:max-w-lg mx-auto'>
        <div className='mb-5'>
          <Button href='/app/company' variant='secondary' className='w-fit mb-5'>Volver</Button>
          <h2 className='text-2xl font-semibold dark:text-neutral-50'>Mi empresa</h2>
        </div>      
        <form onSubmit={handleSubmit}>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='name'>Nombre</InputLabel>
            <Input name='name' type='text' required/>
            <InputError messages={errors?.name} className='mt-2'/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='address'>Dirección</InputLabel>
            <Input name='address' type='text' required/>
            <InputError messages={errors?.address} className='mt-2'/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='phone'>Teléfono</InputLabel>
            <Input name='phone' type='text' required/>
            <InputError messages={errors?.phone} className='mt-2'/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='description'>Descripción</InputLabel>
            <Input name='description' type='text' required/>
            <InputError messages={errors?.description} className='mt-2'/>
          </div>
          <div className='mb-2'>
            <Button variant='primary-market' disabled={isSubmitting} type='submit'>
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default NewCompany