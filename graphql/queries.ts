import { gql } from '@apollo/client'

export const TRENDING_COLLECTIONS = gql`
  query TrendingCollections {
    contracts(orderBy: SALES, orderDirection: DESC) {
      edges {
        node {
          address
          ... on ERC721Contract {
            name
            stats {
              totalSales
              average
              ceiling
              floor
              volume
            }
            symbol
            unsafeOpenseaImageUrl
            circulatingSupply
          }
        }
      }
    }
  }
`