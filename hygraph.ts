import { GraphQLClient } from "graphql_request/mod.ts"

export const hygraph = new GraphQLClient(
  Deno.env.get("CONTENT_API")!
)
