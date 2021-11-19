import React, {useState} from 'react'

const EditWorkout = ({getbig:{date, workout, exercise}, handleUpdateWorkout}) => {

    

    const [updatedDate, setUpdatedDate] = useState(date);
    const [updatedWorkout, setUpdatedWorkout] = useState(workout);
    const [updatedName, setUpdatedName] = useState(workout.name);
    const [updatedExercise, setUpdatedExercise] = useState(exercise);

    function handleEditForm(e) {
      e.preventDefault();
  
      
      fetch(`http://localhost:9292/workouts/${workout.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: updatedDate, workout: updatedWorkout, name: updatedName, exercise: updatedExercise }),
      })
        .then((resp) => resp.json())
        .then((updatedDonation) => handleUpdateWorkout(updatedDonation));
    }
  
    return (
      <form onSubmit={handleEditForm}>
          <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={updatedDate}
          onChange={(e) => setUpdatedDate(e.target.value)}
        />
        <label htmlFor="workout">Workout:</label>
        <input
          id="workout"
          type="text"
          name="workout"
          value={updatedWorkout}
          onChange={(e) => setUpdatedWorkout(e.target.value)}
        />
        <label htmlFor="Exercise">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <label htmlFor="date">Exercise:</label>
        <input
          id="exercise"
          type="text"
          name="exercise"
          value={updatedExercise}
          onChange={(e) => setUpdatedExercise(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
export default EditWorkout
