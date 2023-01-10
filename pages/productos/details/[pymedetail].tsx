import React, { useEffect } from 'react'

import { useDocumentTitle } from '../../../src/hooks/useDocumentTitle'
import { Loading } from '../../../src/components/widgets/loadings/Loading'
import { Indicator } from '../../../src/components/Indicator'
import { capitalizeFirstLetter } from '../../../src/components/utils/utils'

import { Span, P, H2 } from '../../../src/components/text'
import {
  ContacInfo,
  MapLocalization,
  Profile,
  ImageSlider,
} from '../../../src/components/pymeDetails/'

import useAxiosAuth from '../../../src/hooks/useAxios'
import { PymeInterfaceResponse } from '../../../src/interfaces/pymeResponse'

import { useRouter } from 'next/router'
import { HeaderBlack } from '../../../src/layout/HeaderBlack'

const PymeDetails = () => {
  const router = useRouter()
  let { pymedetail } = router.query

  const { response: onePyme, loading, reload } = useAxiosAuth<
    PymeInterfaceResponse
  >({
    url: `/pymes/${pymedetail}`,
    method: 'GET',
  })

  useEffect(() => {
    reload()
  }, [pymedetail])

  useDocumentTitle(onePyme?.nombre!)

  return (
    <>
      {loading ? (
        <Loading />
      ) : onePyme !== null ? (
        <div
          style={{
            background: '#F3F3F3',
          }}
        >
          <HeaderBlack darkMenu={true} sticky={true} />
          <Indicator />
          <div className="one-place">
            <div className="one-place__section-title">
              <div className="one-place__section-container border-box ">
                <H2
                  color="#000"
                  textAlign="start"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  margin="1rem 0 0 0"
                >
                  {capitalizeFirstLetter(onePyme.nombre)}
                </H2>
                <hr />

                <ImageSlider
                  urlImages={
                    onePyme?.urlImages !== undefined &&
                    onePyme?.urlImages.length !== 0 &&
                    onePyme?.urlImages.length !== undefined
                      ? onePyme!.urlImages
                      : [
                          'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
                        ]
                  }
                />

                <div className="one-place__description">
                  <Span
                    fontSize="1.5rem"
                    textAlign="start"
                    fontWeight="600"
                    color="#000"
                  >
                    {capitalizeFirstLetter(onePyme?.nombre)}
                  </Span>
                  <P
                    fontSize=" 15px"
                    /* fontWeight= "400" */
                    lineHeight="25px"
                    margin="0.5rem 0"
                  >
                    {capitalizeFirstLetter(onePyme?.description)}
                  </P>
                </div>
              </div>

              <ContacInfo email={onePyme?.email} telefono={onePyme?.telefono} />

              {/* localization */}

              {/*  {onePyme?.localizacion && (
                <MapLocalization
                  localization={onePyme?.localizacion}
                  direction={onePyme?.direccion}
                />
              )} */}
            </div>

            <Profile {...onePyme} />
          </div>
        </div>
      ) : (
        <div className="">No hay</div>
      )}
    </>
  )
}
export default PymeDetails
