import React, { useEffect, useState } from 'react'
import AdminDashBoard from '../../../src/components/dashboard/AdminDashBoard'
import { useRouter } from 'next/router'
import { PymesResponseInterface } from '../../../src/interfaces/pymesResponseInterface'
import useAxiosAuth from '../../../src/hooks/useAxios'
import { Formik, Form, Field, FieldArray } from 'formik'
import { Loading } from '../../../src/components/widgets/loadings/Loading'
import { MapLocalization } from '../../../src/components/pymeDetails/MapLocalization'
import { putAction } from '../../../src/provider/action/ActionAuthorization'
import { validateStatus } from '../../../src/components/utils/utils'
import { departamentos, socialNetworks } from '../../../src/data/infoData'

const PymeDetails = () => {
  const router = useRouter()
  let { pymeDetails } = router.query
  /* const [url, seturl] = useState('') */
  const { response: onePyme, loading, reload } = useAxiosAuth<
  PymesResponseInterface
  >({
    url: `/pymes/${pymeDetails}`,
    method: 'GET',
  })

  const [loadingForm, setLoadingForm] = useState(false)
  const [socialMedia, setSocialMedia] = useState([])

  useEffect(() => {
    if (router.isReady) {
      reload()
    }
  }, [router.isReady])

  const onSubmit = async (values: any) => {
    console.log(values)
    setLoadingForm(true)
    const action: any = await putAction(`/pymes/updatePyme/${values._id}`, {
      ...values,
      verificado: values.verify ? 'verificado' : 'no_verificado',
      categoria: 'xd',
    })
    setLoadingForm(false)
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
              longitude: parseFloat(onePyme.localizacion?.split(',')[0]!),
              latitude: parseFloat(onePyme.localizacion?.split(',')[1]!),
            }}
            onSubmit={onSubmit}
          >
            {({ setFieldValue, setFieldTouched, values, errors, touched }) => (
              <Form className="Form__pyme--container">
                <h3 className="Form__login--title ">Agregar Pyme</h3>
                <Field
                  className="Form__input--pyme"
                  placeholder="Usuario"
                  name="nombre"
                  type="text"
                  disabled={loadingForm}
                />
                <Field
                  className="Form__input--pyme"
                  placeholder="Propietario"
                  name="propietario"
                  type="text"
                  disabled={loadingForm}
                />

                <Field
                  as="select"
                  name="departamento"
                  className="Form__input--pyme"
                  disabled={loadingForm}
                >
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
                    disabled={loadingForm}
                  />
                  <div className="slide round"></div>
                </label>

                <Field
                  className="Form__input--pyme"
                  placeholder="Telefono"
                  name="telefono"
                  type="text"
                  disabled={loadingForm}
                />
                <Field
                  className="Form__input--pyme"
                  placeholder="Correo electronico"
                  name="email"
                  disabled={loadingForm}
                />
                <Field
                  className="Form__input--pyme"
                  placeholder="Dirección"
                  name="direccion"
                  disabled={loadingForm}
                />
                <Field
                  className="Form__input--pyme"
                  placeholder="Descripcion"
                  name="description"
                  component="textarea"
                  disabled={loadingForm}
                />
                <Field
                  className="Form__input--pyme"
                  placeholder="latitud"
                  name="latitude"
                  disabled={loadingForm}
                />
                <Field
                  className="Form__input--pyme"
                  placeholder="longitude"
                  name="longitude"
                  disabled={loadingForm}
                />

                <FieldArray name="redes_sociales">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.redes_sociales!.length > 0 &&
                        values.redes_sociales!.map((friend, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <Field
                                as="select"
                                name={`redes_sociales.${index}.nombre`}
                                className="Form__input--pyme"
                                disabled={loadingForm}
                              >
                                {socialNetworks.map((social) => {
                                  return (
                                    <option value={social}>{social}</option>
                                  )
                                })}
                              </Field>
                            </div>
                            <div className="col">
                              <label
                                htmlFor={`redes_sociales.${index}.urlRedSocial`}
                              >
                                URL
                              </label>
                              <Field
                                name={`redes_sociales.${index}.urlRedSocial`}
                                placeholder="Ingrese el Url de la red social"
                                type="text"
                                className="Form__input--pyme"
                              />
                            </div>
                            <div className="col">
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => {
                          push({
                            nombre: '',
                            urlRedSocial: '',
                          })
                        }}
                      >
                        Add Friendxd
                      </button>
                    </div>
                  )}
                </FieldArray>

                {loadingForm ? (
                  <Loading />
                ) : (
                  <button type="submit" className="button-login pointer">
                    Guardar
                  </button>
                )}
                <img src={onePyme.profileImage} alt="" />
                {onePyme.urlImages.map((url) => (
                  <img
                    style={{ width: '100px', height: '100px' }}
                    src={url}
                    alt=""
                  />
                ))}
                {onePyme.redes_sociales!.map((red) => (
                  <div>{red.nombre}</div>
                ))}
                {/* <MapLocalization
                  localization={onePyme?.localizacion!}
                  direction={onePyme?.direccion}
                /> */}
              </Form>
            )}
          </Formik>
          {/* <MapLocalization
            localization={onePyme?.localizacion!}
            direction={onePyme?.direccion}
          /> */}
        </div>
      )}
    </AdminDashBoard>
  )
}

export default PymeDetails
