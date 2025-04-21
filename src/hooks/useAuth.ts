import useSWR from 'swr'
import { useCallback, useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { User } from '@/app/app/_shared/@types/user'

// Domain types
export interface LoginCredentials {
  email: string
  password: string
  remember?: boolean
}

export interface RegistrationData {
  email: string
  password: string
  name: string
  [key: string]: any
}

export interface PasswordResetData {
  email: string
  password: string
  password_confirmation: string
  token: string
}

interface ErrorHandler {
  setErrors: (errors: any) => void
}

interface StatusHandler {
  setStatus: (status: string | null) => void
}

// Port - defines the contract for auth services
interface AuthPort {
  getUser: () => Promise<User>
  login: (credentials: LoginCredentials) => Promise<{token: string}>
  register: (data: RegistrationData) => Promise<void>
  forgotPassword: (email: string) => Promise<{status: string}>
  resetPassword: (data: PasswordResetData) => Promise<{status: string}>
  logout: () => Promise<void>
  resendEmailVerification: () => Promise<{status: string}>
  getCsrfToken: () => Promise<void>
}

// Adapter - implementation of the port using axios
const createAuthAdapter = (axios: any): AuthPort => {
  // Import axios dynamically to avoid localStorage reference during SSR
  const getAxiosInstance = () => {
    if (typeof window !== 'undefined') {
      return import('@/configs/axios').then(module => module.default)
    }
    return Promise.resolve(axios)
  }

  return {
    getUser: async () => {
      const axiosInstance = await getAxiosInstance()
      const response = await axiosInstance.get('api/user')
      return response.data
    },

    login: async (credentials: LoginCredentials) => {
      const axiosInstance = await getAxiosInstance()
      const response = await axiosInstance.post('/api/login', credentials)
      return response.data
    },

    register: async (data: RegistrationData) => {
      const axiosInstance = await getAxiosInstance()
      const response = await axiosInstance.post('/api/register', data)
      return response.data
    },

    forgotPassword: async (email: string) => {
      const axiosInstance = await getAxiosInstance()
      const response = await axiosInstance.post('/forgot-password', { email })
      return response.data
    },

    resetPassword: async (data: PasswordResetData) => {
      const axiosInstance = await getAxiosInstance()
      const response = await axiosInstance.post('/reset-password', data)
      return response.data
    },

    logout: async () => {
      const axiosInstance = await getAxiosInstance()
      const response = await axiosInstance.post('/logout')
      return response.data
    },

    resendEmailVerification: async () => {
      const axiosInstance = await getAxiosInstance()
      const response = await axiosInstance.post('/email/verification-notification')
      return response.data
    },

    getCsrfToken: async () => {
      const axiosInstance = await getAxiosInstance()
      await axiosInstance.get('/sanctum/csrf-cookie')
    }
  }
}

// Hook params
interface UseAuthParams {
  middleware?: 'guest' | 'auth'
  redirectIfAuthenticated?: string
}

// Hook that uses the adapter
export const useAuth = ({ middleware, redirectIfAuthenticated }: UseAuthParams = {}) => {
  const router = useRouter()
  const params = useParams()
  
  // Use ref to maintain stable reference to the auth service
  const authServiceRef = useRef<AuthPort | null>(null)
  
  // Create auth adapter on client only
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
    
    const initAuthService = async () => {
      if (typeof window !== 'undefined') {
        const { default: axios } = await import('@/configs/axios')
        authServiceRef.current = createAuthAdapter(axios)
      }
    }
    
    initAuthService()
  }, [])
  
  // Helper function to ensure auth service is available
  const getAuthService = useCallback(async (): Promise<AuthPort> => {
    if (!authServiceRef.current && typeof window !== 'undefined') {
      const { default: axios } = await import('@/configs/axios')
      authServiceRef.current = createAuthAdapter(axios)
    }
    
    if (!authServiceRef.current) {
      throw new Error('Auth service not initialized')
    }
    
    return authServiceRef.current
  }, [])

  // Fetch user data
  const { data: user, error, mutate } = useSWR<User>(
    isClient ? '/api/user' : null,
    async () => {
      try {
        const service = await getAuthService()
        return await service.getUser()
      } catch (error: any) {
        if (error.response?.status === 409) {
          router.push('/verify-email')
        }
        throw error
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  )

  // Get CSRF token for forms
  const csrf = useCallback(async () => {
    const service = await getAuthService()
    await service.getCsrfToken()
  }, [getAuthService])

  // Authentication methods
  const register = useCallback(async ({ setErrors, ...props }: ErrorHandler & RegistrationData) => {
    await csrf()
    setErrors([])

    try {
      const service = await getAuthService()
      await service.register(props)
      mutate()
    } catch (error: any) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors)
      } else {
        throw error
      }
    }
  }, [csrf, mutate, getAuthService])

  const login = useCallback(async ({ 
    setErrors, 
    setStatus, 
    email, 
    password, 
    remember 
  }: ErrorHandler & StatusHandler & LoginCredentials) => {
    await csrf()
    setErrors([])
    setStatus('loading')

    try {
      const service = await getAuthService()
      const response = await service.login({ email, password, remember })
      localStorage.setItem('token', response.token)
      setStatus('success')
      mutate()
    } catch (error: any) {
      if (error.response?.status === 422) {
        setStatus(null)
        setErrors(error.response.data.errors)
      } else {
        throw error
      }
    }
  }, [csrf, mutate, getAuthService])

  const forgotPassword = useCallback(async ({ 
    setErrors, 
    setStatus, 
    email 
  }: ErrorHandler & StatusHandler & { email: string }) => {
    await csrf()
    setErrors([])
    setStatus(null)

    try {
      const service = await getAuthService()
      const response = await service.forgotPassword(email)
      setStatus(response.status)
    } catch (error: any) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors)
      } else {
        throw error
      }
    }
  }, [csrf, getAuthService])

  const resetPassword = useCallback(async ({ 
    setErrors, 
    setStatus, 
    ...props 
  }: ErrorHandler & StatusHandler & Omit<PasswordResetData, 'token'>) => {
    await csrf()
    setErrors([])
    setStatus(null)

    try {
      const service = await getAuthService()
      const token = params.token as string
      const response = await service.resetPassword({ token, ...props })
      router.push('/login?reset=' + btoa(response.status))
    } catch (error: any) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors)
      } else {
        throw error
      }
    }
  }, [csrf, params.token, router, getAuthService])

  const resendEmailVerification = useCallback(async ({ 
    setStatus 
  }: { setStatus: (status: string) => void }) => {
    try {
      const service = await getAuthService()
      const response = await service.resendEmailVerification()
      setStatus(response.status)
    } catch (error) {
      // Handle error
    }
  }, [getAuthService])

  const logout = useCallback(async () => {
    try {
      const service = await getAuthService()
      await service.logout()
      localStorage.removeItem('token')
      mutate()
    } catch (error) {
      // Just mutate even if logout fails
      mutate()
    } finally {
      window.location.pathname = '/login'
    }
  }, [mutate, getAuthService])

  // Handle redirects based on authentication state
  useEffect(() => {
    if (!user && !error) return // Still loading
    
    if (middleware === 'guest' && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated)
    }
    
    if (
      window.location.pathname === '/verify-email' &&
      user?.email_verified_at
    ) {
      router.push(redirectIfAuthenticated || '/')
    }
  }, [user, error, middleware, redirectIfAuthenticated, router])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}