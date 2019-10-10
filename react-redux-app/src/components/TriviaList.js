import React from 'react'
import {connect} from 'react-redux';
import TriviaCard from './TriviaCard';
import styled from 'styled-components';


const CardContainers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    border: 2px solid black;
`;

const TriviaList = (props) => {
    console.log(props);
    
    return (
        <CardContainers>
        {props.trivia.map((item,index) => (
            <TriviaCard key={index} item={item} />
        ))} 
        </CardContainers>
    )
}

const mapStateToProps = state => {
    console.log(state.main.trivia);
    return{
        trivia: state.main.trivia
    }

}

export default connect(mapStateToProps)(TriviaList);
