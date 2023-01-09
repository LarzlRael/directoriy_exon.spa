import React from 'react'
import styled from 'styled-components'
import { sizeMedia } from '../../styles/mediaQuerys'
import { LinkStyled } from '../../styles/SharedStyles'
import { H2 } from './text'
import { Span } from './text/Span'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { changeIndicator } from '../store/slices/slices'
export interface InformationPlacesI {
  title: string
  backGroundImage?: string
  icon: string
}
interface Props {
  places: InformationPlacesI[]
  title: string
  subtitle: string
}
interface PropsInfor {
  place: InformationPlacesI
}

const CardInformation = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  position: relative;
  width: 100%;
  z-index: 1;

  @media ${sizeMedia('sm')} {
    width: 100%;
  }
`

const Icon = styled.i`
  color: white;
  font-size: 25px;
`
const Line = styled.div`
  border: solid 0.1px rgba(0, 0, 0, 0.2);
  margin-top: 4rem;
  margin-bottom: 1rem;
`
const ImageBrackGround = styled.div<{
  background: string
}>`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(${({ background }) => background}) center / cover;
  background-size: cover;
  opacity: 0.9;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`

export const InformationPlaces = ({ places, title, subtitle }: Props) => {
  const router = useRouter()
  return (
    <div className="infomationContainer">
      <H2
        margin="1.5rem 0 0 0"
        fontSize="2rem"
        color="#292828"
        fontWeight="bold"
      >
        {title}
      </H2>

      <Span margin="1rem 0" color="#292828" fontSize="1.2rem" fontWeight="600">
        {subtitle}
      </Span>
      <div className="informationGrids">
        {places.map((place, i) => (
          <InformationCard key={i} place={place} />
        ))}
      </div>
      <Line />
    </div>
  )
}

export const InformationCard = ({
  place: { title, backGroundImage, icon },
}: PropsInfor) => {
  const convertSlug = title.replace(' ', '-').toLowerCase()
  const dispatch = useDispatch()
  const router = useRouter()
  const onClick = (e: any) => {
    e.preventDefault()
    router.push(`/productos/${convertSlug}`)
    dispatch(
      changeIndicator({
        titleIndicator: title,
        urlImageIndicator: backGroundImage!,
      }),
    )
  }
  return (
    <CardInformation onClick={onClick}>
      <ImageBrackGround background={backGroundImage!} />
      <Icon className={icon} />
      <Span color="white" fontSize="18px" margin="10px">
        {title}
      </Span>
    </CardInformation>
  )
}
