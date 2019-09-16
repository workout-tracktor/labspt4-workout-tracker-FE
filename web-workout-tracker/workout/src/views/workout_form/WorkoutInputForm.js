import React, {useState} from "react";
import WorkoutSetForm from "./WorkoutSetForm";
import DatePicker from "../DatePicker";


const WorkoutInputForm = ({setWorkoutType, setData, changeDate, changeName}) => {
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

                <WorkoutSetForm setData={setData}
                                submitHandler={submitHandler}
                                set={set}
                                setSet={setSet}/>
            </form>
        </>
    )
};

export default WorkoutInputForm
