//Import actions here from ./actions
import {START_FETCH, fetchQuestions, FETCH_SUCCESS, FETCH_FAIL} from '../actions/';

const initialState = {
    isFetching:false,
    error: '',
    trivia:[{
        "category":"General Knowledge",
        "type":"multiple",
        "difficulty":"easy",
        "question":"What is Cynophobia the fear of?","correct_answer":"Dogs",
        "incorrect_answers":["Birds","Flying","Germs"]
    }]
};




export const mainReducer = (state = initialState, action ) => {

    switch(action.type){
        case START_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                trivia: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_FAIL:
            return {
                ...state,
                isFetching:false,
                error:action.payload
            }
        default: 
            return state;
    }
}
