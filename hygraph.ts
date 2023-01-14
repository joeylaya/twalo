import { GraphQLClient } from "./deps.ts"
import { env } from "./env.ts"

export const hygraph = new GraphQLClient(
  env.contentApi
)
