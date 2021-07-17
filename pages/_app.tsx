/** @jsxImportSource theme-ui */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme/theme'
import Nav from '../src/components/nav'

function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>      
    </ThemeProvider>
  )
}

export default App