export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  profile_picture?: string;
  address?: string;
  role?: string;
  current_company_id?: string;
  email_verified_at?: string;
  created_at: string;
  initials?: string;
  plan?: {
    id: string;
    name: string;
    expiresAt?: string;
  };
  isFirstLogin?: boolean;
  onboardingCompleted?: boolean;
}