import { gql } from "graphql_request/mod.ts"

export const GET_RECENT_POST_PREVIEW = gql`
  query Posts {
    posts(orderBy: date_DESC, first: 1) {
      id
      slug
      date
      title
      excerpt
      tags
      coverImage {
        id
        url
        altText
      }
      author {
        id
        name
        picture {
          id
          url
          altText
        }
      }
    }
  }
`
