import gql from "graphql-tag";

export const ADD_POST = gql`
  mutation addPost($authorName: String, $title: String, $blogText: String) {
    createPost(authorName: $authorName, title: $title, blogText: $blogText) {
      title
      blogText
      authorName
      createdAt
      updatedAt
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String, $email: String, $uid: String) {
    createUser(name: $name, email: $email, uid: $uid) {
      name
      email
    }
  }
`;

// NOTE: uses firebase auth UID as $user for now
export const ADD_LIKE = gql`
  mutation addLike($id: String, $user: String) {
    addLike(id: $id, user: $user) {
      title
      blogText
      likes
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($text: String, $user: String, $id: String) {
    addComment(text: $text, user: $user, id: $id) {
      text
      date
      user
    }
  }
`;
