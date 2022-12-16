import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { MaxpokeProvider } from "../contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MaxpokeProvider>
            <Component {...pageProps} />
        </MaxpokeProvider>
    )
}
