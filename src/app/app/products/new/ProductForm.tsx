'use client'

import Button from '@/components/Button/Button'
import Checkbox from '@/components/Checkbox/Checkbox'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import SearchableInput from '@/components/SearchableInput/SearchableInput'
import SearchableInputItem from '@/components/SearchableInput/SearchableInputItem'
import SearchableSelectedItem from '@/components/SearchableInput/SearchableSelectedItem'
import React, { useState } from 'react'
import { Tax, useGetTaxes } from '../../_domain/taxes/useTaxes'
import { Category, useGetCategories } from '../../_domain/categories/useGetCategories'

const ProductForm = () => {
  const [isCompound, setIsCompound] = useState(false)
  const [useInventory, setUseInventory] = useState(false)
  const { taxes } = useGetTaxes()
  const { categories } = useGetCategories({
    category_type: 'product'
  })
  const [selectedTax, setSelectedTax] = useState<Tax | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid grid-cols-12 gap-8'>
        {/* Basic information */}
        <div className='col-span-12 md:col-span-8 space-y-5'>
          <div className='border rounded-xl p-5'>
            <div className='mb-2 flex flex-col'>
              <InputLabel htmlFor="name">Nombre</InputLabel>
              <Input type='text' name='name' required/>
            </div>
            <div className='mb-2 flex flex-col'>
              <InputLabel htmlFor="description">Descripción</InputLabel>
              <Input type='text' name='description' required/>
            </div>
            <div className='mb-2 flex flex-col'>
              <InputLabel htmlFor='barcode'>Código de barras</InputLabel>
              <Input type='text' name='barcode' required/>
            </div>
          </div>
          
          {/* Precio y stock */}
          <div className='border rounded-xl p-5'>
            <div className='mb-2 flex flex-col'>
              <InputLabel htmlFor="price">Precio</InputLabel>
              <Input type='text' name='price' required/>
            </div>
            <div className='mb-2 flex flex-col'>
              <InputLabel htmlFor="price">Costo</InputLabel>
              <Input type='text' name='price' required/>
            </div>

          </div>

          <div className='border rounded-xl p-5'>
            <div className='mb-2 flex flex-col'>
              <Checkbox label='Inventario' checked={useInventory} onChange={setUseInventory}/>
            </div>
            {
              useInventory &&
              <>
                <div className='mb-2 flex flex-col'>
                  <InputLabel htmlFor="quantity">Cantidad</InputLabel>
                  <Input type='text' name='quantity' disabled={!useInventory}/>
                </div>
                <div className='mb-2 flex flex-col'>
                  <InputLabel htmlFor="stock">En stock</InputLabel>
                  <Input type='text' name='stock' disabled={!useInventory}/>
                </div>
              </>
            }
          </div>

          {/* Compound product */}
          <div className='border rounded-xl p-5'>
            <div className='mb-2 flex flex-col'>
              <Checkbox label='Producto compuesto' checked={isCompound} onChange={setIsCompound}/>
            </div>
            {
              isCompound && 
              <div className='mb-2 flex flex-col'>
                <InputLabel htmlFor='items'>Items</InputLabel>
                <Input type='text' name='items' disabled={!isCompound}/>  
              </div>
            }
          </div>
        </div>

        {/* Image and extras */}
        <div className='col-span-12 md:col-span-4 space-y-5'>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor="image">Imagen</InputLabel>
            <Input type='file' name='image'/>
          </div>
          <div className='mb-2 flex flex-col'>
            <SearchableInput
              label='Categoría'
              selectedItem={
                selectedCategory &&
                <SearchableSelectedItem
                  icon={false}
                  item={selectedCategory}
                  setSelected={() => setSelectedCategory(null)}
                />
              }
              data={
                categories?.map((category) => 
                  <SearchableInputItem
                    key={category.id}
                    data={{
                      id: category.id,
                      label: category.name,
                    }}
                    onClick={() => setSelectedCategory(category)}
                  />
                )
              }
            />
          </div>
          <div className='flex flex-col gap-2'>
            <SearchableInput
              label='Impuesto'
              selectedItem={
                selectedTax ? 
                <SearchableSelectedItem
                  icon={false}
                  item={selectedTax}
                  setSelected={() => setSelectedTax(null)}
                />
                : ''
              }
              data={
                taxes?.data?.map((tax) => 
                  <SearchableInputItem
                    key={tax.id}
                    data={{
                      id: tax.id,
                      label: tax.name,
                    }}
                    onClick={() => setSelectedTax(tax)}
                  />
                )
              }
            />
          </div>
        </div>
      </div>

      <div className='mt-2'>
        <Button type='submit' variant='primary' className='w-fit'>Guardar producto</Button>
      </div>
    </form>
  )
}

export default ProductForm