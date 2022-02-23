import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import type { AppProps } from 'next/app'

const supportedChains = [4];
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
