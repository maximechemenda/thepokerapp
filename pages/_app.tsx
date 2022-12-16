import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { MaxpokeProvider } from "../contexts";

import { Toaster } from 'react-hot-toast';

const customToastOptions = {
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },

    error: {
        duration: 3000,
        theme: {
        primary: 'red',
        secondary: 'black',
        },
    },
  }

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MaxpokeProvider>
            <Component {...pageProps} />
            <Toaster toastOptions={customToastOptions}/>
        </MaxpokeProvider>
    )
}
