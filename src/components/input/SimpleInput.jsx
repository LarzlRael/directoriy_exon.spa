import TextError from './TextError'
import './style/Inputs.css'
import InputStyle from './style/InputStyle'
const SimpleInput = (props) => {
  const { label, name, onChange, err, type, ...rest } = props
  return (
    <InputStyle className="form-control" type={type}>
      <label htmlFor={name}>{label}</label>
      <input id={name} onChange={onChange} name={name} type={type} {...rest} />
      <TextError>{err}</TextError>
    </InputStyle>
  )
}

export default SimpleInput
