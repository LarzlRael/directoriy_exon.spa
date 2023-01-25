import React from 'react'
import { Header } from './Header'
import { SearchFilter } from '../components/SearchFilter'
import { Footer } from './Footer'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />

        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title>Pyme</title>
      </Head>
      <div className="mainPage">
        <Header sticky={false} />
        <SearchFilter />
      </div>
      {children}
      <Footer />
    </>
  )
}
