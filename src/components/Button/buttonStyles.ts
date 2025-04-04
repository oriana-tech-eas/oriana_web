export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'danger' 
  | 'link' 
  | 'ghost-link' 
  | 'neutral' 
  | 'neutral-outline' 
  | 'white-outline'
  // Market variants
  | 'primary-market'
  | 'secondary-market'
  | 'link-market'
  | 'ghost-link-market'
  | 'neutral-market'
  | 'neutral-outline-market'
  | 'white-market'
  // Connect variants
  | 'primary-connect'
  | 'secondary-connect'
  | 'link-connect'
  | 'ghost-link-connect'
  | 'neutral-connect'
  | 'neutral-outline-connect'
  | 'white-connect'
  // Booking variants
  | 'primary-booking'
  | 'secondary-booking'
  | 'link-booking'
  | 'ghost-link-booking'
  | 'neutral-booking'
  | 'neutral-outline-booking'
  // People variants
  | 'primary-people'
  | 'secondary-people'
  | 'link-people'
  | 'ghost-link-people'
  | 'neutral-people'
  | 'neutral-outline-people'

export type ButtonSize = 'sm' | 'md' | 'lg'

export const buttonVariants: Record<ButtonVariant, string> = {
  // Original variants
  'primary': 'bg-orange-600 disabled:hover:bg-orange-500 hover:bg-orange-700 hover:active:bg-orange-800 text-white dark:bg-orange-700 dark:hover:bg-orange-800 dark:hover:active:bg-orange-900 dark:text-neutral-50',
  'link': 'bg-transparent disabled:hover:text-transparent hover:text-orange-600 hover:active:text-orange-700 text-orange-500',
  'ghost-link': 'bg-transparent disabled:hover:text-transparent hover:text-orange-900 hover:active:text-orange-900 dark:text-neutral-50 dark:hover:text-neutral-200',
  'secondary': 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-neutral-800 border rounded-lg p-2 flex dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  'danger': 'bg-red-500 disabled:hover:bg-red-500 hover:bg-red-600 hover:active:bg-red-700 text-white rounded-lg p-2 flex',
  'neutral': 'bg-neutral-100 disabled:hover:bg-neutral-400 hover:bg-neutral-200 hover:active:bg-neutral-300 text-neutral-950 rounded-lg p-2 flex',
  'neutral-outline': 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-neutral-800 border border-neutral-400 rounded-lg p-2 flex dark:border-neutral-300 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  'white-outline': 'bg-transparent disabled:hover:bg-transparent hover:bg-black/5 hover:active:bg-black/10 text-neutral-50 border border-white rounded-lg p-2 flex dark:border-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  
  // Market variants (rose theme)
  'primary-market': 'bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 hover:active:bg-rose-700 text-white dark:bg-rose-700 dark:hover:bg-rose-800 dark:hover:active:bg-rose-900 dark:text-neutral-50',
  'link-market': 'bg-transparent disabled:hover:text-transparent hover:text-rose-600 hover:active:text-rose-700 text-rose-500',
  'ghost-link-market': 'bg-transparent disabled:hover:text-transparent hover:text-rose-900 hover:active:text-rose-900 dark:text-neutral-50 dark:hover:text-neutral-200',
  'secondary-market': 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-neutral-800 border rounded-lg p-2 flex dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  'neutral-market': 'bg-neutral-100 disabled:hover:bg-neutral-400 hover:bg-neutral-200 hover:active:bg-neutral-300 text-neutral-950 rounded-lg p-2 flex',
  'neutral-outline-market': 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-neutral-800 border border-neutral-400 rounded-lg p-2 flex dark:border-neutral-300 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  'white-market': 'bg-white disabled:hover:bg-neutral-100 hover:bg-neutral-50 hover:active:bg-neutral-100 text-rose-600 border border-white rounded-lg p-2 flex dark:border-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  
  // Connect variants (green theme)
  'primary-connect': 'bg-teal-500 disabled:hover:bg-teal-500 hover:bg-teal-600 hover:active:bg-teal-700 text-white dark:bg-teal-700 dark:hover:bg-teal-800 dark:hover:active:bg-teal-900 dark:text-neutral-50',
  'secondary-connect': 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-teal-800 border rounded-lg p-2 flex dark:border-teal-600 dark:text-teal-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  'link-connect': 'bg-transparent disabled:hover:text-transparent hover:text-teal-600 hover:active:text-teal-700 text-teal-500',
  'ghost-link-connect': 'bg-transparent disabled:hover:text-transparent hover:text-teal-900 hover:active:text-teal-900 dark:text-neutral-50 dark:hover:text-teal-200',
  'neutral-connect': 'bg-neutral-100 disabled:hover:bg-neutral-400 hover:bg-teal-50 hover:active:bg-teal-100 text-teal-950 rounded-lg p-2 flex',
  'neutral-outline-connect': 'bg-transparent disabled:hover:bg-transparent hover:bg-teal-50 hover:active:bg-teal-100 text-teal-800 border border-teal-400 rounded-lg p-2 flex dark:border-teal-300 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  'white-connect': 'bg-white disabled:hover:bg-white hover:bg-neutral-50 hover:active:bg-neutral-100 text-teal-700 hover:text-teal-800 border border-white rounded-lg p-2 flex dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  
  // Booking variants (amber/orange theme)
  'primary-booking': 'bg-amber-500 disabled:hover:bg-amber-500 hover:bg-amber-600 hover:active:bg-amber-700 text-white dark:bg-amber-700 dark:hover:bg-amber-800 dark:hover:active:bg-amber-900 dark:text-neutral-50',
  'secondary-booking': 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-amber-800 border rounded-lg p-2 flex dark:border-amber-600 dark:text-amber-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  'link-booking': 'bg-transparent disabled:hover:text-transparent hover:text-amber-600 hover:active:text-amber-700 text-amber-500',
  'ghost-link-booking': 'bg-transparent disabled:hover:text-transparent hover:text-amber-900 hover:active:text-amber-900 dark:text-neutral-50 dark:hover:text-amber-200',
  'neutral-booking': 'bg-neutral-100 disabled:hover:bg-neutral-400 hover:bg-amber-50 hover:active:bg-amber-100 text-amber-950 rounded-lg p-2 flex',
  'neutral-outline-booking': 'bg-transparent disabled:hover:bg-transparent hover:bg-amber-50 hover:active:bg-amber-100 text-amber-800 border border-amber-400 rounded-lg p-2 flex dark:border-amber-300 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  
  // People variants (violet theme)
  'primary-people': 'bg-violet-500 disabled:hover:bg-violet-500 hover:bg-violet-600 hover:active:bg-violet-700 text-white dark:bg-violet-700 dark:hover:bg-violet-800 dark:hover:active:bg-violet-900 dark:text-neutral-50',
  'secondary-people': 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-violet-800 border rounded-lg p-2 flex dark:border-violet-600 dark:text-violet-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
  'link-people': 'bg-transparent disabled:hover:text-transparent hover:text-violet-600 hover:active:text-violet-700 text-violet-500',
  'ghost-link-people': 'bg-transparent disabled:hover:text-transparent hover:text-violet-900 hover:active:text-violet-900 dark:text-neutral-50 dark:hover:text-violet-200',
  'neutral-people': 'bg-neutral-100 disabled:hover:bg-neutral-400 hover:bg-violet-50 hover:active:bg-violet-100 text-violet-950 rounded-lg p-2 flex',
  'neutral-outline-people': 'bg-transparent disabled:hover:bg-transparent hover:bg-violet-50 hover:active:bg-violet-100 text-violet-800 border border-violet-400 rounded-lg p-2 flex dark:border-violet-300 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
}

export const buttonSizes: Record<ButtonSize, string> = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-3',
  lg: 'py-4 px-4 text-lg'
}