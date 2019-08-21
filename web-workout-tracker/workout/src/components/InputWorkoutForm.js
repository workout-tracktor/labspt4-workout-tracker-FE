import React, {useState} from 'react'

const InputWorkoutForm = (props) => {

    const [weightOrCardio, setWeightOrCardio] = useState('');


    return (
        <div className="input-workout-form">
            {weightOrCardio === '' ? <ChooseForm setWeightOrCardio={setWeightOrCardio}/> :
                <InputForm weightOrCardio={weightOrCardio}/>}
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
            <button value='weightlifting' onClick={chooseHandler}>Weightlifting?</button>
            <button value='cardio' onClick={chooseHandler}>Cardio?</button>
        </form>
    )
};

const InputForm = () => {
    return (
        <form>
            
        </form>
    )

};


export default InputWorkoutForm;