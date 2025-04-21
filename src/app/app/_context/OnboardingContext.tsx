import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Step, OnboardingState, OnboardingAction, OnboardingContextType } from '@/app/app/_shared/@types/onboarding';

export const ACTIONS = {
  INITIALIZE_STEPS: 'INITIALIZE_STEPS',
  UPDATE_STEP_STATUS: 'UPDATE_STEP_STATUS',
  ADD_STEP: 'ADD_STEP',
  COMPLETE_ONBOARDING: 'COMPLETE_ONBOARDING',
} as const;

const initialState: OnboardingState = {
  steps: [],
  isCompleted: false,
  isLoading: true,
};

const onboardingReducer = (state: OnboardingState, action: OnboardingAction): OnboardingState => {
  switch (action.type) {
    case ACTIONS.INITIALIZE_STEPS:
      return {
        ...state,
        steps: action.payload as Step[],
        isLoading: false,
      };
    case ACTIONS.UPDATE_STEP_STATUS:
      return {
        ...state,
        steps: state.steps.map(step => 
          step.id === (action.payload as { stepId: string; completed: boolean }).stepId 
            ? { ...step, completed: (action.payload as { stepId: string; completed: boolean }).completed }
            : step
        ),
      };
    case ACTIONS.ADD_STEP:
      return {
        ...state,
        steps: [...state.steps, action.payload as Step],
      };
    case ACTIONS.COMPLETE_ONBOARDING:
      return {
        ...state,
        isCompleted: true,
      };
    default:
      return state;
  }
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

interface OnboardingProviderProps {
  children: ReactNode;
}

export const OnboardingProvider = ({ children }: OnboardingProviderProps) => {
  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  // Initialize steps
  useEffect(() => {
    const fetchOnboardingStatus = async () => {
      try {
        const response = await fetch('/api/onboarding/status');
        const data = await response.json();
        
        dispatch({
          type: ACTIONS.INITIALIZE_STEPS,
          payload: data.steps,
        });
        
        if (data.isCompleted) {
          dispatch({ type: ACTIONS.COMPLETE_ONBOARDING });
        }
      } catch (error) {
        console.error('Failed to fetch onboarding status:', error);
        dispatch({
          type: ACTIONS.INITIALIZE_STEPS,
          payload: [
            {
              id: 'company-profile',
              title: 'Register Company Data',
              description: 'Complete your company profile to optimize your market experience',
              completed: false,
              action: '/profile/company',
            },
            {
              id: 'customer-contact',
              title: 'Add Customer Contact',
              description: 'Register at least one contact as a customer to start selling',
              completed: false,
              action: '/contacts/new?type=customer',
            }
          ],
        });
      }
    };

    fetchOnboardingStatus();
  }, []);

  // Helper functions
  const markStepComplete = async (stepId: string) => {
    try {
      await fetch(`/api/onboarding/complete-step`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stepId }),
      });
      
      dispatch({
        type: ACTIONS.UPDATE_STEP_STATUS,
        payload: { stepId, completed: true },
      });
      
      // Check if all steps are completed
      const allCompleted = state.steps.every(step => 
        (step.id === stepId || step.completed)
      );
      
      if (allCompleted) {
        dispatch({ type: ACTIONS.COMPLETE_ONBOARDING });
      }
    } catch (error) {
      console.error('Failed to mark step as complete:', error);
    }
  };

  const addCustomStep = (step: Step) => {
    dispatch({
      type: ACTIONS.ADD_STEP,
      payload: step,
    });
  };

  const value: OnboardingContextType = {
    ...state,
    markStepComplete,
    addCustomStep,
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = (): OnboardingContextType => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};