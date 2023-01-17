import EditorJs from 'react-editor-js'
import './style/EditorInput.css'
import { EDITOR_JS_TOOLS } from '../editorjs/Tools'
import { useState } from 'react'
import { Icon } from '../buttons'
const EditorInput = (props) => {
  const { onChange, name, label, data, hideButton } = props
  const [status, setstatus] = useState(hideButton ? true : false)
  function handleChange(_, value) {
    onChange((a) => ({
      ...a,
      [name]: value,
    }))
  }
  return (
    <>
      {status && (
        <div className="EditorInput">
          <label htmlFor="">{label}</label>
          <div className="EditorInput__editor">
            <EditorJs
              data={data}
              // data={convertStringToJson(data)}
              onChange={handleChange}
              tools={EDITOR_JS_TOOLS}
            />
          </div>
        </div>
      )}
      {!hideButton && (
        <Icon
          handleModal={() => setstatus(!status)}
          ico={status ? 'times' : 'edit'}
        >
          {status ? 'Cancelar' : `Editar ${label.toLowerCase()}`}
        </Icon>
      )}
    </>
  )
}

export default EditorInput
