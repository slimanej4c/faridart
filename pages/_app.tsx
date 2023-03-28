import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import '../styles/globals.css'
import '../styles/Layout.css'
import '../styles/Home.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


