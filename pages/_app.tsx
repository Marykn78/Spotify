import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout/Layout'
import {ThemeProvider} from '@mui/material'
import theme from '../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
