import '../styles/index.scss'
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
