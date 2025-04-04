'use client';

import { createContext, useContext, useReducer } from 'react';
import { toastReducer } from '../../configs/toastReducer';
import Toast from './Toast';

export const ToastProviderContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    dispatch({ type: 'ADD_TOAST', payload: { message, type, id } });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_TOAST', payload: id });
    }, 5000);
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

export const useToast = () => {
  return useContext(ToastProviderContext);
};