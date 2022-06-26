import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_QUICKNODE_API_URL,
    cache: new InMemoryCache(),
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_QUICKNODE_API_KEY,
    }
})