'use client'

import React, { useEffect, useState } from 'react'
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import { ArrowLeftIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import InvoicePreview from './InvoicePreview'
import SearchableInput from '@/components/SearchableInput/SearchableInput'
import { useGetContacts } from '../../contacts/_domain/contacts'
import SearchableSelectedItem from '@/components/SearchableInput/SearchableSelectedItem'
import SearchableInputItem from '@/components/SearchableInput/SearchableInputItem'
import { useProducts } from '../../products/_domain/products'
import { Contact } from '../../_shared/@types/contacts'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'

const NewSale = () => {
	const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [contactQuery, setContactQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
	const [listOfProducts, setListOfProducts] = useState<any>([])
  const [productQuery, setProductQuery] = useState('')
  const { products } = useProducts({
    pageNumber: 1,
    querySearch: productQuery
  })
  const { contacts } = useGetContacts({
    pageNumber: 1,
    contactsType: 'customer',
    querySearch: contactQuery
  })

	useEffect(() => {
		setListOfProducts((prev: any) => [...prev, selectedProduct])
	}, [selectedProduct])

  return (
		<Container>
			<div className='grid grid-cols-12'>
				<div className='col-span-5'>
					<Button variant='secondary' href='/sales' className='w-fit'>
						<ArrowLeftIcon 	className='size-5 mr-2' />
						Volver
					</Button>
					<form className='mt-8'>
						<div className='mb-8'>
							<h3 className='text-xl font-semibold mb-4 dark:text-neutral-50'>
								Detalles de la venta
							</h3>
							<SearchableInput
								label='Cliente'
								selectedItem={
									selectedContact && (
										<SearchableSelectedItem
											icon={true}
											item={selectedContact}
											setSelected={() => setSelectedContact(null)}
										/>
									)
								}
								value={contactQuery}
								handler={(e) => setContactQuery(e.target.value)}
								data={contacts?.data?.data?.map((contact: Contact) => (
									<SearchableInputItem
										key={contact.id}
										data={{
											id: contact.id,
											label: contact.name,
											description: contact.email,
										}}
										onClick={() => setSelectedContact(contact)}
										hasIcon={true}
									/>
								))}
								emptyAction={{
									href: '/contacts/new',
									label: 'Nuevo cliente',
									title: 'No se encontraron resultados',
								}}
							/>
						</div>
						<div className='flex flex-col'>
							<h3 className='text-xl font-semibold mb-4 dark:text-neutral-50'>
								Productos
							</h3>
							<div className='flex gap-2 items-center'>
								<SearchableInput
									className='flex-1'
									label='Producto'
									selectedItem={
										selectedProduct && (
											<SearchableSelectedItem
												icon={true}
												item={selectedProduct}
												setSelected={() => setSelectedProduct(null)}
											/>
										)
									}
									value={productQuery}
									handler={(e) => setProductQuery(e.target.value)}
									data={
                    products?.data?.data?.map((product: any) => (
                      <SearchableInputItem
                        key={product.id}
                        data={{
                          id: product.id,
                          label: product.name,
                          description: product.price,
                        }}
                        onClick={() => setSelectedProduct(product)}
                        hasIcon={true}
                      />
                    ))
                  }
									emptyAction={{
										href: '/products/new',
										label: 'Nuevo producto',
										title: 'No se encontraron resultados',
									}}
								/>
								<div className='w-40 flex gap-2 items-center'>
									<div>
										<InputLabel>Cantidad</InputLabel>
										<Input type='number' required />
									</div>
									<div>
										<InputLabel>Descuento</InputLabel>
										<Input type='number' required />
									</div>
									<Button variant='link' size='sm' className='w-fit mt-4'>
										<TrashIcon className='size-5 mt-2 text-red-500' />
									</Button>
								</div>
							</div>
							<Button variant='link' size='sm' className='w-fit mt-4'>
								<PlusIcon className='size-5 mr-2' />
								Nuevo item
							</Button>
						</div>

						<div className='flex gap-2 border-t dark:border-neutral-700 mt-5'>
							<Button variant='secondary' className='w-fit mt-4'>
								Guardar borrador
							</Button>
							<Button variant='primary' className='w-fit mt-4'>
								Registrar venta
							</Button>
						</div>
					</form>
				</div>
				<div className='col-span-6 col-start-7'>
					<InvoicePreview 
						products={listOfProducts} 
						contact={selectedContact}
						total={200000}
						subTotal={200000}
						discount={0}
					/>
				</div>
			</div>
		</Container>
	);
}

export default NewSale