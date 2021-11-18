import React from 'react'
import Card from './Card'

const WorkoutCards = ({getbig, deleteWorkout, handleUpdateWorkout}) => {
    return (
        <main>
            <ul id="cards">
           {getbig.map(w => <Card key={ Math.floor(Math.random() * 100000)} getbig={w} deleteWorkout={deleteWorkout} handleUpdateWorkout={handleUpdateWorkout}/>)}
           </ul>
        </main>
    )
}

export default WorkoutCards
