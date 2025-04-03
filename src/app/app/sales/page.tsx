import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import PageTitle from '@/components/PageTitle/PageTitle';
import PageContent from './PageContent';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

export const metadata = {
	title: 'Printit: Ventas',
}

const Sales = () => {
	return (
		<Container>
			<div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <div className='size-16 rounded-xl from-neutral-50 to-neutral-200 bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center'>
            <ArrowUpCircleIcon className='size-8 text-neutral-500 dark:text-neutral-400'/>
          </div>
          <PageTitle>Ventas</PageTitle>
        </div>
        <Button href='/sales/new' variant='primary' className='w-fit'>
          Nueva venta
        </Button>
      </div>

			<PageContent />
		</Container>
	);
};

export default Sales;
