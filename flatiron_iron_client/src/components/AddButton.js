import React, {useState} from 'react'

const AddButton = () => {

    const [formData, setFormData] = useState({
        date: '',
        category: '',
        workout: '',
        sets: '',
        reps: '',
        rest: false,
    })

    const addWorkout = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
    }


    return (
        <div>
            <form  id='form' >
                <label>Today's Date:</label>
                    <input type="text" name='date' onChange={addWorkout}></input>
                <label>Workout Category:</label>
                    <select name="category" id="categories" onChange={addWorkout} >
                        <option name='default' value={null}> </option>
                        <option name="category" value="chest">Chest</option>
                        <option name="category"value="back">Back</option>
                        <option name="category"value="arms">Arms</option>
                        <option name="category"value="legs">Legs</option>
                        <option name="category"value="abs">Abs</option>
                    </select>
                <label>Rest Day?</label>
                <input type="checkbox" id="rest" name="rest" value={false}  onChange={addWorkout}></input>
                <label>Workout:</label>
                    <input type="text" name='workout'  onChange={addWorkout}></input>
                <label>Sets:</label>
                    <input type="text" name='sets' onChange={addWorkout} ></input>   
                <label>Reps:</label>
                    <input type="text" name='reps' onChange={addWorkout} ></input>                   
                
                <br></br>
                <button>Add Workout</button>
                <br></br>
                <div id="workout_box">

                </div>

            </form>
        </div>
    )
}

export default AddButton
