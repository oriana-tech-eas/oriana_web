export interface CreateExpenseProps {
  data: {
    amount: number
    category_id: number
    contact_id: number
    date: string
    description: string
    tax_id: number
  },
  redirect: boolean
}

export type LinkItem = {
  active: boolean
  label: string
  url?: string
}

export type ExpenseItem = {
  id: number
  amount: number
  category_id: number
  contact_id: number
  contact_name: string
  expense_date: string
  description: string
  tax_id: number
}

export interface Expenses {
  current_page: number
  data: ExpenseItem[]
  links: LinkItem[]
  path: string
  last_page: number
  last_page_url: string
  next_page_url: string
  prev_page_url: string
  per_page: number
  from: number
  to: number
  total: number
}