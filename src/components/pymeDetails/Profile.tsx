import Image from 'next/image'
import React from 'react'
import {
  IoHeart,
  IoMailOutline,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from 'react-icons/io5'

import { H2 } from '../text/H2'
import {
  PymesResponseInterface,
  RedesSociales,
} from '../../interfaces/pymesResponseInterface'
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
interface ProfileProps {
  pymeResponse: PymesResponseInterface
}
TimeAgo.addDefaultLocale(es)
const timeAgo = new TimeAgo('es-ES')

export const Profile = ({
  nombre,
  urlNegocio,
  propietario,
  profileImage,
  redes_sociales,
  createdAt,
}: PymesResponseInterface) => {
  console.log(
    '\nnombre: ' + nombre,
    '\nurlNegocio: ' + urlNegocio,
    '\npropietario: ' + propietario,
    '\nurlProfile: ' + profileImage,
    '\nredesSociales: ' + redes_sociales,
  )
  return (
    <div className="informationPlace">
      <div className="information">
        <div>
          <label className="title-content">Informacion de autor</label>
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
            <div className="image">
              <Image
                width={150}
                height={150}
                src={
                  profileImage
                    ? profileImage
                    : '/public/images/profile-image.webp'
                }
                style={{
                  borderRadius: '100%',

                  /* marginLeft: '1rem', */
                }}
                alt="profile"
              />
            </div>

            {createdAt && (
              <div className="nameAndCategory">
                <label htmlFor="">{nombre}</label>
                <p
                  style={{
                    fontSize: '14px',
                  }}
                >
                  {(timeAgo.format(new Date(createdAt)))}
                </p>
              </div>
            )}
          </div>
          <div className="contact">
            {urlNegocio && (
              <div className="icon flex">
                <IoMailOutline width="20px" height="20px" />
                <label
                  style={{
                    marginLeft: '0.5rem',
                  }}
                >
                  {urlNegocio}
                </label>
              </div>
            )}
            <a
              href="https://demo.directorist.com/plugin/demo-one/directory/the-british-museum/"
              style={{
                textDecoration: 'none',
                color: '#202428',
              }}
            >
              {propietario ? propietario : 'Propietario'}
            </a>

            <div
              className="social-media flex pointer"
              style={{
                marginTop: '1rem',
                justifyContent: 'space-evenly',
              }}
            >
              {redes_sociales?.map(({ nombre, _id, urlRedSocial }) => (
                <SocialLink
                  nombre={nombre}
                  _id={_id}
                  key={_id}
                  urlRedSocial={urlRedSocial}
                />
              ))}
            </div>
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
          <IoLogoInstagram color="#C13584" width="35px" height="35px" />
        </a>
      )
    case 'Facebook':
      return (
        <a href={urlRedSocial} target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook color="#3b5998" width="35px" height="35px" />
        </a>
      )
    case 'Whatsapp':
      return <IoLogoWhatsapp color="#25D366" width="35px" height="35px" />

    default:
      return <> </>
  }
}
