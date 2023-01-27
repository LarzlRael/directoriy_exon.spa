import React from 'react'
import { informationPlacesData } from '../src/data/infoData'

import { Layout } from '../src/layout/Layout'
import { InformationPlaces } from '../src/components/InformationPlaces'
import { Header } from '../src/layout/Header'
import { SearchFilter } from '../src/components/SearchFilter'

const MainPage = () => {
  return (
    <Layout>
      <div className="mainPage">
        <Header sticky={false} />
        <SearchFilter />
      </div>
      <InformationPlaces
        title="Descubre las pymes"
        subtitle="Todas las categorias"
        places={informationPlacesData}
      />
    </Layout>
  )
}

export default MainPage
