
import './App.css';
import AddButton from './components/AddButton';
import Header from './components/Header';
import WorkoutCards from './components/WorkoutCards';

function App() {

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
      <WorkoutCards getbig={getbig}/>
      <AddButton />
    </div>
  );
}

export default App;
