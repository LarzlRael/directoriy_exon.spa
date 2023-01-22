import * as Yup from 'yup'
export interface GlobalFormInterface {
  inputJson: InputJsonI[]
  onSubmit: (data: any) => void
  data?: any
  formTitle?: string
  loading?: boolean
}
export interface InputJsonI {
  type?: string | 'text' | 'number' | 'email' | 'area' | 'select' | 'checkbox'
  name: string
  placeholder?: string
  label?: string
  value?: string | boolean 
  validate?: any
  options?: OptionsI[]
  reference?: string
  condition?: string
}
export interface OptionsI {
  id: number
  label: string
}
