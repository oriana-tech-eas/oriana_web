import React from 'react'
import Card from '../components/Card'
import RegisterForm from './RegisterForm'
import Button from '@/components/Button/Button'

const Register = () => {

  return (
    <>
      <div className='text-center mb-6'>
				<h1 className='text-3xl font-bold text-neutral-800'>
          Crea tu cuenta
				</h1>
				<p className='mt-2 text-neutral-600'>
          Regístrate para acceder a todas nuestras herramientas y servicios.
				</p>
			</div>
      <Card>
        <div className='p-8'>
          <RegisterForm />
        </div>
        <p className='text-center text-sm my-5'>Ya tengo cuenta <Button href='/login' variant='link' className='inline-flex'>Inicia sesión</Button></p>
      </Card>
    </>
  )
}

export default Register