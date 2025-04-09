export interface Contact {
  id: number,
  name: string,
  email: string,
  phone: string,
  address: string,
  document: string,
  initials: string,
  user_id: number,
  company_id: number,
  contacts_type: string,
}

export interface Contacts {
  contacts: Contact[],
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  document: string;
  contacts_type: "customer" | "supplier";
}

export interface ContactFormErrors {
  name?: string[];
  email?: string[];
  phone?: string[];
  address?: string[];
  document?: string[];
}

export interface ContactFormProps {
  initialData?: Partial<ContactFormData>;
  onSuccess: () => void;
  onCancel: () => void;
  isEditing?: boolean;
  contactId?: number;
}