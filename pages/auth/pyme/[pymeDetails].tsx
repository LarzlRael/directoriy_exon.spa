import React, { useEffect, useState } from 'react'
import { AdminDashBoard } from '../../../src/components/dashboard/AdminDashBoard'
import { useRouter } from 'next/router'
import { PymesResponseInterface } from '../../../src/interfaces/pymesResponseInterface'
import { Formik, Form, Field, FieldArray } from 'formik'
import {
  Loading,
  LoadingExpanded,
} from '../../../src/components/widgets/loadings/Loading'
import { MapLocalization } from '../../../src/components/pymeDetails/MapLocalization'
import {
  deleteAction,
  getAction,
  postAction,
  putAction,
} from '../../../src/provider/action/ActionAuthorization'
import { validateStatus } from '../../../src/components/utils/utils'
import { departamentos, socialNetworks } from '../../../src/data/infoData'
import BoxFlex from '../../../src/components/boxes/BoxFlex'
import { FaTimesCircle, FaPlusCircle, FaTrashAlt } from 'react-icons/fa'
import { Button } from '../../../src/components/buttons/Button'
import Image from 'next/image'
import DropzoneInput from '../../../src/components/input/DropZone'
import FieldOrderForm from '../../../src/components/dashboard/FieldOrderForm'
import { validateArray } from '../../../src/components/utils/validation/validation'
import { H2 } from '../../../src/components/text'

