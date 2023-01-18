import { useField, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import { Label } from '../text'
interface Props {
  label: string
  name: string
  [x: string]: any
}
export const Select = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="Form__input--pyme" {...field} {...props} />
      {/* Errors */}
      <ErrorMessage name={props.name} component="label" />
    </>
  )
}
