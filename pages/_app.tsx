import '../styles/globals.css'
import { ApolloProvider } from '@apollo/react-hooks'
import type { AppProps } from 'next/app'

import { client } from '../apollo-client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
