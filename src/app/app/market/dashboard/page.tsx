'use client';

import RecentTransactions from './components/RecentTransactions';
import { OnboardingProvider } from '../../_context/OnboardingContext';
import OnboardingContainer from '@/components/Onboarding/OnboardingContainer';
import { useAuth } from '@/hooks/useAuth';
import OverallStats from './components/OverAllStats';
import QuickAccess from './components/QuickAccess';
import Activity from './components/Activity';
import QuickActions from './components/QuickActions';

const DashboardPage = () => {
	const { user } = useAuth();

	return (
		<OnboardingProvider>
			<div className='grid grid-cols-12'>
				<div className='col-span-12 md:col-span-8 px-5'>
					{user && <OnboardingContainer user={user} />}
					<OverallStats />
					<RecentTransactions />
				</div>
				<div className='col-span-12 md:col-span-4'>
					<QuickAccess />
					<Activity />
          <QuickActions />
				</div>
			</div>
		</OnboardingProvider>
	);
};

export default DashboardPage;
