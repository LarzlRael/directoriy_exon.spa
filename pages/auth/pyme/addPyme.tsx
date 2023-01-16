import React, { useEffect, useState } from 'react'
import AdminDashBoard from '../../../src/components/dashboard/AdminDashBoard'
import { useRouter } from 'next/router'
import { PymesResponseInterface } from '../../../src/interfaces/pymesResponseInterface'
import useAxiosAuth from '../../../src/hooks/useAxios'
import { Formik, Form, Field, FieldArray } from 'formik'
import { Loading } from '../../../src/components/widgets/loadings/Loading'
import { MapLocalization } from '../../../src/components/pymeDetails/MapLocalization'
import { postAction, putAction } from '../../../src/provider/action/ActionAuthorization'
import { validateStatus } from '../../../src/components/utils/utils'
import { departamentos, socialNetworks } from '../../../src/data/infoData'
import BoxFlex from '../../../src/components/boxes/BoxFlex'
import { FaTimesCircle, FaPlusCircle } from 'react-icons/fa'
import { Button } from '../../../src/components/buttons/Button'
import Image from 'next/image'
const PymeDetails = () => {
  const [loadingForm, setLoadingForm] = useState(false)
  const [socialMedia, setSocialMedia] = useState([])

  const onSubmit = async (values: any) => {
    setLoadingForm(true)
    postAction('/pymes/newPyme',{
      ...values,
      verificado: values.verificado ? 'verificado' : 'no_verificado',
      categoria: 'que fueg gente xd',
    }).then((res) => {
      save(res)
    }).catch((err) => {
      console.log(err)
      setLoadingForm(false)
    })
   
  }
  function save(values){
    setLoadingForm(false)
    if(validateStatus(values.status)){
      alert('Pyme agregada correctamente')
    }
  }

  return (
    <AdminDashBoard>
      <Formik enableReinitialize={true} initialValues={{
        redes_sociales: [],
      }} onSubmit={onSubmit}>
        {({ setFieldValue, setFieldTouched, values, errors, touched }) => (
          <Form className="Form__pyme--container">
            <h3 className="Form__login--title ">Agregar Pyme</h3>
            <Field
              className="Form__input--pyme"
              placeholder="Nombre del negocio"
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
                              return <option value={social}>{social}</option>
                            })}
                          </Field>
                        </div>
                        <BoxFlex className="" justify="space-between">
                          <label
                            htmlFor={`redes_sociales.${index}.urlRedSocial`}
                          >
                            URL
                          </label>
                          <FaTimesCircle
                            type="button"
                            color="red"
                            size={20}
                            className="secondary"
                            onClick={() => remove(index)}
                          />
                        </BoxFlex>
                        <BoxFlex className={'xd'} direction="column">
                          <Field
                            name={`redes_sociales.${index}.urlRedSocial`}
                            placeholder="Ingrese el Url de la red social"
                            type="text"
                            className="Form__input--pyme"
                          />
                        </BoxFlex>
                      </div>
                    ))}
                  <Button
                    type="button"
                    margin="10px 0"
                    onClick={() => {
                      push({
                        nombre: '',
                        urlRedSocial: '',
                      })
                    }}
                    icon={<FaPlusCircle size={20} />}
                  >
                    Agregar Red social
                  </Button>
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

            {/* <MapLocalization
                  localization={onePyme?.localizacion!}
                  direction={onePyme?.direccion}
                /> */}
          </Form>
        )}
      </Formik>
    </AdminDashBoard>
  )
}

export default PymeDetails
