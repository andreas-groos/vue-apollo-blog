import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  query getPosts {
    posts {
      title
      blogText
      authorName
      createdAt
      likes
      id
    }
  }
`;
