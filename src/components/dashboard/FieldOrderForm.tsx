import { useState } from 'react'



import { H2 } from '../text'
import DragList from '../dragBoxex/DragList'
import { Loading } from '../widgets/loadings/Loading'
import { processDrag, validateStatus } from '../utils/utils'
import { putAction } from '../../provider/action/ActionAuthorization'
import ActionButton from '../buttons/ActionButton'
const FieldOrderForm = (props: any) => {
  const {
    fields,
    onClose,
    openSnackbar,
    order = 'order',
    id = 'fieldProcessStepId',
    name = 'label',
    url,
  } = props
  const [state, setState] = useState({
    quotes: processDrag(fields),
  })
  const [load, setload] = useState(false)

  const OnSubmit = async () => {
    try {
      setload(true)
      console.log(state.quotes)
      const body = state.quotes.map((quote)=>{
        return quote.content
      })
      await putAction(url, body).then((res:any) => {
        setload(false)
        if (validateStatus(res.status)) {
          openSnackbar('Se guardo exitosamente', true, true)
          alert('Se guardo exitosamente')
        } else {
          alert('error')
        }
      })
    } catch (e) {
      setload(false)
    }
  }

  return (
    <div>
      <H2>*Ordena arrastrándolos y así cambiarán su posición.</H2>
      <DragList state={state} setState={setState} />
      {load ? (
        <Loading />
      ) : (
        <ActionButton
          onClick={OnSubmit}
          onCancel={onClose}
          textBtn="Guardar cambios"
        />
      )}
    </div>
  )
}

export default FieldOrderForm
