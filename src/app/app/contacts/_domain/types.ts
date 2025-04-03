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