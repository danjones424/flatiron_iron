import React from 'react'


const Card = ({handleUpdateWorkout, deleteWorkout, getbig: {exercises, workout, id}}) => {
    
    const handleDelete = () => {
        deleteWorkout(workout.id);
        // fetch(`http://localhost:9292/selectedexercise/${id}`, {
        //   method: "DELETE",
        // });
      };
    
    return (
    <li id="card_list">
        <div id="card">
            {/* {console.log(exercises)} */}
            {console.log(workout)}
            <h3>{workout.date}</h3>
            <h4>{exercises.map(e => e.name)}</h4>
            <h4>{workout.name}</h4>
            <button>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </li>
    )
}

export default Card


    
