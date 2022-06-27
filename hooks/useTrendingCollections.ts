import { useQuery } from "@apollo/client"

import { TRENDING_COLLECTIONS } from "../graphql/queries"

export const useTrendingCollections = () => {
  const { loading, error, data } = useQuery(TRENDING_COLLECTIONS)

  let collections

  if (data) {
    // Flatten nested data
    collections = data?.contracts?.edges?.map((edge: any) => ({ ...edge, ...edge?.node, ...edge?.node?.stats }))
  }

  return {
    loading,
    error,
    collections,
  }
}