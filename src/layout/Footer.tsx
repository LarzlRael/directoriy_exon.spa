import React from 'react'
import styled from 'styled-components'
import { primaryColor } from '../context/themeColors'
import { footerString } from '../strings'
import { Label } from '../components/text/Label'

const FooterStyled = styled.footer`
  align-items: center;
  background: ${primaryColor};
  color: #fff;
  display: flex;
  justify-content: center;
  height: 90px;
`

export const Footer = () => {
  const yearCurrently = new Date().getFullYear()

  return (
    <FooterStyled>
      <Label color="white" fontSize="1rem">
        © {yearCurrently} {footerString}
      </Label>
    </FooterStyled>
  )
}
