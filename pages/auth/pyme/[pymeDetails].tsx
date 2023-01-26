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
import {
  validateStatus,
  capitalizeFirstLetter,
} from '../../../src/components/utils/utils'
import { departamentos, socialNetworks } from '../../../src/data/infoData'
import BoxFlex from '../../../src/components/boxes/BoxFlex'
import {
  FaTimesCircle,
  FaPlusCircle,
  FaTrashAlt,
  FaEye,
  FaEyeSlash,
  FaFileImport,
} from 'react-icons/fa'
import { Button } from '../../../src/components/buttons/Button'
import Image from 'next/image'
import DropzoneInput from '../../../src/components/input/DropZone'
import FieldOrderForm from '../../../src/components/dashboard/FieldOrderForm'
import { validateArray } from '../../../src/components/utils/validation/validation'
import { H2 } from '../../../src/components/text'
import { Input, Select, Switch } from '../../../src/components/forms'
import { TextArea } from '../../../src/components/forms/TextArea'
import { GlobalForm } from '../../../src/components/forms/GlobalForm'
import { pymeForm } from '../../../src/components/input/formPaterns'

const PymeDetails = () => {
  const router = useRouter()
  let { pymeDetails } = router.query
  const [onePyme, setOnePyme] = useState<PymesResponseInterface | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingForm, setLoadingForm] = useState(false)

  const [files, setFilesToSend] = useState<any>()
  const [name, setname] = useState(null)
  const [imgPreview, setImgPreview] = useState<any>()

  const getOnePyme = async () => {
    setLoading(true)
    const action: any = await getAction(
      `http://localhost:4000/pymes/getByPyme/${pymeDetails}`,
    )
    if (validateStatus(action.status)) {
      setOnePyme(action.data)
      setImgPreview(
        action.data.profileImage
          ? action.data.profileImage
          : 'https://res.cloudinary.com/wmcgi/image/upload/v1655473157/assets/Grupo_494_uhpz1h_vp7dvq.png',
      )
      setLoading(false)
    }
  }

  const handleImageChange = (e) => {
    const selected = e.target.files[0]
    setname(selected)
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => {
        setImgPreview(reader.result)
      }
      reader.readAsDataURL(selected)
    } else {
      console.log('file not suport')
    }
  }

  useEffect(() => {
    if (pymeDetails) {
      getOnePyme()
    }
  }, [router.isReady])

  const onSubmit = async (values: any) => {
    setLoadingForm(true)
    putAction(`/pymes/updatePyme/${onePyme!._id}`, {
      ...values,
      verificado: values.verify ? 'verificado' : 'no_verificado',
      localizacion: `${values.longitude},${values.latitude}`,
      categoria: 'xd',
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
      setLoadingForm(false)
      alert('Pyme actualizada')
      getOnePyme()
    } else {
      alert('Error al actualizar')
    }
  }
  async function uploadFiles() {
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
    formData.append('file', name!)
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
          <TitleAppbar
            title={onePyme?.nombre!}
            id={onePyme?._id!}
            visible={onePyme?.visible!}
          />
          <BoxFlex
            className="BoxFlex__pyme--container"
            direction="row"
            /* justify="flex-start" */
            width="100%"
            alignItems="flex-start"
          >
            <BoxFlex direction="column">
              <Image
                src={imgPreview}
                alt="profile image"
                width={75}
                height={75}
                style={{
                  borderRadius: '100%',
                }}
              />
              <input type="file" id="inputFile" onChange={handleImageChange} />
              <label htmlFor="inputFile" className="imageUp">
                Seleccionar imagen de perfil
                <FaFileImport size={20} color="blue" />
              </label>

              <GlobalForm
                loading={loadingForm}
                inputJson={pymeForm}
                onSubmit={onSubmit}
                formTitle="Datos de la pyme"
                data={{
                  ...onePyme,
                  verify: onePyme!.verificado == 'verificado' ? true : false,
                  longitude: parseFloat(onePyme!.localizacion?.split(',')[0]!),
                  latitude: parseFloat(onePyme!.localizacion?.split(',')[1]!),
                }}
              />
            </BoxFlex>
            {/* <input type="file" id="inputFile" onChange={handleImageChange} /> */}
            <BoxFlex direction="column">
              {onePyme?.localizacion && (
                <MapLocalization
                  localization={onePyme?.localizacion!}
                  direction={onePyme?.direccion!}
                />
              )}
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

              <BoxFlex className="" direction="column">
                <DropzoneInput
                  uploadFiles={setFilesToSend}
                  name="File"
                  label="Subir imagenes para la pyme"
                />

                {files != null && (
                  <Button onClick={uploadFiles}>
                    Subir imagenes para la pyme
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

interface TitleAppbarProps {
  title: string
  id: string
  visible: boolean
}
const TitleAppbar = ({ title, id, visible }: TitleAppbarProps) => {
  const router = useRouter()
  function deletePyme() {
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
  function changeVisibility() {
    if (
      confirm('¿Estás seguro de cambiar el estado de visibilidad de la pyme?')
    ) {
      putAction(`/pymes/changeVisibility/${id}`, {})
        .then((res: any) => {
          if (validateStatus(res.status)) {
            alert('La pyma ha cambiado de estado')
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
          {capitalizeFirstLetter(title)}
        </H2>
        <BoxFlex className="xd" direction="row" gap="1.5rem">
          {visible ? (
            <FaEye
              onClick={changeVisibility}
              className="pointer"
              color="white"
              size={25}
            />
          ) : (
            <FaEyeSlash
              onClick={changeVisibility}
              className="pointer"
              color="white"
              size={25}
            />
          )}
          <FaTrashAlt
            onClick={deletePyme}
            className="pointer"
            color="white"
            size={25}
          />
        </BoxFlex>
      </BoxFlex>
    </div>
  )
}
