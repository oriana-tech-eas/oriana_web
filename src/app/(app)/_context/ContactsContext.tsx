'use client'

import React, { createContext, useContext, ReactNode, useCallback } from 'react'
import { mutate } from 'swr'

interface ContactsContextType {
  refreshContacts: () => void
}

const defaultContextValue: ContactsContextType = {
  refreshContacts: () => {
    console.log('Default refreshContacts called')
    mutate((key) => typeof key === 'string' && key.startsWith('/api/contacts'))
  },
}

const ContactsContext = createContext<ContactsContextType>(defaultContextValue)

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const refreshContacts = useCallback(() => {
    mutate((key) => typeof key === 'string' && key.startsWith('/api/contacts'))
  }, [])

  return (
    <ContactsContext.Provider value={{ refreshContacts }}>
      {children}
    </ContactsContext.Provider>
  )
}

export const useContactsContext = () => {
  return useContext(ContactsContext)
}