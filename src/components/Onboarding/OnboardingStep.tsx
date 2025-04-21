import { Step } from '@/app/app/_shared/@types/onboarding';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Button from '../Button/Button';

interface OnboardingStepProps {
  step: Step;
  onClick: () => void;
}

const OnboardingStep = ({ step, onClick }: OnboardingStepProps) => {
  return (
    <div 
      className={`
        flex items-center py-2 px-3 rounded-lg transition-all cursor-pointer
        ${step.completed 
          ? 'bg-green-50 dark:bg-green-800' 
          : 'bg-black/10 dark:bg-black/20'}
      `}
      onClick={onClick}
    >
      <div className="mr-4 flex-shrink-0">
        {step.completed ? (
          <CheckCircleIcon className="w-8 h-8 text-green-500" />
        ) : (
          <XCircleIcon className="w-8 h-8 text-white" />
        )}
      </div>
      
      <div className="flex-grow">
        <h3 className={`font-medium ${step.completed ? 'text-green-700 dark:text-green-500' : 'text-white dark:text-neutral-100'}`}>
          {step.title}
        </h3>
        <p className="text-sm text-neutral-200">{step.description}</p>
      </div>
      
      <div className="ml-4">
        <Button
          variant={step.completed ? 'secondary' : 'white-outline'} 
          size='sm'
        >
          {step.completed ? 'Editar' : 'Iniciar'}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingStep;