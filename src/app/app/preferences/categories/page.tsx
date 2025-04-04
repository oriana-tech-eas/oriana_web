import PageTitle from '@/components/PageTitle/PageTitle'
import CategoriesList from './CategoriesList'
import Button from '@/components/Button/Button'
import { PlusIcon } from '@heroicons/react/24/outline'

const Categories = () => {
  return (
    <div className='my-10'>
      <p className='text-neutral-500 mb-5'>
        Aquí encontrarás categorías que pueden usarse en el registro de productos y gastos, tienes algunas predefinidas y puedes agregar más según necesites.
      </p>
      <CategoriesList />
      <Button href='/preferences/categories/new' variant='link' className='w-fit mt-5'>
        <PlusIcon className='size-5'/>
        Nueva categoría
      </Button>
    </div>
  )
}

export default Categories