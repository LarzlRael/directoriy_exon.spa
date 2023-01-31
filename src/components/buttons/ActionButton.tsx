import GlobalButton from './GlobalButton'

interface ActionButtonProps {
  onClick: () => void
  onCancel: () => void
  textBtn: string
  textCancel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}
const ActionButton = ({
  onClick,
  onCancel,
  textBtn,
  textCancel = 'Cancelar',
  type = 'button',
  disabled = false,
}: ActionButtonProps) => {
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
