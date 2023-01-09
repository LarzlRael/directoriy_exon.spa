import React from 'react'
import { Loading } from '../components/widgets/loadings/Loading'

export const LoadingPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loading />
    </div>
  )
}
