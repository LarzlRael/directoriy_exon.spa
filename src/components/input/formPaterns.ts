import * as Yup from 'yup'
import { departamentos } from '../../data/infoData'
import { InputJsonI } from '../../interfaces/globalFormInterface'
export const firstExample: InputJsonI[] = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'Fernando',
    label: 'First Name',
    initialValue: '',
    validate: Yup.string()
      .required('Campo requerido')
      .min(2, 'Minimo 2 caracteres'),
  },
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'Fernando',
    label: 'First Name',
    initialValue: '',
    validate: Yup.string()
      .required('Campo requerido')
      .min(2, 'Minimo 2 caracteres'),
  },
]

export const pymeForm: InputJsonI[] = [
  {
    name: 'nombre',
    type: 'text',
    placeholder: 'Ingrese el nombre de la pyme',
    label: 'Propietario',
    initialValue: '',
  },
  {
    name: 'propietario',
    type: 'text',
    placeholder: 'Ingrese el nombre del propietario',
    label: 'Propietario',
    initialValue: '',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Ingrese el email de la pyme',
    label: 'Email',
    initialValue: '',
  },
  {
    type: 'checkbox',
    name: 'verify',
    placeholder: 'Fernando',
    label: 'Verificar',
    initialValue: false,
  },
  {
    type: 'text',
    name: 'telefono',
    placeholder: 'Ingrese el telefono',
    label: 'Teléfono',
    initialValue: '',
  },
  {
    type: 'area',
    name: 'description',
    placeholder: 'Ingrese una descripcion',
    label: 'Descripción',
    initialValue: '',
  },
  {
    type: 'text',
    name: 'latitude',
    placeholder: 'Ingrese la latitud',
    label: 'Latitud',
    initialValue: '',
  },
  {
    type: 'text',
    name: 'longitude',
    placeholder: 'Ingrese la longitud',
    label: 'Longitud',
    initialValue: '',
  },

  {
    type: 'select',
    name: 'departamento',
    label: 'Departamento',
    options: departamentos,
  },

  {
    type: 'selectRRSS',
    name: 'redes_sociales',
    placeholder: 'Ingrese la imagen',
    label: 'Agregar imagenes',
    initialValue: [],
  },
]
