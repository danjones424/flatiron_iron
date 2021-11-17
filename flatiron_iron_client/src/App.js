
import './App.css';
import AddButton from './components/AddButton';
import Header from './components/Header';
import WorkoutCards from './components/WorkoutCards';
import React, {useEffect, useState} from "react";


function App() {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/workouts")
    .then(resp => resp.json())
    .then(setWorkouts)
 },[])

 console.log(workouts)
  const getbig = [
    {
      "date": "5-21-2021",
      "workout_cat": "arms",
      "workout": "curls",
      "id": "1"
      },
      {
        "date": "5-23-2021",
        "workout_cat": "back",
        "workout": "lat pulldowns",
        "id": "2"
      },
      {
        "date": "5-24-2021",
        "workout_cat": "legs",
        "workout": "squats",
        "id": "3"
      },
      {
        "date": "5-25-2021",
        "workout_cat": "abs",
        "workout": "crunches",
        "id": "4"
      },
      {
        "date": "5-26-2021",
        "workout_cat": "chest",
        "workout": "bench",
        "id": "5"
      }
  ]

  return (
    <div className="App">
      <Header />
      <WorkoutCards getbig={workouts}/>
      <AddButton />
    </div>
  );
}

export default App;
