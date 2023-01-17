import React, { useEffect } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import InputStyle from './style/InputStyle'
import useAuthAxios from '../../hooks/useAxiosAuth'
import Loading from '../animation/Loading'
import { createOption } from '../../utils/ProcessData'
import { validateArray } from '../../utils/Validation'
import { rolName } from '../../utils/Constant'

const CheckboxGroupFetch = (props) => {
  const { label, name, url, keyOption, value, nameList, ...rest } = props

  const { response, loading, reload } = useAuthAxios({
    method: 'GET',
    url: url,
  })
  if (!loading) {
    response.map((res) => {
      return (res.label = rolName[res.name])
    })
  }

  useEffect(() => {
    reload()
  }, [url])
  // function RenderOption({ options }) {
  //   return options.map((option, index) => {
  //     return (
  //       <option key={index} value={option.value}>
  //         {option.key}
  //       </option>
  //     )
  //   })
  // }
  if (loading) {
    return <Loading />
  } else if (
    response &&
    validateArray(nameList ? response[nameList] : response)
  ) {
    return (
      <InputStyle className="form-control">
        <label>{label}</label>
        <br />
        <Field name={name}>
          {({ field }) => {
            return (
              <div className="formInput__grid">
                {createOption(
                  nameList ? response[nameList] : response,
                  label,
                  keyOption,
                  value,
                  false,
                ).map((option) => {
                  return (
                    <div key={option.key}>
                      <input
                        type="checkbox"
                        id={option.value}
                        {...field}
                        {...rest}
                        value={option.value}
                        /* TODO ver esta parte */
                        checked={field.value.includes(option.value)}
                      />
                      <label htmlFor={option.value}>
                        {'  '}
                        {option.key || option.value || option.name}
                      </label>
                    </div>
                  )
                })}
              </div>
            )
          }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </InputStyle>
    )
  } else {
    return null
  }
}

export default CheckboxGroupFetch
