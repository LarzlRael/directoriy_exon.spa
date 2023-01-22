import * as Yup from 'yup'
import { departamentos } from '../../data/infoData'
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
    name: 'verify4',
    type: 'checkbox',
    placeholder: 'Fernando',
    label: 'Mostrar coordenadas',
    value: false,
    /* validate: Yup.boolean().isTrue('Debes aceptar los terminos y condiciones'), */
  },
  {
    name: 'latitude',
    type: 'number',
    placeholder: 'Herrera',
    label: 'latitude',
    value: '',
    validate: Yup.string().when('verify4', {
      is: true,
      then: Yup.string().required('Campo requerido.'),
    }),
    reference: 'verify4',
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
    validate: Yup.string().email('Email invalido'),
  },
  {
    type: 'area',
    name: 'description',
    placeholder: 'fernando@google.com',
    label: 'Description',
    value: '',
    /* validate: Yup.string().email('Email invalido'), */
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

export const pymeForm: InputJsonI[] = [
  {
    name: 'nombre',
    type: 'text',
    placeholder: 'Ingrese el nombre de la pyme',
    label: 'Propietario',
  },
  {
    name: 'propietario',
    type: 'text',
    placeholder: 'Ingrese el nombre del propietario',
    label: 'Propietario',
  },
  {
    type: 'checkbox',
    name: 'verify',
    placeholder: 'Fernando',
    label: 'Verificar',
    value: false,
  },
  {
    type: 'text',
    name: 'telefono',
    placeholder: 'Ingrese el telefono',
    label: 'Teléfono',
  },
  {
    type: 'area',
    name: 'description',
    placeholder: 'Ingrese una descripcion',
    label: 'Descripción',
  },
  {
    type: 'text',
    name: 'latitude',
    placeholder: 'Ingrese la latitud',
    label: 'Latitud',
  },
  {
    type: 'text',
    name: 'longitude',
    placeholder: 'Ingrese la longitud',
    label: 'Longitud',
  },
  {
    type: 'select',
    name: 'departamento',
    label: 'Departamento',
    options: departamentos,

  }
]