const PymeDetails = () => {
  const router = useRouter()
  let { pymeDetails } = router.query
  /* const [url, seturl] = useState('') */
  const [onePyme, setOnePyme] = useState<PymesResponseInterface | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingForm, setLoadingForm] = useState(false)

  const [files, setFilesToSend] = useState<any>()
  const [profileImage, setProfileImage] = useState<any>()

  const getOnePyme = async () => {
    setLoading(true)
    const action: any = await getAction(
      `http://localhost:4000/pymes/${pymeDetails}`,
    )
    if (validateStatus(action.status)) {
      setOnePyme(action.data)
      setLoading(false)
    }
  }
  useEffect(() => {
    if (pymeDetails) {
      getOnePyme()
    }
  }, [router.isReady])

  const onSubmit = async (values: any) => {
    setLoadingForm(true)
    putAction(`/pymes/updatePyme/${values._id}`, {
      ...values,
      verificado: values.verify ? 'verificado' : 'no_verificado',
      categoria: 'xd',
      localizacion: `${values.longitude},${values.latitude}`,
    })
      .then((res) => {
        updatePyme(res)
      })
      .catch((err) => {
        console.log(err)
        alert('Error al actualizar')
      })
    setLoadingForm(false)
  }
  function updatePyme(res) {
    if (validateStatus(res.status)) {
      alert('Pyme actualizada')
      getOnePyme()
    } else {
      alert('Error al actualizar')
    }
  }
  const uploadFiles = async () => {
    const formData = new FormData()

    formData.append('files', files.File)
    setLoadingForm(true)
    postAction(`/pymes/addedImage/${onePyme?._id}`, formData)
      .then((res: any) => {
        if (validateStatus(res.status)) {
          alert('Imagen agregada')
          setLoadingForm(false)
          getOnePyme()
        }
      })
      .catch((err: any) => {
        console.log(err)
        setLoadingForm(false)
      })
  }
  const uploadProfileImage = async () => {
    const formData = new FormData()
    formData.append('file', profileImage.File)
    setLoadingForm(true)
    putAction(`/pymes/addProfile/${onePyme?._id}`, formData)
      .then((res: any) => {
        if (validateStatus(res.status)) {
          alert('Imagen de perfil agregada')
          setLoadingForm(false)
          getOnePyme()
        }
      })
      .catch((err: any) => {
        console.log(err)
        setLoadingForm(false)
      })
  }

  return (
    <AdminDashBoard>
      {loading ? (
        <LoadingExpanded />
      ) : (
        <BoxFlex className="" direction="column">
          <TitleAppbar title={onePyme?.nombre} id={onePyme?._id} />
          <BoxFlex
            className="BoxFlex__pyme--container"
            direction="row"
            /* justify="flex-start" */
            width="100%"
            alignItems="flex-start"
          >
            {onePyme!.profileImage && (
              <Image
                src={onePyme!.profileImage!}
                alt="profile image"
                width={75}
                height={75}
                style={{
                  borderRadius: '100%',
                }}
              />
            )}
            <Formik
              enableReinitialize={true}
              initialValues={{
                ...onePyme,
                verify: onePyme!.verificado == 'verificado' ? true : false,
                longitude: parseFloat(onePyme!.localizacion?.split(',')[0]!),
                latitude: parseFloat(onePyme!.localizacion?.split(',')[1]!),
              }}
              onSubmit={onSubmit}
            >
              {({
                setFieldValue,
                setFieldTouched,
                values,
                errors,
                touched,
              }) => (
                <Form className="Form__pyme--container">
                  {files != null && (
                    <Button icon={<p>Subir</p>} onClick={uploadFiles}>
                      Subir archivos
                    </Button>
                  )}

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
                      return (
                        <option value={departamento} key={departamento}>
                          {departamento}
                        </option>
                      )
                    })}
                  </Field>
                  {/* <label className="switchBtn">
                    <Field
                      className="checkbox"
                      placeholder="Verificado"
                      name="verify"
                      type="checkbox"
                      disabled={loadingForm}
                    />
                    <div className="slide round"></div>
                  </label> */}

                  <label className="toggle">
                    <Field
                      name="verify"
                      className="toggle-checkbox"
                      type="checkbox"
                    />
                    <div className="toggle-switch"></div>
                    <span className="toggle-label">
                      {values.verify ? 'Verificado' : 'No verificado'}
                    </span>
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
                                      <option value={social} key={social}>
                                        {social}
                                      </option>
                                    )
                                  })}
                                </Field>
                              </div>
                              <BoxFlex
                                className=""
                                justify="space-between"
                                direction="row"
                              >
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
                              <BoxFlex className={'xd'} direction="row">
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

                  {validateArray(onePyme?.urlImages!) && (
                    <FieldOrderForm
                      id="xd"
                      fields={onePyme!.urlImages.map((url, index) => {
                        return {
                          id: index,
                          content: url,
                        }
                      })}
                      url={`pymes/changeOrderImage/${onePyme!._id}`}
                      order="order"
                    />
                  )}
                  {/* {onePyme!.urlImages.map((url) => (
                  <a href={url} target="_blank">
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={url}
                      alt=""
                    />
                  </a>
                ))} */}
                  {loadingForm ? (
                    <Loading />
                  ) : (
                    <button type="submit" className="button-login pointer">
                      Guardar
                    </button>
                  )}
                </Form>
              )}
            </Formik>
            <BoxFlex className="Form__pyme--container" direction="column">
              {onePyme?.localizacion && (
                <MapLocalization
                  localization={onePyme?.localizacion!}
                  direction={onePyme?.direccion!}
                />
              )}

              <BoxFlex className="" direction="column">
                <DropzoneInput
                  uploadFiles={setFilesToSend}
                  name="File"
                  label="Subir imagenes para la pyme"
                />
                {files != null && (
                  <Button icon={<p>Subir</p>} onClick={uploadFiles}>
                    Subir imagenes para la pyme
                  </Button>
                )}
              </BoxFlex>

              <BoxFlex className="" direction="column">
                <DropzoneInput
                  uploadFiles={setProfileImage}
                  name="File"
                  label="Subir imagen de perfil"
                />
                {profileImage != null && (
                  <Button icon={<p>Subir</p>} onClick={uploadProfileImage}>
                    Subir imagen de perfil
                  </Button>
                )}
              </BoxFlex>
            </BoxFlex>
          </BoxFlex>
        </BoxFlex>
      )}
    </AdminDashBoard>
  )
}

export default PymeDetails

const TitleAppbar = ({ title, id }: any) => {
  const router = useRouter()
  const deletePyme = () => {
    if (confirm('¿Estas seguro de eliminar esta pyme?')) {
      deleteAction(`/pymes/deletePyme/${id}`)
        .then((res: any) => {
          if (validateStatus(res.status)) {
            alert('Pyme eliminada')
            router.back()
          }
        })
        .catch((err: any) => {
          console.log(err)
        })
    }
  }
  return (
    <div className="TitleAppbar">
      <BoxFlex
        className="2"
        direction="row"
        justify="space-between"
        width="100%"
      >
        <H2 color="white" textAlign="center">
          {title}
        </H2>
        <>
          <FaTrashAlt
            onClick={deletePyme}
            className="pointer"
            color="white"
            size={25}
          />
        </>
      </BoxFlex>
    </div>
  )
}
