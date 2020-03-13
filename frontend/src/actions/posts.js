export const addPost = (postContent, author, postTitle) => {
  return {
    type: "ADD_POST",
    postContent,
    author,
    postTitle,
  };
};

export const updatePost = (id, postContent, author, postTitle) => {
  return {
    type: "UPDATE_POST",
    postContent,
    author,
    postTitle,
    id,
  };
};

export const deletePost = id => {
  return {
    type: "DELETE_POST",
    id
  };
};
