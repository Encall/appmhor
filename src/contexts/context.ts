import { createContext } from 'react'

export interface ContextType {
  id: string
  IsLogin: boolean
}

export const ContextValue = {
  id: '',
  IsLogin: false,
}

interface ContextValueI {
  authContext: ContextType
  setAuthContext: (value: ContextType) => void
}

export const AuthContext = createContext<ContextValueI | null>(null)
