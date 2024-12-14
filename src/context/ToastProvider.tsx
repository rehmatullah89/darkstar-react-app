'use client';
import React, { createContext, useContext } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastContextType {
  showError: (message: string, options?: ToastOptions) => void;
  showSuccess: (message: string, options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: any;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const showError = (message: string, options?: ToastOptions) => {
    toast.error(message, options);
  };

  const showSuccess = (message: string, options?: ToastOptions) => {
    toast.success(message, options);
  };

  return (
    <ToastContext.Provider value={{ showError, showSuccess }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ToastContext.Provider>
  );
};
