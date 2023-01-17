import React, { useState, useEffect } from 'react'
import { IoChevronBack } from 'react-icons/io5'

/* import { useLocation, useParams } from 'react-router'
import { useHistory } from 'react-router-dom' */
import styled from 'styled-components'
import { sizeMedia } from '../../styles/mediaQuerys'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'

const Label = styled.label<{
  fontSize?: string
  marginbottom?: string
  bold?: boolean
}>`
  display: block;
  color: ${({ color }) => (color ? color : 'black')};
  font-size: ${({ fontSize }) => fontSize};
  display: block;
  text-transform: capitalize;
  margin: 1rem 0;
  font-weight: ${({ bold }) => bold && 'bold'};
`

const BreadContainer = styled.div<{ backGroundImage: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;

  background: linear-gradient(rgba(0, 0, 0, 0.7), hsla(0, 0%, 0%, 0.7)),
    url(${({ backGroundImage }) => backGroundImage}) center / cover;

  background-repeat: no-repeat;
`
const Bread = styled.div`
  width: 1000px;
  margin: auto;
  @media ${sizeMedia('sm')} {
    width: 90%;
  }
`

export const Indicator = () => {
  const [indicator, setindicator] = useState<any>()
  useEffect(() => {
    const localStorageItem = JSON.parse(
      localStorage.getItem('indicator') || '{}',
    )
    setindicator(localStorageItem)
  }, [])

  return (
    <BreadContainer backGroundImage={indicator?.urlImageIndicator}>
      <Bread className="bread">
        <div className="pointer">
          <IoChevronBack
            size={30}
            color="white"
            onClick={() => history.back()}
          />
        </div>
        <Label color="white" fontSize="2.3rem">
          {indicator?.titleIndicator}
        </Label>
        <Label fontSize=".9rem" color="white">
          Inicio / {indicator?.titleIndicator}
        </Label>
      </Bread>
    </BreadContainer>
  )
}
