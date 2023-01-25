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
import { Input, Switch, Select, TextArea } from '../../../src/components/forms/'
import * as Yup from 'yup'
import { GlobalForm } from '../../../src/components/forms/GlobalForm'
import { pymeForm } from '../../../src/components/input/formPaterns'

const PymeDetails = () => {
  const router = useRouter()
  const [loadingForm, setLoadingForm] = useState(false)

  const onSubmit = async (values: any) => {
    console.log(values)
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
      <div className="Form__pyme--container">
        <GlobalForm
          inputJson={pymeForm}
          onSubmit={onSubmit}
          loading={loadingForm}
          formTitle="Registrar Pyme"
        />
      </div>
    </AdminDashBoard>
  )
}

export default PymeDetails
