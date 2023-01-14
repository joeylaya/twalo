import { gql } from "../deps.ts"

export const GET_RECENT_POST_LINKS = gql`
  query PostLinks {
    posts(orderBy: date_DESC, first: 3) {
      slug
      title
    }
  }
`
