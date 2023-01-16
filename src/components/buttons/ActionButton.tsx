import GlobalButton from './GlobalButton'

const ActionButton = ({
  onClick,
  onCancel,
  textBtn,
  textCancel = 'Cancelar',
  type = 'button',
  disabled = false,
}: any) => {
  return (
    <div className="ActionButton">
      <GlobalButton background="var(--white)" onClick={onCancel} type="button">
        {textCancel}
      </GlobalButton>
      <GlobalButton onClick={onClick} type={type} disabled={disabled}>
        {textBtn}
      </GlobalButton>
    </div>
  )
}

export default ActionButton
