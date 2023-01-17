import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckboxGroup'
import { InputInterface } from '../../interfaces/formsInterface'

/* import DatePicker from './DatePicker'
import EditorInput from './EditorInput'
import DropzoneInput from './DropzoneInput'
import ArrayInput from './ArrayInput'
import GetSelect from './GetSelect'
import GetCheckbox from './GetCheckbox'
import InputPhone from './InputPhone' */

function FormikControl(props: InputInterface) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    /* case 'Phone':
      return <InputPhone {...rest} /> */
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    /* case 'getSelect':
      return <GetSelect {...rest} /> */
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    /* case 'getCheckbox':
      return <GetCheckbox {...rest} /> */
    /* case 'arrayInput':
      return <ArrayInput {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    case 'editorSimple':
      return <EditorInput hideButton={true} {...rest} />
    case 'editor':
      return <EditorInput {...rest} />
    case 'file':
      return <DropzoneInput {...rest} /> */
    // case "chakraInput":
    //   return <ChakraInput {...rest} />;
    default:
      return null
  }
}

export default FormikControl
