import styled from 'styled-components'
const ButtonStyle = styled.button<any>`
  width: ${(props) => props.width || '80%'};
  padding: 8px 0;
  border-radius: 10px;
  background: var(--orange2);
  font-size: 2rem;
  border: 1px solid var(--orange2);
  color: var(--white);
  cursor: pointer;
  font-family: 'Spartan', sans-serif;
  margin-bottom: 10px;
  font-weight: 500;
  background: ${(props) =>
    props.background ? 'var(--white)' : 'var(--orange2)'};
  color: ${(props) => (props.background ? 'var(--orange2)' : 'var(--white)')};
  &:hover {
    border: 1px solid
      ${(props) => (props.background ? 'var(--black)' : 'var(--orange2)')};
    color: var(--black);
  }
  &:disabled {
    opacity: 0.2;
  }
`
const NormalButton = (props: any) => {
  const { children, type, onClick, disabled, background, width } = props
  return (
    <ButtonStyle
      background={background}
      className="NormalButton"
      disabled={disabled}
      onClick={onClick}
      type={type}
      width={width}
    >
      {children}
    </ButtonStyle>
  )
}

export default NormalButton
