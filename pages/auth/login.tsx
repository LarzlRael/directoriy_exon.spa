import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { postAction } from '../../src/provider/action/action'
import { validateStatus } from '../../src/components/utils/utils'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../src/store/store'
import { startSession } from '../../src/store/slices/slices'
import { Loading } from '../../src/components/widgets/loadings/Loading'
import { H2 } from '../../src/components/text/H2'
import { useRouter } from 'next/dist/client/router'
import { useVerifyLogginHook } from '../../src/hooks/useVerifyLoggingHook'
import { Input } from '../../src/components/forms'
import { Layout } from '../../src/layout/Layout'

function login() {
  const { isLogged } = useSelector((state: RootState) => state.authSlice)
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false)
  const { push } = useRouter()
  useVerifyLogginHook()
  useEffect(() => {
    if (isLogged) {
      push('/auth/adminDashboard')
    } else {
      push('/auth/login')
    }
  }, [isLogged])

  async function onSubmit({ password, username }: initialValuesI) {
    setloading(true)

    postAction('http://localhost:4000/auth/login', { password, username })
      .then((res: any) => {
        setloading(false)
        if (validateStatus(res.status)) {
          dispatch(startSession({ token: res.data.accessToken }))
          window.localStorage.setItem('token', res.data.accessToken)
          /* push('/auth/adminDashboard') */
        } else {
          setloading(false)
          console.log('login fail')
        }
      })
      .catch((err) => {
        setloading(false)
        console.log(err)
      })

    /* if (validateStatus(action.status)) {
      dispatch(startSession({ token: action.data.token }))
      window.localStorage.setItem('token', action.data.token.accessToken)
      push('/auth/adminDashboard')
    } else {
      console.log('login fail')
    } */
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
    <Layout>
      <div className="Form__container-main animate__animated animate__fadeIn">
        <div className="Form__container animate__animated animate__fadeInUp">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="Form__login">
              <h3 className="Form__login--title ">Iniciar Sesion</h3>
              <Input
                label=""
                className="Form__input"
                placeholder="Usuario"
                name="username"
                type="text"
                disabled={loading}
              />
              <br />
              <Input
                label=""
                placeholder="Contraseña"
                name="password"
                type="password"
                disabled={loading}
              />
              {loading ? (
                <Loading />
              ) : (
                <button type="submit" className="button-login">
                  Iniciar Sesion
                </button>
              )}
            </Form>
          </Formik>
        </div>
        <div className="Form__info-login animate__animated animate__fadeInDown">
          <H2 margin="0.5rem 0" color="white" fontSize="2rem">
            Adminstración
          </H2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui ipsam
            numquam dolore quo, aperiam voluptates labore, error totam rem hic,
            minus incidunt autem nesciunt ea laborum temporibus enim tempora.
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default login
