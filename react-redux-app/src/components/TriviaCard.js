import React from 'react'

const TriviaCard = (props) => {
    console.log(props);
    return (
        <div>
            <p>{props.item.category}</p>
            <p>{props.item.question}</p>
        </div>
    )
}

export default TriviaCard
