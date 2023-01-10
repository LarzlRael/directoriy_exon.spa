import React from 'react'
import { useState, useEffect } from 'react'

import styled from 'styled-components'
import { appName } from '../strings'
import { IoMenuOutline } from 'react-icons/io5'
import { sizeMedia } from '../../styles/mediaQuerys'
import { primaryColor } from '../context/themeColors'
import { useWindowSize } from '../hooks/useWindows'
import Link from 'next/link'
import { Label } from '../components/text'
import Image from 'next/image'
import { links } from '../data/infoData';

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  width: 1000px;
  max-width: 1000px;
  margin: 0 auto;
  /*  */
  padding: 1.5rem 0;
  align-items: center;
  transition: 0.3s ease all;

  @media ${sizeMedia('xs_sm')} {
    margin: 0;
    max-width: 100%;
    width: 100%;
    padding: 0.5rem 0;
    background: ${primaryColor};
    align-items: flex-start;
    flex-direction: column;
  }
`

const MenuIconContainer = styled.div`
  display: none;
  @media ${sizeMedia('xs_sm')} {
    display: block;
    font-size: 1.2rem;
    margin: 10px 1rem;
  }
`

interface PropsHeader {
  darkMenu?: boolean
  sticky: boolean
}
export const HeaderBlack = ({ darkMenu = false, sticky }: PropsHeader) => {
  const { windowSize } = useWindowSize()
  const [headerState, setHeaderState] = useState({
    menu: false,
    darkMenuS: darkMenu,
    changeBackground: false,
  })
  const { menu, darkMenuS, changeBackground } = headerState
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!changeBackground) {
        setHeaderState({
          ...headerState,
          changeBackground: true,
          darkMenuS: !darkMenu,
        })
      }
    } else {
      setHeaderState({
        ...headerState,
        changeBackground: false,
        darkMenuS: !darkMenu,
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (sticky) {
        handleScroll()
      }
    })
  }, [])

  const showMenu = () => {
    setHeaderState({
      ...headerState,
      menu: true,
    })
  }
  const hideMenu = () => {
    setHeaderState({
      ...headerState,
      menu: false,
    })
  }
  useEffect(() => {
    if (windowSize.width < 768) {
      hideMenu()
    } else {
      hideMenu()
    }
  }, [windowSize.width])

  const linkClickeable = () => {
    if (windowSize.width <= 768) {
      hideMenu()
    } else {
      return
    }
  }

  return (
    <div
      className={
        sticky
          ? `Header-container ${
              changeBackground ? 'Header-container--background' : ''
            }`
          : ''
      }
    >
      <HeaderContainer>
        <div className="logo-container">
          <div className="logo-container__logo-name pointer">
            <Link href="/">
              <>
                <Image
                  width={100}
                  height={35}
                  src="https://res.cloudinary.com/daij4l3is/image/upload/v1649110421/assets/dggjx7ttzzzier7zoqic.png"
                  alt="Nego LOGO"
                />

                <Label
                  color={!darkMenuS && changeBackground ? 'white' : 'black'}
                  fontSize="1.6rem"
                >
                  {appName}
                </Label>
              </>
            </Link>

            <MenuIconContainer>
              <IoMenuOutline
                height="35px"
                width="35px"
                color="white"
                size={35}
                onClick={menu ? hideMenu : showMenu}
              />
            </MenuIconContainer>
          </div>
        </div>
        {/* todo revisar */}
        <div
          className={`Header-links  ${
            !darkMenuS && changeBackground ? 'Header-links--white' : 'Header-links--black'
          }  ${menu ? 'open-menu' : 'close-menu'}`}
        >
          {/* <Link onClick={linkClickeable} href="/333">
            Inicio
          </Link>
          <Link href="/test2" onClick={linkClickeable}>
            Listado
          </Link>
          <Link href="/test3" onClick={linkClickeable}>
            Categorias
          </Link>
          <Link href="/auth/login" onClick={linkClickeable}>
            Mi cuenta
          </Link> */}
          {links.map((link, index) => {
            return (
              <div className="link-clickeable" onClick={linkClickeable}>
                <Link href={link.href} key={link.labelLink}>
                  {link.labelLink}
                </Link>
              </div>
            )
          })}
        </div>
      </HeaderContainer>
    </div>
  )
}
