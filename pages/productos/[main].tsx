import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDocumentTitle } from '../../src/hooks/useDocumentTitle'
import { Indicator } from '../../src/components/Indicator'
import { Formik, Form, Field } from 'formik'
import { departamentos } from '../../src/data/infoData'
import { primaryColor } from '../../src/context/themeColors'
import { IoSearch } from 'react-icons/io5'
import { validateArray } from '../../src/components/utils/validation/validation'
import { PymeCard } from '../../src/components/widgets/card/'
import { Label } from '../../src/components/text/'
import { Loading } from '../../src/components/widgets/loadings/Loading'
import { sizeMedia } from '../../styles/mediaQuerys'
import { Button } from '../../src/components/buttons/Button'
import { HeaderBlack } from '../../src/layout/HeaderBlack'
import { PymesResponseInterface } from '../../src/interfaces/pymesResponseInterface'
import useAxios from '../../src/hooks/useAxios'
import { Input } from '../../src/components/forms/Input'

interface SingleLocationProps {}

const InputSearchContainer = styled.div`
  display: flex;
  margin: 3rem 2rem;
  align-content: center;
  justify-content: center;
  @media ${sizeMedia('xs')} {
    flex-direction: column;
  }
`

const SingleLocation = (props: SingleLocationProps) => {
  useDocumentTitle('Categorias')
  const [url, setUrl] = useState('/pymes')

  const { response: allPymes, loading, reload } = useAxios<
    PymesResponseInterface[]
  >({
    url: url,
    method: 'GET',
  })
  const preconfigArray = (
    array: PymesResponseInterface[],
  ): PymesResponseInterface[] => {
    return array?.map((item) => {
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
    departamentSelected: '',
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
      <HeaderBlack darkMenu={true} sticky={true} />
      <Indicator {...props} />

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <InputSearchContainer>
            <Input
              label=""
              id="nombre"
              name="nombre"
              placeholder="Buscar Pyme o categoria"
              className="input-search"
            />
            <Field as="select" name="departamentSelected">
              {departamentos.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.key}
                </option>
              ))}
            </Field>

            <Button
              type="submit"
              background={primaryColor}
              icon={<IoSearch color="#fff" size={25} />}
            >
              Buscar
            </Button>
          </InputSearchContainer>
        </Form>
      </Formik>

      {!loading ? (
        validateArray(preconfigArray(allPymes)) ? (
          <GridContainer className="cards-container">
            {preconfigArray(allPymes).map((pyme) => (
              <PymeCard
                pymeInterfaceResponse={pyme}
                key={pyme._id}
                isAdmin={false}
              />
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

export const GridContainer = styled.div`
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
