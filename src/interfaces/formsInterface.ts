import { RequiredStringSchema } from 'yup/lib/string'

export interface InputJsonI {
  name: string
  initial: string
  validate: RequiredStringSchema<string | undefined, Record<string, any>>
  type: string
  label: string
  control: string
  dateFormat?: undefined
  showTimeSelect?: undefined
  timeIntervals?: undefined
  url?: string

  options?: DropdownI[]
}
export interface GlobalFormI {
  InputsJson: InputJsonI[]
  title: any
  textBtn: any
  data: any
  onSubmit: any
  load: any
  onCancel: any
  colorBtn: any
  widthBtn: any
  backgroundB: any
  labelColor: any
  backgroundBtn: any

}
export interface DropdownI {
  key: string
  value: string
}

export type InputInterface = InputJsonI & GlobalFormI
