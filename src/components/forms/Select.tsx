import { useField, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { OptionsI } from '../../interfaces/globalFormInterface'
import { Label } from '../text'
interface Props {
  label: string
  name: string
  [x: string]: any
  options: OptionsI[]
}
export const Select = ({ label, options, ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="Form__input--pyme" {...field} {...props}>
        {options.map((option: any) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      {/* Errors */}
      <ErrorMessage name={props.name} component="label" />
    </>
  )
}
