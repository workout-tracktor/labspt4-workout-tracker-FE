import React, {useState} from 'react'

const InputWorkoutForm = (props) => {

    const [weightOrCardio, setWeightOrCardio] = useState('');

    const [data, setData] = useState([]);


    return (
        <div className="input-workout-form">
            {weightOrCardio === '' ? <ChooseForm setWeightOrCardio={setWeightOrCardio}/> :
                <InputForm weightOrCardio={weightOrCardio}
                           setWeightOrCardio={setWeightOrCardio}
                           setData={setData}
                           data={data}/>}


            {data.map(data => {
                return (
                    <div>
                        {console.log(data)}
                        {data.exerciseName} {data.measurement} {data.unit}
                    </div>)
            })}
        </div>
    );
};

const ChooseForm = ({setWeightOrCardio}) => {

    const chooseHandler = (event) => {
        event.preventDefault();
        setWeightOrCardio(event.target.value)
    };
    return (
        <form>
            <legend>What kind of workout did you do?</legend>
            <button value='weightlifting' onClick={chooseHandler}>Weightlifting?</button>
            <button value='cardio' onClick={chooseHandler}>Cardio?</button>
        </form>
    )
};

const InputForm = ({weightOrCardio, setWeightOrCardio, setData, data}) => {
    const backHandler = (event) => {
        event.preventDefault();
        setWeightOrCardio('')
    };
    const [inputData, setInputData] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();
        setData([...data, inputData])
    };

    const onChangeHandler = (event) => {
        setInputData({...inputData, [event.target.name]: event.target.value});

        console.log(inputData)
    };

    return (
        <>
            <button onClick={backHandler}>Go back</button>
            <form onSubmit={submitHandler}>
                <p>{weightOrCardio}</p>
                <label>Input your workout info</label>
                <input type='text'
                       name='exerciseName'
                       placeholder='Enter your exercise'
                       onChange={onChangeHandler}/>
                <input type='number'
                       min='1'
                       max='1000'
                       name='measurement'
                       placeholder='Enter measurement'
                       onChange={onChangeHandler}/>
                <select name='unit' onChange={onChangeHandler}>
                    <option value="reps" selected='selected'>{weightOrCardio === 'weightlifting' ? 'reps' : 'distance'}</option>
                    <option value="weight">{weightOrCardio === 'weightlifting' ? 'weight' : 'minutes'}</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </>
    )

};


export default InputWorkoutForm;