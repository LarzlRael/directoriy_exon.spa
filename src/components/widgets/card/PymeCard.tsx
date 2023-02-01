import React from 'react'
import Link from 'next/link'
import {
  IoCheckmarkCircle,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from 'react-icons/io5'

import {
  PymesResponseInterface,
  RedesSociales,
} from '../../../interfaces/pymesResponseInterface'
import { Label } from '../../text'
import { capitalizeFirstLetter } from '../../utils/utils'
import Image from 'next/image'

interface PymeCardProps {
  pymeInterfaceResponse: PymesResponseInterface
  isAdmin: boolean
}
export const PymeCard = ({
  pymeInterfaceResponse: { nombre, urlImages, redes_sociales, verificado, _id },
  isAdmin,
}: PymeCardProps) => {
  return (
    <div
      className={`single-card flex ${
        verificado === 'verificado' && 'verificado'
      } pointer`}
    >
      {verificado === 'verificado' && (
        <div className="check">
          <IoCheckmarkCircle size={40} color="#5EDD6A" />
        </div>
      )}

      <Link
        href={isAdmin ? `/auth/pyme/${_id}` : `/productos/details/${nombre}`}
      >
        <a>

          <Image
          /* layout="fill" */
          height={250}
          width={250}
          className="main-image"
          src={
            urlImages[0]
              ? urlImages[0]
              : 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
          }
          alt={nombre}
        />
        </a>
      </Link>

      <div className="contenido">
        <Label
          display="block"
          margin="0 0 1rem 0"
          fontWeight="bold"
          fontSize="18px"
          textAlign="start"
        >
          {capitalizeFirstLetter(nombre)}
        </Label>

        {redes_sociales?.map((red_social) => (
          <LabelAndIcon {...red_social} key={red_social.urlRedSocial} />
        ))}
      </div>
    </div>
  )
}

const LabelAndIcon = ({ nombre, urlRedSocial }: RedesSociales) => {
  let urlRedSocialFormated = urlRedSocial
  if (nombre === 'Whatsapp') {
    urlRedSocialFormated =
      'https://api.whatsapp.com/send?phone=' + urlRedSocial
  }
  return (
    <div
      style={{
        marginBottom: '0.3rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {nombre === 'Instagram' && <IoLogoInstagram color="#C13584" size={24} />}
      {nombre === 'Facebook' && <IoLogoFacebook color="#3b5998" size={24} />}
      {nombre === 'Whatsapp' && <IoLogoWhatsapp color="25D366" size={24} />}
      <a
        href={urlRedSocialFormated}
        target="_blank"
        style={{
          textDecoration: 'none',
          marginLeft: '0.6rem',
          color: '#7a82a6',
          fontSize: '0.9rem',
        }}
        rel="noreferrer"
      >
        {nombre}
      </a>
    </div>
  )
}
