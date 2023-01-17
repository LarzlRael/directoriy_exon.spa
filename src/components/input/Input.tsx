import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { useState } from 'react'
import './style/Inputs.css'
import { InputJsonI, GlobalFormI } from '../../interfaces/formsInterface'
import InputStyle from './style/InputStyle'

type InputInterface = InputJsonI & GlobalFormI
const Input = (props: InputInterface) => {
  const { label, name, /* disabled, */ labelColor = '#000', type, ...rest } = props

  const [check, setcheck] = useState({
    typeInput: 'password',
  })
  const handleCheck = (e:any) => {
    const { checked } = e.target
    setcheck({
      typeInput: checked ? 'text' : 'password',
    })
  }
  return (
    <InputStyle className="form-control" type={type}>
      <label style={{ color: labelColor }} htmlFor={name}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        /* disabled={disabled} */
        type={type !== 'password' ? type : check.typeInput}
        step={type === 'time' ? '2' : null}
        className="switch"
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
      {type === 'password' && (
        <div className="Input__check">
          <label htmlFor="checkBox">Mostrar contraseña</label>
          <input onChange={handleCheck} type="checkbox" name="checkBox" />
        </div>
      )}
    </InputStyle>
  )
}

export default Input
