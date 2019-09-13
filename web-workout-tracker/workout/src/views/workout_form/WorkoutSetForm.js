import React, {useState} from "react";
import DatePicker from "../DatePicker";
import {Redirect} from "react-router";

const WorkoutSetForm = (props) => {
    const [num, setNum] = useState([]);


    const addASet = (e) => {
        e.preventDefault()
        setNum([...num, 0]);
    };

    const deleteASet = (e) => {
        e.preventDefault()
        let numCopy = [...num];
        numCopy.pop();
        setNum(numCopy);
    };


    const [data, changeData] = useState({})
    const inputHandler = e => {
        let obj = {...data};
        obj[e.target.name] = e.target.value;
        changeData(obj);
        console.log(data)
    };


    const submitHandler = (e) => {
        e.preventDefault();
        return <Redirect to={"/"}/>
    };

    return (
        <>
            <DatePicker/>
            {num.map((set, idx) => {
                return (
                    <div key={idx}>
                        <h3>Set {idx + 1}</h3>
                        WEIGHT: <input type="number"
                                       min='1'
                                       max='1000'
                                       name={`weight${idx + 1}`}
                                       onChange={inputHandler}
                                       value={data[`weight${idx + 1}`]}/>
                        <input type='range'
                               min='1'
                               max={'1000'}
                               name={`weight${idx + 1}`}
                               onChange={inputHandler}/>

                        <br/>
                        REP: <input type="number" min='1' max='1000' name={`rep${idx + 1}`} onChange={inputHandler}/>
                    </div>

                )
            })}
            <input type='button' value="+ ADD A SET" onClick={addASet}/>
            <input type='button' value='- REMOVE LAST SET' onClick={deleteASet}/>

            <input type='submit' onClick={submitHandler}/>
        </>
    )
};

export default WorkoutSetForm