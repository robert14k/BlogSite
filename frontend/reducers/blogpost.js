const initialState = [
    {text: "Write Code!"}
]; 
// this can be any javascript type ^
// normally this will be a javascript obejct

export default function blogpost(state=initialState, actions){
    switch (action.type) {
        //this will end up using mulitple cases of a switch statment
        // which will return various things but now we're retuning state
        default:
            return state;
    }
}