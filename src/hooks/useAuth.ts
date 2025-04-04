import useSWR from 'swr'
import { useCallback, useLayoutEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from '@/configs/axios'
import { User } from '@/app/app/_shared/@types/user'

interface UseAuthParams {
    middleware?: string,
    redirectIfAuthenticated?: any
}

export interface LoginProps {
    email: string,
    password: string,
    remember?: boolean,
    setErrors?: React.SetStateAction<any>,
    setStatus?: React.SetStateAction<any>
}

export const useAuth = ({ middleware, redirectIfAuthenticated } : UseAuthParams = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }), {
                revalidateOnFocus: false,
                revalidateOnReconnect: true,
            }
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }: {setErrors: React.SetStateAction<any>, props: any}) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, email, password, remember }: LoginProps) => {
        await csrf()

        setErrors([])
        setStatus('loading')

        axios
            .post('/login', {
                email,
                password,
                remember
            })
            .then(() => {
                mutate()
                setStatus('success')
            })
            .catch(error => {
                if (error.response.status !== 422) throw error
                setStatus(null)
                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }: {setErrors: React.SetStateAction<any>, setStatus: React.SetStateAction<any>, email: string}) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props } : {setErrors: React.SetStateAction<any>, setStatus: React.SetStateAction<any>, props: any}) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }: {setStatus: React.SetStateAction<any>}) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = useCallback(async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }

        window.location.pathname = '/login'
    }, [error, mutate])

    useLayoutEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            router.push(redirectIfAuthenticated)
        }
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        ) {
            router.push(redirectIfAuthenticated)
        }
        if (middleware === 'auth' && error) {
            logout()
        }
    }, [user, error, logout, middleware, redirectIfAuthenticated, router])

    return {
        user: user as User,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}