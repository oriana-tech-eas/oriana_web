import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button/Button';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productName: string;
  price: string;
  billingCycle: 'monthly' | 'yearly';
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  productName,
  price,
  billingCycle,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'transfer'>('credit');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onConfirm();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-neutral-800 rounded-lg w-full max-w-md mx-4 overflow-hidden">
        <div className="relative p-6 border-b border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-bold dark:text-white">Confirmar Subscripción</h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="mb-6">
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Estás a punto de subscribirte a <strong>{productName}</strong> con un plan {billingCycle === 'monthly' ? 'mensual' : 'anual'} por {price}.
              </p>
              
              <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg mb-4">
                <h4 className="font-medium mb-2 dark:text-white">Resumen</h4>
                <div className="flex justify-between mb-1">
                  <span className="text-neutral-600 dark:text-neutral-300">{productName}</span>
                  <span className="text-neutral-900 dark:text-white">{price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400">Facturación</span>
                  <span className="text-neutral-500 dark:text-neutral-400">{billingCycle === 'monthly' ? 'Mensual' : 'Anual'}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2 dark:text-white">Método de pago</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    id="credit"
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                    className="w-4 h-4 text-rose-500 bg-neutral-100 border-neutral-300 focus:ring-rose-500"
                  />
                  <label htmlFor="credit" className="ml-2 block text-neutral-700 dark:text-neutral-300">
                    Tarjeta de crédito/débito
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="transfer"
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'transfer'}
                    onChange={() => setPaymentMethod('transfer')}
                    className="w-4 h-4 text-rose-500 bg-neutral-100 border-neutral-300 focus:ring-rose-500"
                  />
                  <label htmlFor="transfer" className="ml-2 block text-neutral-700 dark:text-neutral-300">
                    Transferencia bancaria
                  </label>
                </div>
              </div>
            </div>
            
            {paymentMethod === 'credit' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Número de tarjeta
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Vencimiento
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/AA"
                      className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="123"
                      className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            
            {paymentMethod === 'transfer' && (
              <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg">
                <h5 className="font-medium mb-2 dark:text-white">Datos bancarios</h5>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                  Realiza una transferencia a la siguiente cuenta:
                </p>
                <dl className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-neutral-500 dark:text-neutral-400">Banco:</dt>
                    <dd className="font-medium dark:text-white">Banco Nacional</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500 dark:text-neutral-400">Titular:</dt>
                    <dd className="font-medium dark:text-white">Oriana Tech S.A.</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500 dark:text-neutral-400">Cuenta:</dt>
                    <dd className="font-medium dark:text-white">0123456789</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500 dark:text-neutral-400">RUC:</dt>
                    <dd className="font-medium dark:text-white">80123456-7</dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                  Después de realizar la transferencia, envía el comprobante a pagos@oriana.com.py
                </p>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 flex justify-end space-x-3">
            <Button variant="secondary" onClick={onClose} disabled={isProcessing}>
              Cancelar
            </Button>
            <Button variant="primary-market" type="submit" disabled={isProcessing}>
              {isProcessing ? 'Procesando...' : 'Confirmar pago'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionModal;