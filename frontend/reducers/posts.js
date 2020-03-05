const initialState=[
    // is an array but normally the initial state will be an object
    {content: "This is my first blog Post"}
];

export default function posts(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}