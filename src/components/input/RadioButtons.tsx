import React from 'react'
import { Field, ErrorMessage, FieldProps } from 'formik'
import TextError from './TextError'
import './style/RadioButton.css'

function RadioButtons(props: any) {
  const {
    label,
    name,
    options,
    innerHTML = false,
    fileId,
    url,
    ...rest
  } = props
  return (
    <div className="RadioButtons">
      {innerHTML ? (
        <label
          dangerouslySetInnerHTML={{
            __html: label,
          }}
        ></label>
      ) : (
        <label>{label}</label>
      )}
      {fileId && (
        <div className="RadioButtons__img">
          <img src={url} alt="" />
        </div>
      )}
      <Field name={name}>
        {({ field }: FieldProps) => {
          return options.map((option:any) => {
            return (
              <div className="RadioButtons__input" key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>
                  {option.FileId ? (
                    <>
                      <img src={option.key} alt="" />
                    </>
                  ) : (
                    option.key
                  )}
                </label>
              </div>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons
