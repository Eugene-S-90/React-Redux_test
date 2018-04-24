
    const  initialState = {
        jokes:[]
    } ;


    export default function (state = initialState,action){
        const {type, data} = action;
        switch(type){
            case "GET_CHUCKJOKES":
            return {
                ...state,
                jokes:data,
            }
            default:
            return state;
        }
    }