import { useField, ErrorMessage } from 'formik'
import React, { useState } from 'react'
interface Props {
  label: string
  name: string
  [x: string]: any
}
export const Switch = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      {/*       <label className="toggle">
              <Field
                name="verify"
                className="toggle-checkbox"
                type="checkbox"
              />
              <div className="toggle-switch"></div>
              <span className="toggle-label">
                {values.verify ? 'Verificado' : 'No verificado'}
              </span>
            </label>  */}
      <label className="toggle">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="toggle-checkbox"
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label">{label}</span>
      </label>
    </>
  )
}
