export interface User {
  name: string;
  email: string;
  isFirstLogin?: boolean;
  onboardingCompleted?: boolean;
}