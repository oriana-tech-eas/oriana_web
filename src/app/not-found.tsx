import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div>
        <h2 className="text-6xl text-rose-500 font-bold">
          404
        </h2>

        <div className="mt-4 mb-4">
          <p className="text-gray-500">
            La página que buscas no existe
          </p>
        </div>
          
        <Link href="/" className="bg-rose-500 text-white rounded-lg p-2 w-full">Volver al inicio</Link>
      </div>
    </div>
  )
}

export default NotFound