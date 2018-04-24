
export function getChuckJokes(number){
    console.log(number)
    return async function (dispatch){
        const res = await fetch(`http://api.icndb.com/jokes/random/${number}`);
        const jokes = await res.json();
        return dispatch({
            type:'GET_CHUCKJOKES',
            data:jokes
        })
    }
}