const DetailSkeleton = () => {

  return (
    <div className='border rounded-2xl max-w-xl mx-auto'>
      <div className='p-5'>
        <div className='w-full h-48 rounded-lg bg-neutral-200 dark:bg-neutral-800 overflow-hidden mb-5 mx-auto animate-pulse'></div>
          <div className="h-8 w-48 mb-2 bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-200 dark:bg-neutral-800 h-3 w-full animate-pulse"></div>
            <div className="bg-neutral-200 dark:bg-neutral-800 h-3 w-full animate-pulse"></div>
            <div className="bg-neutral-200 dark:bg-neutral-800 h-3 w-full animate-pulse"></div>
          </div>

        <div className='flex flex-col gap-2 my-2'>
          <div className="bg-neutral-200 dark:bg-neutral-800 h-3 w-20 animate-pulse"></div>
          <div className="bg-neutral-200 dark:bg-neutral-800 h-3 w-20 animate-pulse"></div>
        </div>

        <div className='flex flex-col gap-2 my-2'>
          <div className="bg-neutral-200 dark:bg-neutral-800 h-3 w-20 animate-pulse"></div>
          <div className="bg-neutral-200 dark:bg-neutral-800 h-3 w-20 animate-pulse"></div>
        </div>

        <div className='border-t p-5 flex gap-2'>
          <div className="bg-neutral-200 dark:bg-neutral-800 w-40 h-10 animate-pulse"></div>
          <div className="bg-neutral-200 dark:bg-neutral-800 w-40 h-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default DetailSkeleton;