import React, { useEffect, useState } from 'react'
import AdminDashBoard from '../../../src/components/dashboard/AdminDashBoard'
import { useRouter } from 'next/router'
import { PymeInterfaceResponse } from '../../../src/interfaces/pymeResponse'
import useAxiosAuth from '../../../src/hooks/useAxios'
import { Formik, Form, Field } from 'formik'
import { Loading } from '../../../src/components/widgets/loadings/Loading'
import { MapLocalization } from '../../../src/components/pymeDetails/MapLocalization'
import { putAction } from '../../../src/provider/action/ActionAuthorization'
import { validateStatus } from '../../../src/components/utils/utils'
import { departamentos } from '../../../src/data/infoData'

const PymeDetails = () => {
  const router = useRouter()
  let { pymeDetails } = router.query
  /* const [url, seturl] = useState('') */
  const { response: onePyme, loading, reload } = useAxiosAuth<
    PymeInterfaceResponse
  >({
    url: `/pymes/${pymeDetails}`,
    method: 'GET',
  })

  useEffect(() => {
    if (router.isReady) {
      reload()
    }
  }, [router.isReady])

  const onSubmit = async (values: any) => {
    const action: any = await putAction({
      url: `http://localhost:4000/pymes/updatePyme/${values._id}`,
      data: {
        ...values,
        verificado: values.verify ? 'verificado' : 'no_verificado',
        categoria: 'xd',
      },
    })
    if (validateStatus(action.status)) {
      reload()
      alert('Pyme actualizada')
    }
  }

  return (
    <AdminDashBoard>
      {loading ? (
        <Loading />
      ) : (
        <div
          style={{
            width: '100%',
            display: 'flex',
          }}
        >
          <Formik
            enableReinitialize={true}
            initialValues={{
              ...onePyme,
              verify: onePyme.verificado == 'verificado' ? true : false,
            }}
            onSubmit={onSubmit}
          >
            <Form className="Form__pyme--container">
              <h3 className="Form__login--title ">Agregar Pyme</h3>
              <Field
                className="Form__input--pyme"
                placeholder="Usuario"
                name="nombre"
                type="text"
                disabled={loading}
              />
              <Field
                className="Form__input--pyme"
                placeholder="Propietario"
                name="propietario"
                type="text"
                disabled={loading}
              />

              <Field type="email" name="email" placeholder="Email" />
              <Field as="select" name="departamento">
                {departamentos.map((departamento) => {
                  return <option value={departamento}>{departamento}</option>
                })}
              </Field>

              <label className="switchBtn">
                <Field
                  className="checkbox"
                  placeholder="Verificado"
                  name="verify"
                  type="checkbox"
                  disabled={loading}
                />
                <div className="slide round"></div>
              </label>

              <Field
                className="Form__input--pyme"
                placeholder="Propietario"
                name="telefono"
                type="text"
                disabled={loading}
              />
              <Field
                className="Form__input--pyme"
                placeholder="Contraseña"
                name="email"
                disabled={loading}
              />
              <Field
                className="Form__input--pyme"
                placeholder="Contraseña"
                name="direccion"
                disabled={loading}
              />
              {console.log(onePyme)}
              <Field
                className="Form__input--pyme"
                placeholder="Descripcion"
                name="description"
                component="textarea"
                disabled={loading}
              />

              {loading ? (
                <Loading />
              ) : (
                <button type="submit" className="button-login pointer">
                  Guardar
                </button>
              )}
              {/* <img src={onePyme.profileImage} alt="" /> */}
              {/* {onePyme.urlImages.map((url) => (
            <img style={{ width: '100px', height: '100px' }} src={url} alt="" />
          ))}
          {onePyme.redes_sociales!.map((red) => (
            <div>{red.nombre}</div>
          ))}
          <MapLocalization
            localization={onePyme?.localizacion!}
            direction={onePyme?.direccion}
          /> */}
            </Form>
          </Formik>
          <MapLocalization
            localization={onePyme?.localizacion!}
            direction={onePyme?.direccion}
          />
        </div>
      )}
    </AdminDashBoard>
  )
}

export default PymeDetails
