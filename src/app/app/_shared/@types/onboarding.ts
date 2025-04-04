export interface Step {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  action: string;
}

export interface OnboardingState {
  steps: Step[];
  isCompleted: boolean;
  isLoading: boolean;
}

export type OnboardingAction = 
  | { type: 'INITIALIZE_STEPS'; payload: Step[] }
  | { type: 'UPDATE_STEP_STATUS'; payload: { stepId: string; completed: boolean } }
  | { type: 'ADD_STEP'; payload: Step }
  | { type: 'COMPLETE_ONBOARDING' };

export interface OnboardingContextType extends OnboardingState {
  markStepComplete: (stepId: string) => Promise<void>;
  addCustomStep: (step: Step) => void;
}