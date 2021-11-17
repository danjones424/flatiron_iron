import React from 'react'


const Card = ({getbig: {exercise, workout}}) => {
    return (
    <li id="card_list">
        <div id="card">
            <h4>{exercise}</h4>
            <h4>{workout}</h4>
            <button>Update</button>
            <button>Delete</button>
        </div>
    </li>
    )
}

export default Card


    
