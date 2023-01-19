import * as Yup from 'yup'
import { InputJsonI } from '../../interfaces/globalFormInterface'
export const firstExample: InputJsonI[] = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'Fernando',
    label: 'First Name',
    value: '',
    validate: Yup.string()
      .required('Campo requerido')
      .min(2, 'Minimo 2 caracteres'),
  },
  {
    type: 'checkbox',
    name: 'verify',
    placeholder: 'Fernando',
    label: 'First Name',
    value: false,
    validate: Yup.boolean().isTrue('Debes aceptar los terminos y condiciones'),
  },
  {
    type: 'number',
    name: 'lastName',
    placeholder: 'Herrera',
    label: 'Last Name',
    value: '',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'fernando@google.com',
    label: 'Email',
    value: '',
  },
  {
    type: 'select',
    name: 'favoriteGame',
    label: 'Favorite Game',
    value: '',
    options: [
      {
        id: 1,
        label: 'Super Smash',
      },
      {
        id: 2,
        label: 'Metal Gear',
      },
      {
        id: 3,
        label: 'Resident Evil',
      },
    ],
  },
]
