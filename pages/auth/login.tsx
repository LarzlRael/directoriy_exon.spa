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

function login() {
  const { isLogged } = useSelector((state: RootState) => state.authSlice)
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false)
  const { push } = useRouter()
  useEffect(() => {
    if (isLogged) {
      push('/auth/adminDashboard')
    } else {
      push('/auth/login')
    }
  }, [isLogged])

  async function onSubmit({ password, username }: initialValuesI) {
    setloading(true)
    const action: any = await postAction({
      url: 'http://localhost:4000/auth/login',
      data: { password, username },
    })
    setloading(false)
    if (validateStatus(action.status)) {
      dispatch(startSession({ token: action.data.token }))
      push('/auth/adminDashboard')
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
    <div className="Form__container-main animate__animated animate__fadeIn">
      <div className="Form__container animate__animated animate__fadeInUp">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="Form__login">
            <h3 className="Form__login--title ">Login</h3>
            <Field
              className="Form__input"
              placeholder="Usuario"
              name="username"
              type="text"
              disabled={loading}
            />
            <br />
            <Field
              className="Form__input"
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
  )
}

export default login
