import Container from '@/components/Container/Container'
import PageTitleLarge from '@/components/PageTitle/PageTitleLarge'
import { Cog8ToothIcon} from '@heroicons/react/24/outline'
import ServicesPageContent from './ServicesPageContent'

export const metadata = {
  title: 'Servicios - Oriana Booking',
}

export default function ServicesPage() {
  return (
    <Container>
      <PageTitleLarge
        title="Servicios"
        action="/app/booking/services/new"
        actionLabel="Nuevo servicio"
        product="booking"
        icon={<Cog8ToothIcon className="size-8 text-neutral-500 dark:text-neutral-400" />}
      />
      <ServicesPageContent />
    </Container>
  )
}