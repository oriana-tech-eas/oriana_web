import { ReactNode } from 'react';

// Define the types for toast items
export interface ToastItem {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

// Define action types for the reducer
export type ToastAction = 
  | { type: 'ADD_TOAST'; payload: ToastItem }
  | { type: 'REMOVE_TOAST'; payload: number };
  
export interface ToastContextType {
    addToast: (message: string, type?: ToastItem['type']) => void;
  }
  
// Props for the ToastProvider component
export interface ToastProviderProps {
  children: ReactNode;
}

export interface Toast {
  id: string | number;
  message?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}
