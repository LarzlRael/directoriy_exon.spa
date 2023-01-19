import { ErrorMessage, useField } from 'formik'
import React, { useState } from 'react'
interface Props {
  label: string
  name: string
  type?: 'text' | 'email' | 'password' | 'number'
  [x: string]: any
}
export const Input = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label className="Form__label--pyme" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="Form__input--pyme"
        type={props.type}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="label"
        className="Form__text-error"
      />
    </>
  )
}
