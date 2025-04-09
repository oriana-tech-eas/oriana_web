// Appointment types
export interface Appointment {
  id: number;
  client_id: number;
  client_name: string;
  client_email?: string;
  client_phone?: string;
  service_id: number;
  service_name: string;
  staff_id?: number;
  staff_name?: string;
  start_time: string;
  end_time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  price?: number;
  location?: string;
  created_at: string;
  updated_at: string;
}

export interface AppointmentFormData {
  client_id: number;
  service_id: number;
  staff_id?: number;
  date: string;
  start_time: string;
  end_time: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface AppointmentFilters {
  startDate?: string;
  endDate?: string;
  status?: string;
  client_id?: number;
  staff_id?: number;
  service_id?: number;
  page?: number;
}

// Pagination interface
export interface PaginationLinks {
  label: string;
  active: boolean;
  url?: string;
}

export interface Pagination {
  current_page: number;
  from: number;
  to: number;
  total: number;
  per_page: number;
  last_page: number;
  links: PaginationLinks[];
}

// Service types
export interface Service {
  id: number;
  name: string;
  description?: string;
  price: number;
  duration: number; // duration in minutes
  color?: string;
  category_id?: number;
  category_name?: string;
  is_active: boolean;
}

export interface ServiceCategory {
  id: number;
  name: string;
  description?: string;
}

// Staff types
export interface Staff {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  position?: string;
  bio?: string;
  profile_image?: string;
  is_active: boolean;
  services?: number[]; // Array of service IDs this staff member can provide
}

export interface StaffAvailability {
  id: number;
  staff_id: number;
  day_of_week: number; // 0-6, where 0 is Sunday
  start_time: string; // HH:MM format
  end_time: string; // HH:MM format
}

// Client types
export interface Client {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
  appointments_count?: number;
  last_appointment?: string;
}

// Business settings types
export interface BusinessHours {
  day_of_week: number; // 0-6, where 0 is Sunday
  start_time: string; // HH:MM format
  end_time: string; // HH:MM format
  is_closed: boolean;
}

export interface BusinessSettings {
  business_name: string;
  business_email?: string;
  business_phone?: string;
  business_address?: string;
  business_hours: BusinessHours[];
  appointment_buffer_time?: number; // buffer time between appointments in minutes
  allow_online_booking: boolean;
  notification_settings: {
    send_email_confirmations: boolean;
    send_email_reminders: boolean;
    reminder_hours_before: number;
  };
}