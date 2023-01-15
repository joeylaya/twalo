import { GraphQLClient } from "./deps.ts"
// import { env } from "./env.ts"

export const hygraph = new GraphQLClient(
  // env.CONTENT_API
  Deno.env.get("CONTENT_API")!
)
