import React, { useState, useEffect } from 'react'
import useAxiosAuth from '../../../src/hooks/useAxios'
import { useDocumentTitle } from '../../../src/hooks/useDocumentTitle'
import { PymeInterfaceResponse } from '../../../src/interfaces/pymeResponse'
import { Indicator } from '../../../src/components/Indicator'
import { Formik, Form, Field } from 'formik'
import { departamentos } from '../../../src/data/infoData'
import { Button } from '../../../src/components/buttons/Button'
import { IoSearch } from 'react-icons/io5'
import { validateArray } from '../../../src/components/utils/validation/validation'
import { Label } from '../../../src/components/text/'
import { Loading } from '../../../src/components/widgets/loadings/Loading'
import styled from 'styled-components'
import { sizeMedia } from '../../../styles/mediaQuerys'

import { Header } from '../../../src/layout/Header'
import { PymeCard } from '../../../src/components/widgets/card'

interface SingleLocationProps {
  /* label?: string */
}

const SingleLocation = (props: SingleLocationProps) => {
  useDocumentTitle('Categorias')
  const [url, setUrl] = useState('/pymes')

  const { response: allPymes, loading, reload } = useAxiosAuth<
    PymeInterfaceResponse[]
  >({
    url: url,
    method: 'GET',
  })
  const preconfigArray = (
    array: PymeInterfaceResponse[],
  ): PymeInterfaceResponse[] => {
    return array?.map((item: PymeInterfaceResponse) => {
      if (item.urlImages.length !== 0) {
        const imagesConverted = item.urlImages.map((image, i) => {
          const splitString = image.split('upload/')
          let resizeImage = `${splitString[0]}upload/c_scale,w_300/${splitString[1]}`
          return (item.urlImages[i] = resizeImage)
        })
        return { ...item, urlImages: imagesConverted }
      }
      return { ...item }
    })
  }
  interface initialValuesI {
    nombre: string
    departamentSelected: string
  }
  const initialValues = {
    nombre: '',
    departamentSelected: departamentos[0],
  }
  useEffect(() => {
    reload()
  }, [url])

  const onSubmit = (values: initialValuesI) => {
    if (values.nombre === '') {
      setUrl('/pymes')
    } else {
      setUrl(
        `/pymes/nombre/${values.nombre.trim().toLowerCase()}/departamento/${
          values.departamentSelected
        }`,
      )
    }
  }
  return (
    <div>
      {/* <Header sticky={true} /> */}

      <Indicator {...props} />

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          {/* <InputSearch type="text"> */}
          <div
            style={{
              display: 'flex',
              margin: '3rem 2rem',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <Field
              id="nombre"
              name="nombre"
              placeholder="Buscar Pyme o categoria"
              className="inputSearch"
            />
            {/* <Dropdown
              options={departamentos}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            /> */}
            <Field as="select" name="departamentSelected">
              {departamentos.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>

            <Button
              type="submit"
              background="black"
              icon={<IoSearch color="#fff" height="16px" width="16px" />}
            >
              Buscar
            </Button>
          </div>
        </Form>
      </Formik>

      {!loading ? (
        validateArray(preconfigArray(allPymes)) ? (
          <GridContainer className="cards-container">
            {preconfigArray(allPymes).map((pyme) => (
              <PymeCard {...pyme} key={pyme._id} />
            ))}
          </GridContainer>
        ) : (
          <Label textAlign="center" display="block">
            No se encontraron resultados
          </Label>
        )
      ) : (
        <Loading />
      )}
    </div>
  )
}

const GridContainer = styled.div`
  display: grid;
  gap: 2rem;
  max-width: $container-main;
  margin: 1.5rem auto;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  width: 1000px;

  @media ${sizeMedia('md')} {
    width: 90%;
  }
  @media ${sizeMedia('xs_sm')} {
    margin: 0.5rem auto;
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }
`
export default SingleLocation
