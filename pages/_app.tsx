/** @jsxImportSource theme-ui */
import type { AppProps } from 'next/app'
import Nav from '../src/components/nav'

function App({Component, pageProps}: AppProps) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>      
  )
}

export default App
