import React from 'react'
import {connect} from 'react-redux';
import TriviaCard from './TriviaCard';


const TriviaList = (props) => {
    console.log(props);
    
    return (
        <div>
        {props.trivia.map((item,index) => (
            <TriviaCard key={index} item={item} />
        ))} 
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.main.trivia);
    return{
        trivia: state.main.trivia
    }

}

export default connect(mapStateToProps)(TriviaList);
