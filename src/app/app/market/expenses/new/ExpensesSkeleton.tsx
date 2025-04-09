import React from 'react'

const ExpensesItemSkeleton = () => {
  return (
    <div className='w-full h-10 flex items-center justify-around border-b'>
      <div className='w-28 h-5 rounded-lg bg-neutral-300 dark:bg-neutral-700 animate-pulse'></div>
      <div className='w-28 h-5 rounded-lg bg-neutral-300 dark:bg-neutral-700 animate-pulse'></div>
      <div className='w-28 h-5 rounded-lg bg-neutral-300 dark:bg-neutral-700 animate-pulse'></div>
      <div className='w-28 h-5 rounded-lg bg-neutral-300 dark:bg-neutral-700 animate-pulse'></div>
    </div>
  )
}

const ExpensesSkeleton = () => {
  return (
    <div className='w-full overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-700'>
      <div className='w-full h-12 animate-pulse rounded-t-lg border-b border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-600'></div>
      {[1, 2, 3, 4, 5].map((index) => (
        <ExpensesItemSkeleton key={index} />
      ))}
    </div>
  )
}

export default ExpensesSkeleton