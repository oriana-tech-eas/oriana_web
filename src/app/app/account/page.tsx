'use client'

import Container from '@/components/Container/Container'
import { useAuth } from '@/hooks/useAuth'
import UserProfile from './components/UserProfile'
import RecentActivity from './components/RecentActivity'
import SubscriptionInfo from './components/SubscriptionInfo'
import Connections from './components/Connections'

const Account = () => {
  const { user } = useAuth()
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">
        Mi cuenta
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <UserProfile user={user} />
          <RecentActivity />
        </div>
        
        <div className="md:col-span-1">
          <SubscriptionInfo plan={user?.plan} />
          {/* Implement connections later */}
          {/* <Connections /> */}
        </div>
      </div>
    </Container>
  )
}

export default Account