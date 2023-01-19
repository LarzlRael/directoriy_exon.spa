export interface GlobalFormInterface {
  inputJson: InputJsonI[]
  onSubmit: (data: any) => void
}
export interface InputJsonI {
  type: string
  name?: string
  placeholder?: string
  label?: string
  value?: string | boolean
  validate?: any
  validations?: undefined
  options?: optionsI[]
}
interface optionsI {
  id: number
  label: string
}
