import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import CompanyDetails from './CompanyDetails'

export const metadata = {
  title: 'Printit: Empresa',
}

const Company = () => {
  return (
    <Container>
      <PageTitle>Empresa</PageTitle>

      <CompanyDetails />
    </Container>
  )
}

export default Company