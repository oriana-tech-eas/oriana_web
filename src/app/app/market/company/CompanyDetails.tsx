'use client'

import Button from "@/components/Button/Button"
import EmptyState from "@/components/EmptyState/EmptyState"
import { useGetCompanies } from "../_domain/companies/company"

const CompanyDetails = () => {
  const { company, error, isLoading }: any = useGetCompanies()

  console.log(company);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <EmptyState
        type="error"
        title="Error al cargar"
        description="Hubo un problema al cargar los datos. Por favor, intenta nuevamente."
        actionButton={
          <Button onClick={() => window.location.reload()} variant="primary-market" className="w-fit mx-auto">
            Reintentar
          </Button>
        }
      />
    )
  }

  return (
    <>
      {company?.data?.length > 0 ? (
        <div className="divide-y">
          {company.data?.map((item: any) => (
            <div key={item.id} className="mb-4 py-3">
              <h2 className="font-bold text-2xl">{item.name}</h2>
              <p>Dirección: {item.address}</p>
              <p>Teléfono: {item.phone}</p>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          type="empty"
          title="Agrega tu empresa"
          description="Para comenzar a vender, agrega tu empresa"
          actionButton={
            <Button href="/app/company/new" variant="primary-market" className="w-fit mx-auto">
              Agregar empresa
            </Button>
          }
        />
      )}
    </>
  )
}

export default CompanyDetails;