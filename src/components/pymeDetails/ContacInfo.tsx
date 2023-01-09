import React from 'react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { Label } from '../text'
import { CardDescription } from '../widgets/card'

interface ContactProps {
  telefono: string | undefined
  email: string | undefined
}

export const ContacInfo = ({ telefono, email }: ContactProps) => {
    return (
        <div className="contact-information border-box ">
            <label className="title-content">
                Informacion de contacto
            </label>
            {telefono &&
                <ContactInfo
                    icon={
                        <IoCallOutline
                            width="20px"
                            height="20px"
                        />
                    }
                    title="Telefono"
                    contactInfo={telefono}
                />
            }


            {email &&
                <ContactInfo
                    icon={
                        <IoMailOutline
                            width="20px"
                            height="20px"
                        />
                    }
                    title="Email"
                    contactInfo={email}
                />
            }

        </div>
    )
}

interface Props {
  title: string
  contactInfo: string
  icon: any
}
export const ContactInfo = ({ title, contactInfo, icon }: Props) => {
  return (
    <div className="flex info-category">
      <div className="flex icon-info">
        {/* Icon from ionIcons */}
        {icon}
        <Label margin="0 0 0 .5rem">{title}</Label>
      </div>

      <Label htmlFor="">{contactInfo}</Label>
    </div>
  )
}
