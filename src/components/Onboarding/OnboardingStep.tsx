import { Step } from '@/app/app/_shared/@types/onboarding';
import { CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
import Button from '../Button/Button';

interface OnboardingStepProps {
  step: Step;
  onClick: () => void;
}

const OnboardingStep = ({ step, onClick }: OnboardingStepProps) => {
  return (
    <div 
      className={`
        flex items-center p-4 rounded-lg border transition-all cursor-pointer
        ${step.completed 
          ? 'border-green-300 bg-green-50' 
          : 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-50'}
      `}
      onClick={onClick}
    >
      <div className="mr-4 flex-shrink-0">
        {step.completed ? (
          <CheckCircleIcon className="w-8 h-8 text-green-500" />
        ) : (
          <MinusCircleIcon className="w-8 h-8 text-neutral-300" />
        )}
      </div>
      
      <div className="flex-grow">
        <h3 className={`font-medium ${step.completed ? 'text-green-700 dark:text-green-500' : 'text-neutral-800 dark:text-neutral-100'}`}>
          {step.title}
        </h3>
        <p className="text-sm text-neutral-500">{step.description}</p>
      </div>
      
      <div className="ml-4">
        <Button
          variant={step.completed ? 'secondary' : 'neutral-outline'} 
          size='sm'
        >
          {step.completed ? 'Editar' : 'Iniciar'}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep;