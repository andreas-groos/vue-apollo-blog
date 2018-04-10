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
      comments {
        text
        date
        user
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: String!) {
    post(id: $id) {
      title
      authorName
      blogText
      likes
      createdAt
      id
      likesBy
      comments {
        text
        date
        user
      }
    }
  }
`;
