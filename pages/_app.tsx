import '../styles/globals.css'
import { ApolloProvider } from '@apollo/react-hooks'
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app'

import { client } from '../apollo-client'

import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ToastContainer />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
