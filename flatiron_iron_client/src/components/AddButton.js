import React, {useState, useEffect} from 'react'

    
const AddButton = ({workouts, mkWorkout, renderToggle, setRenderToggle}) => {
    const [exList, setExList] = useState([])
    const [formData, setFormData] = useState({
        date: '',
        name: '',
        category: '',
        workout: '',
        sets: '',
        reps: '',
        rest: false,
        selectedExercises: ''
    })
    const [exercises, setExercises] = useState([])
    useEffect(() => {
         
        fetch("http://localhost:9292/exercises")
        .then(resp => resp.json())
        .then(setExercises)
        },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const wk = {name: formData.name, date: formData.date, rest: formData.rest}
        let data = {workout: wk, exes: exList}
        //console.log(data)
        mkWorkout(data)
    }

    const test = (e) => {
        e.preventDefault()
        console.log(exList)
    }

    const handleExAdd = (e) => {
        e.preventDefault()
        let exId = exercises.find(el => el.name === formData.selectedExercises).id
        let exName
        //console.log(exId)
        let temp = {
            name: formData.selectedExercises,
            sets: parseInt(formData.sets),
            reps: parseInt(formData.reps),
            workout_id: workouts[workouts.length-1].workout.id + 1,
            exercise_id: exId
        }
        setExList([...exList, temp])
        
    }

    const addWorkout = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
    }


    return (
        <div>
            <form  id='form' >
                <div>
                    <label>Workout Date:</label>
                        <input type="text" name='date' onChange={addWorkout}></input>
                    <label>Workout Name:</label>
                        <input type="text" name='name' onChange={addWorkout}></input>
                    <label>Rest Day?</label>
                        <input type="checkbox" id="rest" name="rest" value={false}  onChange={addWorkout}></input>
                </div>
                <div>
                    <label>Select Exercises:</label>
                        {/* <select name="category" id="categories" onChange={addWorkout} >
                            <option name='default' value={null}> </option>
                            <option name="category" value="chest">Chest</option>
                            <option name="category"value="back">Back</option>
                            <option name="category"value="arms">Arms</option>
                            <option name="category"value="legs">Legs</option>
                            <option name="category"value="abs">Abs</option>
                        </select> */}
                        <select name="selectedExercises" id="selectedExercises" onChange={addWorkout} >
                            <option name='default' value={null}> </option>
                            {exercises.map(ex => <option name = "selectedExercises" value = {ex.name}> {ex.name}</option>)}
                        </select>
                    
                    {/* <label>Workout:</label>
                        <input type="text" name='workout'  onChange={addWorkout}></input> */}
                    <label>Sets:</label>
                        <input type="text" name='sets' onChange={addWorkout} ></input>   
                    <label>Reps:</label>
                        <input type="text" name='reps' onChange={addWorkout} ></input>                   
                    
                    <br></br>
                    <button onClick = {handleExAdd}>Add Exercise</button>
                </div>
                <div>
                    {exList.map(ex => <li>{ex.name}: {ex.sets} Sets of {ex.reps} reps each.</li>
                   )}
                </div>
                <button onClick = {handleSubmit}>Submit Workout</button>
                <br></br>
                <button onClick = {test}>test</button>
                <div id="workout_box">

                </div>

            </form>
        </div>
    )
}

export default AddButton


// const mkWorkout = (data) => {
//     fetch('http://localhost:9292/workouts',{
//           method: "POST", 
//           headers: { Accept: "application/json", "Content-Type": "application/json", }, 
//           body: JSON.stringify(data.workout),
//           },)
//     data.exes.forEach(ex => fetch('http://localhost:9292/selectedexercises',{
//       method: "POST", 
//       headers: { Accept: "application/json", "Content-Type": "application/json", }, 
//       body: JSON.stringify(ex),
//       },))
//     setRenderToggle(!renderToggle)
//   }