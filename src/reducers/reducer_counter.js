
    let counter = 0 ;


export default function (state = counter,action){
    const {type} = action;
    switch(type){
        case "INCREMENT":
        return state = state + 1;
        
        case "DECREMENT":
        return state = state - 1;
        
        default:
        return state;
    }
}