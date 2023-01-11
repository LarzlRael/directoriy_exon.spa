import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { postAction } from '../../src/provider/action/action'
import { validateStatus } from '../../src/components/utils/utils'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../src/store/store'
import { startSession } from '../../src/store/slices/slices'

function startSesscion() {
  const { value } = useSelector((state: RootState) => state.authSlice)
  const dispatch = useDispatch()

  async function onSubmit({ password, username }: initialValuesI) {
    const action: any = await postAction({
      url: 'http://localhost:4000/auth/login',
      data: { password, username },
    })

    if (validateStatus(action.status)) {
      dispatch(startSession({ token: action.data.token }))
    } else {
      console.log('login fail')
    }
  }
  interface initialValuesI {
    username: string
    password: string
  }
  const initialValues = {
    username: 'larzdosan',
    password: '123456789',
  }
  return (
    <div className="login-div animate__animated animate__fadeIn">
      <div className="form animate__animated animate__fadeInUp">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="formLogin">
            <h3 className="title ">Login</h3>
            <Field
              className="input-login"
              placeholder="Usuario"
              name="username"
              type="text"
            />
            <br />
            <Field
              className="input-login"
              placeholder="Contraseña"
              name="password"
              type="password"
            />
            <button type="submit" className="button-login">
              Iniciar Sesion
            </button>
          </Form>
        </Formik>
      </div>
      <div className="info-login animate__animated animate__fadeInDown">
        <h1>Adminstración</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui ipsam
          numquam dolore quo, aperiam voluptates labore, error totam rem hic,
          minus incidunt autem nesciunt ea laborum temporibus enim tempora.
        </span>
      </div>
    </div>
  )
}

export default startSesscion
