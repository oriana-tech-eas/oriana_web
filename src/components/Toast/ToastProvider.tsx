'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import Toast from './Toast';
import { ToastAction, ToastContextType, ToastItem, ToastProviderProps } from '@/app/app/_shared/@types/toast';
import { toastReducer } from './ToastReducer';

export const ToastProviderContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, dispatch] = useReducer<React.Reducer<ToastItem[], ToastAction>>(toastReducer, [] as ToastItem[]);

  const addToast = (message: string, type: ToastItem['type'] = 'info') => {
    const id = Date.now();
      dispatch({ type: 'ADD_TOAST', payload: { message, type, id } });
    };

  return (
    <ToastProviderContext.Provider value={{ addToast: addToast as ToastContextType['addToast'] }}>
      {children}
      {toasts?.map((toast: ToastItem) => (
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