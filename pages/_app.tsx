import React from 'react'
import '../styles/index.scss'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import { HeaderCustom } from '../src/layout/HeaderCustom';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
