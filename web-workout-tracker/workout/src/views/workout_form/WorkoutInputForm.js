import DatePicker from "../DatePicker";
import React, {useState} from "react";


const WorkoutInputForm = ({workoutType, setWorkoutType, setData, data}) => {
    const backHandler = event => {
        event.preventDefault();
        setWorkoutType("");
    };
    const [inputData, setInputData] = useState({
        measurement1: "0",
        measurement2: "0",
        completed: false,
        date: new Date()
    });

    const submitHandler = event => {
        event.preventDefault();
        setData(inputData);
    };

    const onChangeHandler = event => {
        setInputData({...inputData, [event.target.name]: event.target.value});
        console.log(inputData)
    };

    return (
        <>
            <button onClick={backHandler}>Go back</button>
            <DatePicker/>
            <form onSubmit={submitHandler}>
                <h3>{workoutType}</h3>
                <h5>Input your workout info</h5>
                <input
                    type="text"
                    name="exerciseName"
                    placeholder="Enter your exercise"
                    onChange={onChangeHandler}
                    required
                />
                <br/>
                <h5>Enter Workout Details</h5>
                <input
                    type="range"
                    min="1"
                    max="100"
                    name="measurement1"
                    onChange={onChangeHandler}
                    value={inputData.measurement1}
                />
                <input
                    type="number"
                    min="1"
                    max="100"
                    name="measurement1"
                    onChange={onChangeHandler}
                    value={inputData.measurement1}
                />
                <br/>

                <input
                    type="range"
                    min="1"
                    max="100"
                    name="measurement2"
                    onChange={onChangeHandler}
                    value={inputData.measurement2}
                />
                <input
                    type="number"
                    min="1"
                    max="100"
                    name="measurement2"
                    onChange={onChangeHandler}
                    value={inputData.measurement2}
                />
                <p>Completed?</p>
                <input
                    type="checkbox"
                    name="completed"
                    value={inputData.completed}
                    onChange={e => {
                        if (e.target.checked) {
                            setInputData({...inputData, completed: true});
                        } else if (!e.target.checked) {
                            setInputData({...inputData, completed: false});
                        }
                    }}
                />
                <br/>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default WorkoutInputForm
