import React from 'react'


const Card = ({handleUpdateWorkout, deleteWorkout, getbig: {exercises, workout, id}}) => {
    
    const handleDelete = () => {
        deleteWorkout(workout.id);
        // fetch(`http://localhost:9292/selectedexercise/${id}`, {
        //   method: "DELETE",
        // });
      };
    
    return (
    <div className="card_list">
        <div className="card">
            {/* {console.log(exercises)} */}
            {console.log(workout)}
            <h2>{workout.name}</h2>
            <h3>{workout.date}</h3>
            {/* <h4>{exercises.map(e => e.name)}</h4> */}
            {exercises.map(e => <div className = 'wkLi'><li>{e.name}<li>{e.sets} Sets of {e.reps}.</li></li></div>)}
            <button>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
    )
}

export default Card


    
