const initialState=[
    // is an array but normally the initial state will be an object
    {postContent: "This is my first blog Post", author: "Robert", postTitle: "First Blog"}
];

export default function posts(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}