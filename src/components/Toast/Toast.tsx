'use client'

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

const Toast = ({ message, type }: ToastProps) => {
  const [display, setDisplay] = useState(true)

  const ToastVariants = {
    success: 'border border-green-300 bg-green-50 text-green-800 dark:bg-green-500 dark:text-white',
    error: 'border border-red-300 bg-red-50 text-red-800 dark:bg-red-500 dark:text-white',
    warning: 'border border-yellow-300 bg-yellow-50 text-yellow-800 dark:bg-yellow-500 dark:text-white',
    info: 'border border-blue-300 rounded bg-blue-50 text-blue-800 dark:bg-blue-500 dark:text-white',
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className={`fixed z-50 bottom-4 right-4 p-3 rounded-md shadow duration-300 delay-75 ${display ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-5 opacity-0 pointer-events-none'} ${ToastVariants[type]}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mx-2">
            {message}
          </div>
        </div>
        <button onClick={() => setDisplay(false)} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default Toast
