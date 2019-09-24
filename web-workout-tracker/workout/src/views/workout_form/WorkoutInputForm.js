import React, {useState} from "react";
import WorkoutWeightliftingForm from "./WorkoutWeightliftingForm";
import DatePicker from "../DatePicker";
import WorkoutCardioForm from "./WorkoutCardioForm";


const WorkoutInputForm = ({workoutType, setWorkoutType, setData, changeDate, changeName}) => {
    const backHandler = event => {
        event.preventDefault();
        setWorkoutType("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setData(set);
        changeDate(date);
        changeName(name);
    };

    const [name, setName] = useState("");

    const [date, setDate] = useState(new Date());

    const [set, setSet] = useState([]);

    return (
        <>
            <input type='button' value="Go Back" onClick={backHandler}/>
            <form onSubmit={submitHandler}>
                NAME OF EXERCISE:
                <input type='text' value={name} onChange={e => setName(e.target.value)} required/>
                <DatePicker date={date} setDate={setDate}/>
                <input type='submit'/>
                <hr/>

                {workoutType === 'cardio' ?
                    <WorkoutCardioForm setData={setData}
                                       submitHandler={submitHandler}
                                       set={set}
                                       setSet={setSet}/>
                    :
                    <WorkoutWeightliftingForm setData={setData}
                                       submitHandler={submitHandler}
                                       set={set}
                                       setSet={setSet}/>
                }

            </form>
        </>
    )
};

export default WorkoutInputForm
