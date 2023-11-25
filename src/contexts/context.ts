import { createContext } from 'react'
import { UserType } from '../types/user'

export const ContextValue: UserType = {
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  thai_id: '',
  phone: '',
  gender: '',
  birthday: new Date(),
  address: '',
  subdistrist: '',
  district: '',
  province: '',
  postcode: '',
  IsLogin: false,
}

interface ContextValueI {
  authContext: UserType
  setAuthContext: (value: UserType) => void
}

export const AuthContext = createContext<ContextValueI | null>(null)
