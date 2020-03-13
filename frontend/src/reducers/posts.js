const initialState = [
  // is an array but normally the initial state will be an object
  {
    postContent: "<p>This is my first blog Post</p>",
    author: "Robert",
    postTitle: "First Blog"
  }
];

export default function posts(state = initialState, action) {
  let postList = state.slice();

  switch (action.type) {
    case "ADD_POST":
      
      return [
        ...state,
        {
          postContent: action.postContent,
          author: action.author,
          postTitle: action.postTitle
        }
      ];

    case "UPDATE_POST":
      let postToUpdate = postList[action.id];
      postToUpdate.postContent = action.postContent;
      postToUpdate.author = action.author;
      postToUpdate.postTitle = action.postTitle;
      postList.splice(action.id, 1, postToUpdate);
      return postList;

    case "DELETE_POST":
      postList.splice(action.id, 1);
      return postList;

    default:
      return state;
  }
}
