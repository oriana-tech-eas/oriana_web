// components/Onboarding/OnboardingContainer.tsx
import { useState, useEffect } from 'react';
import OnboardingStep from './OnboardingStep';
import { useRouter } from 'next/navigation';
import { Step } from '@/app/app/_shared/@types/onboarding';
import Button from '../Button/Button';

interface OnboardingContainerProps {
  user: {
    id: string;
    name: string;
    email: string;
    isFirstLogin: boolean;
  };
}

const OnboardingContainer = ({ user }: OnboardingContainerProps) => {
  const router = useRouter();
  const [steps, setSteps] = useState<Step[]>([
    {
      id: 'company-profile',
      title: 'Registra tu empresa',
      description: 'Completa la información de tu empresa para empezar a vender',
      completed: false,
      action: '/app/company',
    },
    {
      id: 'customer-contact',
      title: 'Agrega tu primer contacto',
      description: 'Registrá tu primer contacto para empezar a vender',
      completed: false,
      action: '/app/contacts/new',
    }
  ]);

  // This useEffect would check the completion status of steps from the API
  useEffect(() => {
    const checkStepsStatus = async () => {
      try {
        const response = await fetch('/api/onboarding/status');
        const data = await response.json();
        
        // Update steps with completion status from backend
        setSteps(currentSteps => 
          currentSteps.map(step => ({
            ...step,
            completed: data.completedSteps.includes(step.id)
          }))
        );
      } catch (error) {
        console.error('Failed to fetch onboarding status:', error);
      }
    };

    checkStepsStatus();
  }, []);

  const handleStepAction = (stepId: string) => {
    const step = steps.find(s => s.id === stepId);
    if (step) {
      router.push(step.action);
    }
  };

  const handleSkipOnboarding = async () => {
    try {
      await fetch('/api/onboarding/skip', {
        method: 'POST',
      });
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to skip onboarding:', error);
    }
  };

  // Calculate overall progress
  const progress = (steps.filter(step => step.completed).length / steps.length) * 100;

  return (
    <div className="bg-white border rounded-lg shadow-sm p-6 mb-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-zinc-800">Bienvenido, {user.name}</h2>
        <p className="text-zinc-600 mt-1">
          Completa los siguientes pasos para empezar a usar la aplicación.
        </p>
        
        <div className="w-full bg-zinc-200 rounded-full h-2 mt-4">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-zinc-500 mt-1">{Math.round(progress)}% completado</p>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <OnboardingStep
            key={step.id}
            step={step}
            number={index + 1}
            onClick={() => handleStepAction(step.id)}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <Button
          variant='secondary'
          onClick={handleSkipOnboarding}
        >
          Omitir
        </Button>
        {steps.every(step => step.completed) && (
          <Button
            onClick={() => router.push('/dashboard')}
            variant='primary'
          >
            Finalizar
          </Button>
        )}
      </div>
    </div>
  );
};

export default OnboardingContainer;