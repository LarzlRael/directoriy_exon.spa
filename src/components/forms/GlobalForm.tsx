import React from 'react'
import { Formik, Form } from 'formik'
import { Input, Select } from './'
import formJson from './formJson.json'
import { Switch } from './Switch'
const initialValues: { [x: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value
}
export const GlobalForm = () => {
  return (
    <div>
      <h1>Dynamic form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map((item: any) => {
              if (
                item.type === 'input' ||
                item.type === 'password' ||
                item.type === 'email' ||
                item.type === 'number' ||
                item.type === 'tel'
              ) {
                return (
                  <Input label={item.label} name={item.name} type={item.type} />
                )
              } else if (item.type === 'select') {
                return (
                  <Select
                    label={item.label}
                    name={item.name}
                    options={item.options}
                  />
                )
              } else if (item.type === 'checkbox') {
                return <Switch label="Verificado" name="verify" />
              }
            })}
            <button type="submit">enviar datos we</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
