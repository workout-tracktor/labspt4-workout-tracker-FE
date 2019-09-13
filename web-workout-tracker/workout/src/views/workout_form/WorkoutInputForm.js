import React, {useState} from "react";
import WorkoutSetForm from "./WorkoutSetForm";


const WorkoutInputForm = ({workoutType, setWorkoutType, uploadData}) => {
    const backHandler = event => {
        event.preventDefault();
        setWorkoutType("");
    };
    return (
        <>
            <input type='button' value="Go Back" onClick={backHandler}/>
            <form>
                NAME OF EXERCISE: <input type='text'/>
            </form>
            <WorkoutSetForm uploadData={uploadData}/>
        </>
    )
};

export default WorkoutInputForm
