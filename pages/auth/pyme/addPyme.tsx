import React, { useEffect, useState } from 'react'
import { AdminDashBoard } from '../../../src/components/dashboard/AdminDashBoard'
import { useRouter } from 'next/router'
import { PymesResponseInterface } from '../../../src/interfaces/pymesResponseInterface'
import useAxiosAuth from '../../../src/hooks/useAxios'
import { Formik, Form, Field, FieldArray } from 'formik'
import { Loading } from '../../../src/components/widgets/loadings/Loading'
import { MapLocalization } from '../../../src/components/pymeDetails/MapLocalization'
import {
  postAction,
  putAction,
} from '../../../src/provider/action/ActionAuthorization'
import { validateStatus } from '../../../src/components/utils/utils'
import { departamentos, socialNetworks } from '../../../src/data/infoData'
import BoxFlex from '../../../src/components/boxes/BoxFlex'
import { FaTimesCircle, FaPlusCircle } from 'react-icons/fa'
import { Button } from '../../../src/components/buttons/Button'
import Image from 'next/image'
import { Input, Switch, Select } from '../../../src/components/forms/'
import * as Yup from 'yup'

const PymeDetails = () => {
  const router = useRouter()
  const [loadingForm, setLoadingForm] = useState(false)

  const onSubmit = async (values: any) => {
    setLoadingForm(true)
    postAction('/pymes/newPyme', {
      ...values,
      verificado: values.verify ? 'verificado' : 'no_verificado',
      categoria: 'que fueg gente xd',
    })
      .then((res) => {
        save(res)
      })
      .catch((err) => {
        console.log(err)
        alert('Error al agregar la pyme')
        setLoadingForm(false)
      })
  }
  function save(values) {
    setLoadingForm(false)
    if (validateStatus(values.status)) {
      alert('Pyme agregada correctamente')
      router.push('/auth/adminDashboard')
    } else {
      alert('Error al agregar la pyme')
    }
  }

  return (
    <AdminDashBoard>
      <Formik
        enableReinitialize={true}
        initialValues={{
          redes_sociales: [],
          verify: false,
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          nombre: Yup.string().required('El nombre es requerido'),
          propietario: Yup.string().required(
            'El nombre del propietario es requerido',
          ),
        })}
      >
        {({ setFieldValue, setFieldTouched, values }) => (
          <Form className="Form__pyme--container">
            <h3 className="Form__login--title ">Agregar Pyme</h3>
            <Input
              label="Nombre del negocio"
              placeholder="Nombre del negocio"
              name="nombre"
              type="text"
              disabled={loadingForm}
            />

            <Input
              placeholder="Propietario"
              name="propietario"
              type="text"
              label="Nombre del propietario"
            />
            {/*  <Field
              className="Form__input--pyme"
              placeholder="Propietario"
              name="propietario"
              type="text"
              disabled={loadingForm}
            /> */}

            <Select
              label="Departamento"
              name="departamento"
              disabled={loadingForm}
            >
              {departamentos.map((departamento) => {
                return (
                  <option key={departamento} value={departamento}>
                    {departamento}
                  </option>
                )
              })}
            </Select>
            {/* <label className="toggle">
              <Field
                name="verify"
                className="toggle-checkbox"
                type="checkbox"
              />
              <div className="toggle-switch"></div>
              <span className="toggle-label">
                {values.verify ? 'Verificado' : 'No verificado'}
              </span>
            </label> */}
            <Switch label="Verificado" name="verify" />

            <Input
              label="Teléfono"
              placeholder="Ingrese teléfono"
              name="telefono"
              type="text"
              disabled={loadingForm}
            />

            <Input
              label="Correo electronico"
              placeholder="Correo electronico"
              name="email"
              type="email"
              disabled={loadingForm}
            />
            <Input
              label="Dirección"
              placeholder="Dirección"
              name="direccion"
              disabled={loadingForm}
            />
            <Input
              label="Ingrese descripcion"
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
