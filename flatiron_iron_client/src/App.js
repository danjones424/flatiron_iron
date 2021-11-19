
import './App.css';
import AddButton from './components/AddButton';
import Header from './components/Header';
import WorkoutCards from './components/WorkoutCards';
import React, {useEffect, useState} from "react";


function App() {

  const [workouts, setWorkouts] = useState([])
  const [renderToggle, setRenderToggle] = useState(true)

  useEffect(() => {
    fetch("http://localhost:9292/workouts")
    .then(resp => resp.json())
    .then(setWorkouts)
 },[renderToggle])

 function handleUpdateWorkout(updatedWorkout) {
  const updatedWorkouts = workouts.map((w) => {
    if (w.id === updatedWorkout.id) {
      return updatedWorkout;
    } else {
      return w;
    }
  });
  setWorkouts(updatedWorkouts);
}

const deleteWorkout = (id) => {
  // const updatedWorkouts = workouts.filter((w) => w.id !== id);
  fetch(`http://localhost:9292/workouts/${id}`, {
          method: "DELETE",
        })
  setRenderToggle(!renderToggle)
  // setWorkouts(updatedWorkouts);
};

const mkWorkout = (data) => {
  fetch('http://localhost:9292/workouts',{
        method: "POST", 
        headers: { Accept: "application/json", "Content-Type": "application/json", }, 
        body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(new_workout => setWorkouts([...workouts, new_workout]))
  // data.exes.forEach(ex => fetch('http://localhost:9292/selectedexercises',{
  //   method: "POST", 
  //   headers: { Accept: "application/json", "Content-Type": "application/json", }, 
  //   body: JSON.stringify(ex),
  //   },))
  //setRenderToggle(!renderToggle)

}

 
  // const getbig = [
  //   {
  //     "date": "5-21-2021",
  //     "workout_cat": "arms",
  //     "workout": "curls",
  //     "id": "1"
  //     },
  //     {
  //       "date": "5-23-2021",
  //       "workout_cat": "back",
  //       "workout": "lat pulldowns",
  //       "id": "2"
  //     },
  //     {
  //       "date": "5-24-2021",
  //       "workout_cat": "legs",
  //       "workout": "squats",
  //       "id": "3"
  //     },
  //     {
  //       "date": "5-25-2021",
  //       "workout_cat": "abs",
  //       "workout": "crunches",
  //       "id": "4"
  //     },
  //     {
  //       "date": "5-26-2021",
  //       "workout_cat": "chest",
  //       "workout": "bench",
  //       "id": "5"
  //     }
  // ]

  return (
    <div className="App">
      <Header />
      <WorkoutCards getbig={workouts} deleteWorkout={deleteWorkout} handleUpdateWorkout={handleUpdateWorkout}/>
      <br></br>
      <AddButton workouts = {workouts} mkWorkout = {mkWorkout} rednerToggle={renderToggle} setRenderToggle = {setRenderToggle}/>
    </div>
  );
}

export default App;
