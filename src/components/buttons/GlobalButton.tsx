import styled from 'styled-components'
const GlobalButtonStyle = styled.button`
  border-radius: 5px;
  border: none;
  line-height: 32px;
  outline: none;
  cursor: pointer;
  border: 1px solid #e2e4f3;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
    box-shadow: 0px 1px 20px -2px #a1a9e7;
    border: 1px solid var(--blue);
  }
  &:disabled {
    opacity: 0.3;
  }
`
const GlobalButton = (props: any) => {
  const {
    onClick,
    children,
    width = '100%',
    type = 'button',
    background = '#e2e4f3',
    color = '#052691',
    fontSize = '1.6rem',
    fontWeight = '600',
    border,
    disabled,
    margin,
    height,
    padding,
    ...rest
  } = props
  return (
    <GlobalButtonStyle
      onClick={onClick}
      style={{
        width: width,
        height: height,
        background: background,
        color: color,
        border: border,
        fontSize: fontSize,
        fontWeight: fontWeight,
        margin: margin,
        padding: padding,
        ...rest,
      }}
      type={type}
      className="button_style"
      disabled={disabled}
    >
      {children}
    </GlobalButtonStyle>
  )
}

export default GlobalButton
