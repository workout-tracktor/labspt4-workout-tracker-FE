import React from "react";

const WorkoutTypeForm = ({setWorkoutType}) => {
    const chooseHandler = event => {
        event.preventDefault();
        setWorkoutType(event.target.value);
    };
    return (
        <form onSubmit={chooseHandler}>
            <legend>What kind of workout did you do?</legend>
            <button value="weightlifting" onClick={chooseHandler}>
                Weightlifting?
            </button>
            <button value="cardio" onClick={chooseHandler}>
                Cardio?
            </button>
        </form>
    );
};

export default WorkoutTypeForm;

