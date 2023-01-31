interface ModalDefaultProps {
  background?: string
  closeOutside?: boolean
  onClose: () => void
  children: React.ReactNode
}
const ModalDefault = (props: ModalDefaultProps) => {
  const { background = 'rgba(0, 0, 0, 0.871)' } = props
  return (
    <div style={{ background: background }} className="ModalDefault">
      <button className="ModalDefault__close-button" onClick={props.onClose}>
        <i className="fas fa-times"></i>
      </button>
      <div className="ModalDefault__container">
        {props.closeOutside && (
          <div
            // style={{ background: background }}
            className="ModalDefault__close"
            onClick={props.onClose}
          ></div>
        )}
        <div className="ModalDefault__video">{props.children}</div>
      </div>
    </div>
  )
}

export default ModalDefault
