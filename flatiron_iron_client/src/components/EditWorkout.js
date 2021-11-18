import React, {useState} from 'react'

const EditWorkout = () => {

    const { id, name } = workout;
    
    fetch(`http://localhost:9292/workouts/${id}/edit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: updatedName, date: updatedDate }),
    })
      .then((resp) => resp.json())
      .then((updatedWorkout) => onUpdateWorkout(updatedWorkout));
    
    return (
        <div>
            
        </div>
    )
}

export default EditWorkout
