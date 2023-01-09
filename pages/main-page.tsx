import React from 'react'
import { informationPlacesData } from '../src/data/infoData'
import { Layout } from '../src/layout/Layout'
import { InformationPlaces } from '../src/components/InformationPlaces'
import { Footer } from '../src/layout/Footer'

const MainPage = () => {
  return (
    <Layout>
      <InformationPlaces
        title="Descubre las pymes"
        subtitle="Todas las categorias"
        places={informationPlacesData}
      />
    </Layout>
  )
}

export default MainPage
