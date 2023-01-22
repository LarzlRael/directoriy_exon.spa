import React from 'react'
import { Formik, Form } from 'formik'
import { Input, Select, TextArea } from './'
/* import formJson from './formJson.json' */
import { Switch } from './Switch'
import * as Yup from 'yup'
import { GlobalFormInterface } from '../../interfaces/globalFormInterface'
import { H2 } from '../text'
import { Loading } from '../widgets/loadings/Loading'
/* const initialValues: { [x: string]: any } = {} */

export const GlobalForm = ({
  inputJson,
  onSubmit,
  data,
  formTitle,
  loading,
}: GlobalFormInterface) => {
  function initialValueGeneration(
    inputJson: any[],
  ): {
    initialValues: {
      [x: string]: any
    }
    validate: {}
  } {
    let initialValues: { [x: string]: any } = {}
    let validate = {}

    inputJson.forEach((i: any) => {
      initialValues = {
        ...initialValues,
        /* [i.name]: i.value, */
        [i.name]: data ? data[i.name] : i.value,
      }
      validate = {
        ...validate,
        [i.name]: i.validate,
      }
    })
    return { initialValues, validate }
  }

  const { initialValues, validate } = initialValueGeneration(inputJson)
  const validationSchema = Yup.object(validate)
  return (
    <div>
      <H2>{formTitle}</H2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            {inputJson.map((item) => {
              switch (item.type) {
                case 'text':
                case 'password':
                case 'email':
                case 'number':
                  return (
                    <Input
                      label={item.label!}
                      name={item.name!}
                      type={item.type}
                    />
                  )
                case 'select':
                  return (
                    <Select
                      label={item.label!}
                      name={item.name!}
                      options={item.options!}
                    />
                  )
                case 'checkbox':
                  return <Switch label={item.label!} name={item.name!} />
                case 'area':
                  return <TextArea label={item.label!} name={item.name} />
              }
            })}
            {loading ? (
              <button className="button-login pointer" type="submit">
                Guardar
              </button>
            ) : (
              <Loading />
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}
