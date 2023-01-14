import { gql } from "../deps.ts"

export const GET_POST = gql`
  query Post($slug: String) {
    post(where: {slug: $slug}) {
      id
      slug
      date
      title
      content {
        html
      }
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
      seo {
        title
        description
        keywords
      }
    }
  }
`
