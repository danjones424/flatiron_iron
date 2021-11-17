import React from 'react'


const Card = ({getbig: {date, workout_cat, workout}}) => {
    return (
    <li id="card_list">
        <div id="card">
            <h3>{date}</h3>
            <h4>{workout_cat}</h4>
            <h4>{workout}</h4>
        </div>
    </li>
    )
}

export default Card


    
