import Image from 'next/image'
import React from 'react'
import {
  IoHeart,
  IoMailOutline,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from 'react-icons/io5'
import { FaGlobe } from 'react-icons/fa'

import {
  PymesResponseInterface,
  RedesSociales,
} from '../../interfaces/pymesResponseInterface'
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import BoxFlex from '../boxes/BoxFlex'
import { P, H2, Label } from '../text'

TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

export const Profile = ({
  nombre,
  urlNegocio,
  propietario,
  profileImage,
  redes_sociales,
  createdAt,
  email,
}: PymesResponseInterface) => {
  return (
    <div className="informationPlace">
      <div className="information">
        <div>
          <label className="title-content">Informacion acerca de la PYME</label>
        </div>

        <div className="border-box profile">
          <div className="heart pointer">
            <IoHeart width="40px" height="40px" color="#ED4956" />
            {/*  <Recaptcha
                    sitekey="6LeNLlwbAAAAAIcmdcPPXIlukfpWeRN0bNOT7_xo"
                    render="explicit"
                                /> */}
          </div>
          <div className="info-profile flex">
            <BoxFlex direction="row">
              <Image
                width={60}
                height={60}
                src={
                  profileImage
                    ? profileImage
                    : '/public/images/profile-image.webp'
                }
                style={{
                  borderRadius: '100%',
                }}
                alt="profile"
              />
              <div className="nameAndCategory">
                <H2 fontSize="20px">{nombre}</H2>
                {createdAt && (
                  <P fontSize="12px">{timeAgo.format(new Date(createdAt))}</P>
                )}
              </div>
            </BoxFlex>
          </div>
          <div className="contact">
            {urlNegocio && (
              <div className="icon flex">
                <FaGlobe size={25} />
                <a
                  href={urlNegocio}
                  target="_blank"
                  style={{
                    marginLeft: '0.5rem',
                    marginBottom: '0.5rem',
                    textDecoration: 'none',
                    color: '#202428',
                  }}
                >
                  {urlNegocio}
                </a>
              </div>
            )}

            <div className="flex">
              <IoMailOutline size={25} />
              <Label fontSize="16px" color="#202428" margin="0 0 0 0.5rem">
                {email}
              </Label>
            </div>
            {propietario && (
              <Label fontSize="14px" color="#202428">
                {propietario}
              </Label>
            )}

            <BoxFlex
              direction="row"
              style={{
                margin: '1rem 0',
              }}
            >
              {redes_sociales?.map((redSocial) => (
                <BoxFlex gap="0px" key={redSocial._id}>
                  <SocialLink {...redSocial} />
                  <Label color="#7a82a6" fontSize="14px">
                    {redSocial.nombre}
                  </Label>
                </BoxFlex>
              ))}
            </BoxFlex>
          </div>
        </div>
      </div>
    </div>
  )
}

const SocialLink = ({ nombre, urlRedSocial }: RedesSociales) => {
  switch (nombre) {
    case 'Instagram':
      return (
        <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram color="#C13584" size={30} />
        </a>
      )
    case 'Facebook':
      return (
        <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook color="#3b5998" size={30} />
        </a>
      )
    case 'Whatsapp':
      const url = `https://api.whatsapp.com/send?phone=${urlRedSocial}`
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp color="#25D366" size={30} />
        </a>
      )

    default:
      return <> </>
  }
}
