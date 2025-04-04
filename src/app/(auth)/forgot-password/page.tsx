'use client'

import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '@/components/Button/Button'

const Login = () => {
  const [email, setEmail] = useState('')

  return (
    <>
      <div className="text-center mb-6">
        <h1 className='text-3xl font-bold text-neutral-800'>
          Olvidaste tu contraseña
        </h1>
        <p className='mt-2 text-neutral-600'>
          No te preocupes, ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.
        </p>
      </div>
      <Card>
        <div className='p-5'>
          <h2 className='text-2xl font-semibold mb-5 text-center dark:text-neutral-50'></h2>
          <form>
            <div className='mb-2 flex flex-col'>
              <InputLabel>Email</InputLabel>
              <Input type='email' value={email} required/>
            </div>
            <div className='mb-2'>
              <Button variant='primary' className='w-full'>Enviar link de recuperación</Button>
            </div>
          </form>
        </div>
      </Card>
    </>
  )
}

export default Login