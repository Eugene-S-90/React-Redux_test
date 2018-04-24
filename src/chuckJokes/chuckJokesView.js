import React from 'react';
import { connect } from 'react-redux'

const ChuckJokesView = ({ resChuckJokes }) => {   // aka (props) and then props.resChuckJokes
    let chuckresult = null;
    if (resChuckJokes) {
        chuckresult = resChuckJokes.map((item) => {
            return (
                <li key={item.id} >{item.joke}</li>
            )
        })
    } else {
        chuckresult = ""
    }
    return (
        <div>
            <ul>
                {chuckresult}
            </ul>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        resChuckJokes: state.chuckJokes.jokes.value,
    };
};
export default connect(mapStateToProps)(ChuckJokesView);