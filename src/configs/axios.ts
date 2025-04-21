import { localStorageAdapter } from '@/utils/storageAdapter';
import Axios, { AxiosInstance } from 'axios';

const axios: AxiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${localStorageAdapter.getItem('token')}`,
    },
    withCredentials: true,
    withXSRFToken: true
});

export default axios;