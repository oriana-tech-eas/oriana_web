import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import PageContent from './PageContent'
import Button from '@/components/Button/Button'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'

const Expenses = () => {
  return (
    <Container>
      <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <div className='size-16 rounded-xl from-neutral-50 to-neutral-200 bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center'>
            <ArrowDownCircleIcon className='size-8 text-neutral-500 dark:text-neutral-400'/>
          </div>
          <PageTitle>Gastos</PageTitle>
        </div>
        <Button href='/expenses/new' variant='primary' className='w-fit'>
          Registrar gasto
        </Button>
      </div>
      

      <PageContent />
    </Container>
  )
}

export default Expenses