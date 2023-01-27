import React from 'react'
import { Header } from './Header'
import { SearchFilter } from '../components/SearchFilter'
import { Footer } from './Footer'
import Head from 'next/head'
import GlobalModal from '../components/modal/GlobalModal'
import Snackbar from '../components/snackbar/SnackBar'
import { HeaderCustom } from './HeaderCustom'

interface LayoutProps {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderCustom />
      {children}
      <GlobalModal />
      <Snackbar />
      {/* <Footer /> */}
    </>
  )
}
