import React from 'react'
import Card from './Card'

const WorkoutCards = ({getbig}) => {
    return (
        <main>
            <ul id="cards">
           {getbig.map(w => <Card key={w.id} getbig={w}/>)}
           </ul>
        </main>
    )
}

export default WorkoutCards
