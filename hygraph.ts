import { GraphQLClient } from "./deps.ts"

export const hygraph = new GraphQLClient(
  Deno.env.get("CONTENT_API")!
)
