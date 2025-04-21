'use client';

import React, { useState } from 'react';
import Container from '@/components/Container/Container';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useAuth } from '@/hooks/useAuth';
import SubscriptionCard from './components/SubscriptionCard';
import { useToast } from '@/components/Toast/ToastProvider';
import SubscriptionModal from './components/SubscriptionModal';

// Product data - in a real implementation, you would fetch this from an API
const products = [
  {
    id: 'market',
    name: 'Oriana Market',
    description: 'Sistema ERP integral que revoluciona la gestión de facturación, gastos y administración financiera de su empresa.',
    icon: '/brand/square/oriana-market.svg',
    color: 'rose',
    features: [
      'Facturación simplificada',
      'Control de ingresos y gastos',
      'Gestión de clientes y proveedores',
      'Reportes detallados',
      'Panel administrativo completo'
    ],
    prices: {
      monthly: 349000,
      yearly: 3490000
    }
  },
  {
    id: 'connect',
    name: 'Oriana Connect',
    description: 'Servicio API que simplifica la generación de documentos electrónicos aprobados por la DNIT en Paraguay.',
    icon: '/brand/square/oriana-connect.svg',
    color: 'teal',
    features: [
      'Integración fácil con su sistema',
      'Documentos 100% conformes con DNIT',
      'Validación en tiempo real',
      'Transmisión segura de datos',
      'Soporte técnico especializado'
    ],
    prices: {
      monthly: 449000,
      yearly: 4490000
    }
  },
  {
    id: 'people',
    name: 'Oriana People',
    description: 'Sistema de administración de RRHH intuitivo que transforma la gestión de talento humano.',
    icon: '/brand/square/oriana-people.svg',
    color: 'violet',
    features: [
      'Gestión de empleados completa',
      'Control de ausencias y permisos',
      'Evaluaciones de desempeño',
      'Informes de personal',
      'Integración con nómina'
    ],
    prices: {
      monthly: 399000,
      yearly: 3990000
    }
  },
  {
    id: 'booking',
    name: 'Oriana Booking',
    description: 'Gestor de citas inteligente que maximiza la eficiencia de servicios e individuos.',
    icon: '/brand/square/oriana-booking.svg',
    color: 'amber',
    features: [
      'Reservas en línea 24/7',
      'Recordatorios automáticos',
      'Gestión de recursos',
      'Integración con calendarios',
      'Panel administrativo intuitivo'
    ],
    prices: {
      monthly: 299000,
      yearly: 2990000
    }
  }
];

const ProductsPage = () => {
  const { user } = useAuth();
  const { addToast } = useToast();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeSubscriptions, setActiveSubscriptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<{
    id: string;
    name: string;
    billingCycle: 'monthly' | 'yearly';
  } | null>(null);

  const handleSubscribe = async (productId: string, selectedBillingCycle: 'monthly' | 'yearly') => {
    if (!user?.id) {
      addToast('Debes iniciar sesión para suscribirte', 'error');
      return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if user already has an active subscription for this product
    if (activeSubscriptions.includes(productId)) {
      // Navigate to subscription management
      addToast(`Administrando subscripción a ${product.name}`, 'info');
      return;
    }

    // Open the subscription modal
    setCurrentProduct({
      id: productId,
      name: product.name,
      billingCycle: selectedBillingCycle
    });
    setIsModalOpen(true);
  };
  
  const handleConfirmSubscription = async () => {
    if (!currentProduct || !user?.id) return;
    
    try {
      // Call the API to create a subscription
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: currentProduct.id,
          billingCycle: currentProduct.billingCycle,
          userId: user.id,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        addToast(`¡Subscripción a ${currentProduct.name} completada con éxito!`, 'success');
        // Update active subscriptions
        setActiveSubscriptions([...activeSubscriptions, currentProduct.id]);
        // Close the modal
        setIsModalOpen(false);
        setCurrentProduct(null);
      } else {
        addToast(`Error: ${data.error}`, 'error');
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      addToast('Ha ocurrido un error al procesar tu suscripción', 'error');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-PY', {
      style: 'currency',
      currency: 'PYG',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Container>
      <div className="flex justify-between items-center mb-8">
        <PageTitle>Productos y Subscripciones</PageTitle>
        <div className="bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              billingCycle === 'monthly' 
                ? 'bg-white dark:bg-neutral-700 shadow-sm' 
                : 'text-neutral-600 dark:text-neutral-300'
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              billingCycle === 'yearly' 
                ? 'bg-white dark:bg-neutral-700 shadow-sm' 
                : 'text-neutral-600 dark:text-neutral-300'
            }`}
          >
            Anual <span className="text-xs text-green-600 dark:text-green-400">-15%</span>
          </button>
        </div>
      </div>

      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Bienvenido, {user?.name}. Selecciona los productos que deseas utilizar para tu empresa.
      </p>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className="h-96 rounded-xl border border-neutral-200 dark:border-neutral-700 animate-pulse bg-neutral-100 dark:bg-neutral-800"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map(product => (
            <SubscriptionCard
              key={product.id}
              product={product}
              billingCycle={billingCycle}
              formatPrice={formatPrice}
              onSubscribe={handleSubscribe}
              isActive={activeSubscriptions.includes(product.id)}
            />
          ))}
        </div>
      )}

      <div className="mt-8 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg text-neutral-500 dark:text-neutral-400 text-sm">
        <p>Las subscripciones se renuevan automáticamente al finalizar el periodo contratado. Puedes cancelar en cualquier momento desde tu perfil. Para más información, consulta nuestros <a href="#" className="text-orange-500 hover:underline">términos y condiciones</a>.</p>
      </div>
      
      {/* Subscription Modal */}
      {currentProduct && (
        <SubscriptionModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setCurrentProduct(null);
          }}
          onConfirm={handleConfirmSubscription}
          productName={currentProduct.name}
          price={formatPrice(
            products.find(p => p.id === currentProduct.id)?.prices[currentProduct.billingCycle] || 0
          )}
          billingCycle={currentProduct.billingCycle}
        />
      )}
    </Container>
  );
};

export default ProductsPage;