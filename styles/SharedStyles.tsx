import Link from 'next/link'
import styled from 'styled-components'

export const LinkStyled = styled(Link)<{ theme?: boolean }>`
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
  text-decoration: none;
`
