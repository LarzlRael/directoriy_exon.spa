import { InformationPlacesI } from '../components/InformationPlaces'
import { IoPerson, IoHammer } from 'react-icons/io5'
import { MdFileUpload } from 'react-icons/md'
import { FaPlusCircle } from 'react-icons/fa'
import { OptionsI } from '../interfaces/globalFormInterface'

export const informationPlacesData: InformationPlacesI[] = [
  {
    icon: 'fab fa-accusoft',
    title: 'Information Tecnology',
    backGroundImage:
      'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
  },

  {
    icon: 'fab fa-affiliatetheme',
    title: 'Confecciones',
    backGroundImage:
      'https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
  },
  {
    icon: 'fab fa-apple',
    title: 'Property',
    backGroundImage:
      'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
  },

  {
    icon: 'fas fa-allergies',
    title: 'Property',
    backGroundImage:
      'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
  },
  {
    icon: 'fab fa-accusoft',
    title: 'Confecciones',
    backGroundImage:
      'https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
  },
  {
    icon: 'fas fa-search',
    title: 'Information Tecnology',
    backGroundImage:
      'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
  },
  {
    icon: 'fas fa-allergies',
    title: 'Information Tecnology',
    backGroundImage:
      'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg',
  },
  {
    icon: 'fas fa-search',
    title: 'Property',
    backGroundImage:
      'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
  },
  {
    icon: 'fas fa-allergies',
    title: 'Confecciones',
    backGroundImage:
      'https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
  },
]

export const departamentos: OptionsI[] = [
  {
    value: '',
    key: 'Seleccione un departamento',
  },
  {
    value: 'La Paz',
    key: 'La Paz',
  },
  {
    value: 'Cochabamba',
    key: 'Cochabamba',
  },
  {
    value: 'Santa Cruz',
    key: 'Santa Cruz',
  },
  {
    value: 'Oruro',
    key: 'Oruro',
  },
  {
    value: 'Potosi',
    key: 'Potosi',
  },
  {
    value: 'Tarija',
    key: 'Tarija',
  },
  {
    value: 'Chuquisaca',
    key: 'Chuquisaca',
  },
  {
    value: 'Beni',
    key: 'Beni',
  },
  {
    value: 'Pando',
    key: 'Pando',
  },
]
export const socialNetworks = [
  'Facebook',
  'Instagram',
  'Twitter',
  'Youtube',
  'Linkedin',
  'Whatsapp',
]
export const links = [
  {
    href: '/',
    labelLink: 'Inicio',
  },
  {
    href: '/productos/confecciones',
    labelLink: 'Listado',
  },
  {
    href: '/auth/login',
    labelLink: 'Mi Cuenta',
  },
]

interface AccountsLinkInterface {
  title_group: string
  items: ItemInterface[]
}
interface ItemInterface {
  title: string
  to: string
  icon: any
}
export const accountsLink: AccountsLinkInterface[] = [
  {
    title_group: 'Usuario',
    items: [
      {
        title: 'Mi cuenta',
        to: '/admin/profile',
        icon: <IoPerson size={25} />,
      },
    ],
  },
  {
    title_group: 'Pymes',
    items: [
      {
        title: 'Adminstrar Pymes',
        to: '/auth/adminDashboard',
        icon: <MdFileUpload size={25} />,
      },
      {
        title: 'Agregar Pyme',
        to: '/auth/pyme/addPyme',
        icon: <FaPlusCircle size={25} />,
      },
    ],
  },
]
