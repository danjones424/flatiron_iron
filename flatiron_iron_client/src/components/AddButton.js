import React from 'react'

const AddButton = () => {
    return (
        <div>
            <form  id='form' >
                <label>Today's Date:</label>
                    <input type="text" name='date' ></input>
                <label>Workout Category:</label>
                    <input type="text" name="workout_cat" ></input>
                <label>Workout:</label>
                    <input type="text" name='workout' ></input>
                <br></br>

                <button>Add Workout</button>
            </form>
        </div>
    )
}

export default AddButton
