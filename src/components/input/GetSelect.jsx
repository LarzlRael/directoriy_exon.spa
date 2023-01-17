import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { useAxiosAuth } from '../../hooks'
import Loading from '../animation/Loading'
import { createOption } from '../../utils/ProcessData'
import { validateArray } from '../../utils/Validation'
import { useEffect } from 'react'
const GetSelect = (props) => {
  const { label, name, url, keyOption, value, nameList, ...rest } = props
  const { response, loading, reload } = useAxiosAuth({
    method: 'GET',
    url: url,
  })
  useEffect(() => {
    reload()
  }, [url])
  function RenderOption({ options }) {
    return options.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.key}
        </option>
      )
    })
  }
  if (loading) {
    return <Loading />
  } else if (
    response &&
    validateArray(nameList ? response[nameList] : response)
  ) {
    return (
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="select" id={name} name={name} {...rest}>
          <RenderOption
            options={createOption(
              nameList ? response[nameList] : response,
              label,
              keyOption,
              value,
            )}
          />
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    )
  } else {
    return null
  }
}

export default GetSelect
