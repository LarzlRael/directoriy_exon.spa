import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import FormikControl from '../components/input/FormikControl'

/* import { Loading } from '../animation' */
/* import { deleteCharacteres, removeQuote } from '../../utils/ProcessData' */

import { H2 } from '../components/text'
import BoxFlex from '../components/boxes/BoxFlex'
import { validateArray } from '../components/utils/validation/validation'
import { Loading } from '../components/widgets/loadings/Loading'
import { GlobalFormI, InputJsonI } from '../interfaces/formsInterface'
import {
  GlobalButton,
  DefaultBtn,
  ActionButton,
} from '../components/buttons/buttons'

const GlobalForm = (props: GlobalFormI) => {
  const {
    InputsJson,
    title = '',
    textBtn,
    data,
    onSubmit,
    load,
    onCancel,
    colorBtn,
    widthBtn,
    backgroundBtn,
    labelColor = '#000',
  } = props

  function initialGeneration(InputsJson: InputJsonI[]) {
    let init = {}
    let validate = {}
    if (validateArray(InputsJson)) {
      InputsJson.forEach((input) => {
        if (input.type === 'severalInputs') {
          /* if (validateArray(input.inputs)) {
            input.inputs.forEach((i, index) => {
              if (input.name) {
                init = {
                  ...init,
                  [i.name]: data[input.name].split('T')[index],
                }
              } else {
                init = { ...init, [i.name]: data[i.name] || i.initial }
              }
              validate = { ...validate, [i.name]: i.validate }
            })
          } */
        } else {
          init = {
            ...init,
            [input.name]: data[input.name] ? data[input.name] : input.initial,
          }
          validate = { ...validate, [input.name]: input.validate }
        }
      })
    }
    return { init, validate }
  }
  const { init, validate } = initialGeneration(InputsJson)
  const initialValues = init
  const validationSchema = Yup.object(validate)
  return (
    <div>
      {title && (
        <H2 textAlign="center" color="var(--gray)">
          {title}
        </H2>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={onCancel ? onSubmit : null}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              {validateArray(InputsJson)
                ? InputsJson.map((inpt, index) => {
                    switch (inpt.control) {
                      case 'date':
                        return (
                          <FormikControl
                            {...inpt}
                            key={index}
                            control={inpt.control}
                            type={inpt.type}
                            label={inpt.label}
                            name={inpt.name}
                            placeholderText={inpt.label}
                            dateFormat={inpt.dateFormat}
                            showTimeSelect={inpt.showTimeSelect ? true : false}
                            timeIntervals={inpt.timeIntervals}
                          />
                        )
                      case 'file':
                        return (
                          <FormikControl
                            key={index}
                            control={inpt.control}
                            name={inpt.name}
                            small={true}
                            label={inpt.label}
                            uploadFiles={formik.setValues}
                            type={inpt.type}
                          />
                        )
                      case 'Phone':
                        return (
                          <FormikControl
                            key={index}
                            labelColor={labelColor}
                            type={inpt.type}
                            label={inpt.label}
                            name={inpt.name}
                            control={inpt.control}
                            uploadValues={formik.setValues}
                          />
                        )
                      /* case 'editor':
                      case 'editorSimple':
                        let aux = null
                        if (formik.initialValues[inpt.name]) {
                          aux = formik.initialValues[inpt.name].replace(
                            /'/g,
                            '"',
                          )
                          aux = removeQuote(deleteCharacteres(aux))
                          aux = convertString(aux)
                        }
                        return (
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '10px',
                              marginBottom: '10px',
                            }}
                            key={index}
                          >
                            <FormikControl
                              control={inpt.control}
                              label={inpt.label}
                              name={inpt.name}
                              onChange={formik.setValues}
                              data={aux}
                              // data={convertString(
                              //   formik.initialValues[inpt.name],
                              // )}
                            />
                          </div>
                        ) */
                      case 'select':
                        return (
                          <FormikControl
                            key={index}
                            control={inpt.control ? inpt.control : 'input'}
                            options={inpt.options}
                            label={inpt.label}
                            name={inpt.name}
                          />
                        )
                      /* case 'selectGet':
                      case 'getSelect':
                        return (
                          <FormikControl
                            key={index}
                            control={inpt.control}
                            label={inpt.label}
                            name={inpt.name}
                            url={inpt.url}
                            nameList={inpt.nameList || null}
                            keyOption={inpt.keyOption || 'name'}
                            value={inpt.value || 'name'}
                          />
                        ) */
                     /*  case 'getCheckbox':
                        return (
                          <FormikControl
                            key={index}
                            control={inpt.control}
                            label={inpt.label}
                            name={inpt.name}
                            url={inpt.url}
                            nameList={inpt.nameList}
                            keyOption={inpt.keyOption}
                            value={inpt.value}
                          />
                        ) */
                      default:
                        if (inpt.type === 'severalInputs') {
                          /* return (
                            <BoxFlex className="severalInputs" key={index}>
                              {inpt.inputs.map((i, j) => (
                                <FormikControl
                                  key={j}
                                  control="input"
                                  type={i.type}
                                  label={i.label}
                                  name={i.name}
                                />
                              ))}
                            </BoxFlex>
                          ) */
                        } else {
                          return (
                            <FormikControl
                              labelColor={labelColor}
                              key={index}
                              control={inpt.control ? inpt.control : 'input'}
                              type={inpt.type}
                              label={inpt.label}
                              name={inpt.name}
                            />
                          )
                        }
                    }
                  })
                : null}
              {load ? (
                onCancel ? (
                  <ActionButton
                    // onClick={() => onSubmit(formik.values, InputsJson)}
                    type="submit"
                    onCancel={onCancel}
                    disabled={!formik.isValid}
                    textBtn={textBtn}
                    textCancel="Cancelar"
                  />
                ) : (
                  <>
                    <DefaultBtn
                      type="submit"
                      color={colorBtn}
                      width={widthBtn}
                      background={backgroundBtn}
                      disabled={!formik.isValid}
                      // onClick={() => onSubmit(formik.values, InputsJson)}
                      // type="button"
                    >
                      {textBtn}
                    </DefaultBtn>
                  </>
                )
              ) : (
                <Loading />
              )}
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default GlobalForm
