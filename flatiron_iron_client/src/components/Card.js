import React, {useState} from 'react'
import EditWorkout from './EditWorkout';


const Card = ({getbig, handleUpdateWorkout, deleteWorkout, getbig: {exercises, workout, id}}) => {
    
    const [isEditing, setIsEditing] = useState(false);

    const handleWorkoutUpdate = (updatedWorkout) => {
        setIsEditing(false);
        handleUpdateWorkout(updatedWorkout);
      };

    const handleDelete = () => {
        deleteWorkout(workout.id);
        // fetch(`http://localhost:9292/selectedexercise/${id}`, {
        //   method: "DELETE",
        // });
      };
    
    return (
    <li id="card_list">
        {isEditing ? (
        <EditWorkout
          getbig={getbig}
          handleUpdateWorkout={handleWorkoutUpdate}
        />
      ) : (
        <div id="card">

            {/* {console.log(exercises)} */}
            {console.log(workout)}
            <h3>{workout.date}</h3>
            <h4>{exercises.map(e => e.name)}</h4>
            <h4>{workout.name}</h4>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
    )
}

export default Card


    
