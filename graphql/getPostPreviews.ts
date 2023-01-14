import { gql } from "../deps.ts"

export const GET_POST_PREVIEWS = gql`
  query Posts {
    posts(orderBy: date_DESC) {
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
