import { Step } from '@/app/app/_shared/@types/onboarding';
import { CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
import Button from '../Button/Button';

interface OnboardingStepProps {
  step: Step;
  number: number;
  onClick: () => void;
}

const OnboardingStep = ({ step, number, onClick }: OnboardingStepProps) => {
  return (
    <div 
      className={`
        flex items-center p-4 rounded-lg border transition-all cursor-pointer
        ${step.completed 
          ? 'border-green-200 bg-green-50' 
          : 'border-gray-200 bg-white hover:bg-gray-50'}
      `}
      onClick={onClick}
    >
      <div className="mr-4 flex-shrink-0">
        {step.completed ? (
          <CheckCircleIcon className="w-8 h-8 text-green-500" />
        ) : (
          <div className="relative">
            <MinusCircleIcon className="w-8 h-8 text-gray-300" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
              {number}
            </span>
          </div>
        )}
      </div>
      
      <div className="flex-grow">
        <h3 className={`font-medium ${step.completed ? 'text-green-700' : 'text-gray-800'}`}>
          {step.title}
        </h3>
        <p className="text-sm text-gray-500">{step.description}</p>
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