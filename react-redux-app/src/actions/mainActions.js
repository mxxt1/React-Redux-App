import axios from 'axios';

//action types
//export const ACTION_NAME = 'ACTION_NAME'

export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';


//action creators
//export const actionName = () => function logic here \n return const action ={type:ACTION_NAME, payload:payloadName}
export const fetchQuestions = () => dispatch => {
    dispatch({type: START_FETCH});

    axios.get('https://opentdb.com/api.php?amount=15&type=boolean')
    .then( response => {
        console.log(response.data.results);
        dispatch({type: FETCH_SUCCESS, payload: response.data.results})
    })
    .catch(err => dispatch({type:FETCH_FAIL, payload: err}));
};

