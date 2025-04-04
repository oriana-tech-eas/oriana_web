export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  company_id: number;
  contacts_type: string;
  document: string;
  initials: string;
  created_at: string;
  updated_at: string;
}

export interface Contacts {
  data: Contact[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: { url: string | null, label: string, active: boolean }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
  last_update: string;
  recently_added: number;
}