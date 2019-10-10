import React from 'react'
import styled from 'styled-components';


const CardContainer = styled.div`
    width: 40%;
    border: 1px solid black;
    margin: 2%;
`;

const BoldP = styled.p`
    font-weight: bold;
`;

const TriviaCard = (props) => {
    console.log(props);
    return (
        <CardContainer>
            <h1>{props.item.category}</h1>
            <h3>TRUE OR FALSE:</h3>
            <BoldP>{props.item.question}</BoldP>
        </CardContainer>
    )
}

export default TriviaCard
