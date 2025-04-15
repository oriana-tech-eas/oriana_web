import React from 'react'

const SkeletonItem = () => {
  return (
    <div className='border px-3 py-2 rounded-lg flex flex-col gap-2 justify-between border-neutral-300 dark:border-neutral-800 animate-pulse'>
      <div className='w-64 h-5 bg-neutral-200 dark:bg-neutral-800 rounded'></div> 
      <div className='w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded'></div>
    </div>
  )
}

const ContactsListSkeleton = () => {
  return (
    <div className='w-full space-y-4'>
      {
        Array.from({ length: 6 }).map((_, i) => (
          <SkeletonItem key={i}/>
        ))
      }
    </div>
  )
}

export default ContactsListSkeleton