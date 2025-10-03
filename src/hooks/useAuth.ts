import { useEffect, useState } from 'react'
import { User } from '@/app/app/_shared/@types/user'
import { signOut, useSession } from 'next-auth/react'

export const useAuth = () => {
  const { data: session, status } = useSession()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setUser({
        id: session.user.email ?? '',
        name: session.user.name ?? '',
        email: session.user.email ?? '',
        username: session.user.email?.split('@')[0] ?? '',
        initials: session.user.name?.split(' ').map(n => n[0]).join('').toUpperCase() ?? '',
      })
    } else {
      setUser(null)
    }
  }, [session, status])

  const federatedLogout = async () => {
    try {
      const response = await fetch("/api/auth/federated-logout");
      const data = await response.json();
      if (response.ok) {
        await signOut({ redirect: false });
        window.location.href = data.url;
        return;
      }
      throw new Error(data.error);
    } catch (error) {
      console.log(error)
      alert(error);
      await signOut({ redirect: false });
      window.location.href = "/";
    }
  }

  return {
    user,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
    logout: federatedLogout
  }
}