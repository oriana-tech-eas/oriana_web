'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { toastReducer } from '../../configs/toastReducer';
import Toast from './Toast';

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

// Define the context type
interface ToastContextType {
  addToast: (message: string, type?: ToastItem['type']) => void;
}

// Create the context with a default value
export const ToastProviderContext = createContext<ToastContextType | undefined>(undefined);

// Props for the ToastProvider component
interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, dispatch] = useReducer<React.Reducer<ToastItem[], ToastAction>>(toastReducer, [] as ToastItem[]);

  const addToast = (message: string, type: ToastItem['type'] = 'info') => {
    const id = Date.now();
      dispatch({ type: 'ADD_TOAST', payload: { message, type, id } });
    };

  return (
    <ToastProviderContext.Provider value={{ addToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </ToastProviderContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastProviderContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};