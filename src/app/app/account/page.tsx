'use client'

import Avatar from '@/components/Avatar/Avatar'
import Container from '@/components/Container/Container'
import { useAuth } from '@/hooks/useAuth'

const Account = () => {
  const { user } = useAuth()
  return (
    <Container>
      <div className='w-full md:w-6/12 mx-auto'>
        <div className='border-b dark:border-neutral-700 py-5'>
          <Avatar initials='AF' name='Anderson Fariña' size='xl' className='mb-4' />
          <h2 className='text-3xl font-bold dark:text-neutral-50'>
            {user?.name}
          </h2>
          <span className='bg-violet-100 text-violet-500 p-1 rounded'>
            @{user?.username}
          </span>
        </div>
        <div className="py-5 dark:text-neutral-50">
          <div className='flex'>
            <p className='font-semibold'>Email</p>
            <p className='ml-2'>
              <a href='mailto:example@example.com'>
                {user?.email}
              </a>
            </p>
          </div>
          <div className='flex'>
            <p className='font-semibold'>Dirección</p>
            <p className='ml-2'>
              Main Street 123
            </p>
          </div>
        </div>
        <div className='bg-rose-50 border border-rose-300 dark:border-rose-700 dark:bg-rose-950 rounded-xl p-5'>
          <h4 className='text-xl font-bold text-rose-600 dark:text-rose-200'>Printit Empresarial</h4>
          <p className='text-rose-500 dark:text-rose-400'>Vence el 25/10/28</p>
        </div>
      </div>
    </Container>
  )
}

export default Account