import React, {useState} from "react";
import ExerciseCardioForm from "./ExerciseCardioForm";
import ExerciseWeightliftingForm from "./ExerciseWeightliftingForm";
import DatePicker from "../DatePicker";
import styled from "styled-components";
import {connect} from "react-redux";
import {addExerciseToState} from "../../actions";
import axios from 'axios'


const ExerciseForm = (props) => {
    const exerciseType = props.match.params.exercise

    const backHandler = event => {
        event.preventDefault();
        props.history.push('/exercise-form')
    };

    const submitHandler = e => {
      e.preventDefault()
      const user_id = localStorage.getItem('user_id');
      const newExercise = {name, date, set, completed, workoutType: exerciseType};

      if(edit === true){
        axios.put(`https://workouttrackerprod.herokuapp.com/api/exercises?user_id=${user_id}`, newExercise)
      } else {
        //MAKE SURE TO REPLACE FOR AXIOS CALL
        props.addExerciseToState(newExercise);
      }
      props.history.push('/Landing')
};

    const [InitialName, setInitialName] = useState([]);
    const [name, setName] = useState("");

    const [date, setDate] = useState(new Date());

    const [set, setSet] = useState(() => {
      if(props.location.workout){
        return [props.location.workout.set]
      } else {
        return []
      }
    });

    const [completed, setCompleted] = useState(false);

    let setObject = {}

    const [editWorkout, setEditWorkout] = useState(props.workout)

    const[edit, setEdit] = useState(false)


    React.useEffect(() => {
      // Update the document title using the browser API
      // console.log(props.location.workout)
      const autocomplete = () =>  {
        axios
        .get(`https://workouttrackerprod.herokuapp.com/api/exercises`)
        .then(res => {
          let resData = res.data;
          let filtered = [];
          for (let i in resData) {
            filtered.push(resData[i].name);
          }
          setInitialName(filtered);
        });
      }
      
      if(props.location.workout) {
        autocomplete()
        console.log(props.location.workout)
        setName(props.location.workout.name)   
        setSet(props.location.workout.set)
        setEdit(true)
      } else {
        autocomplete()
      }
    }, []);

    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <ButtonDiv>
                    <BackInput type="button" value="< Back" onClick={backHandler}/>

                    <SubmitInput type="submit"/>
                </ButtonDiv>

                <Header>NAME OF EXERCISE:</Header>

                <Div>
                <ExerciseInput
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                list="whatever"
                />
                <datalist id="whatever">
                  {
                    InitialName.map(filtered => {
                      return(
                      <option value={filtered}></option>
                      )
                    })
                  }
                </datalist>
                </Div>

                <DateDiv>
                    <Text>Date</Text>
                    <DatePicker date={date} setDate={setDate}/>
                </DateDiv>

                <Div>
                    {exerciseType === "cardio" ?
                        <ExerciseCardioForm
                            submitHandler={submitHandler}
                            set={set}
                            setSet={setSet}
                        />
                        :
                        <ExerciseWeightliftingForm
                            submitHandler={submitHandler}
                            set={set}
                            setSet={setSet}
                        />
                    }
                </Div>
                Completed? <input type='checkbox' onChange={(e) => {
                if (e.target.checked === true) setCompleted(true)
                else if (e.target.checked === false) setCompleted(false)
            }}/>
            </Form>
        </Container>
    );
};


const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  /* height: 30px; */
  margin-bottom: 20px;
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(225, 233, 241, 0.1);
`;
const ButtonDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const BackInput = styled.input`
  background: none;
  border: none;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #03a3f3;
  opacity: 0.7;
  cursor: pointer;
`;
const ExerciseInput = styled.input`
  width: 600px;
  height: 40px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 18px;
  font-weight: 200;
  @media (max-width: 600px) {
    width: 300px;
  }
`;
const SubmitInput = styled.input`
  /* background: rgba(255, 255, 255, 0.1);
  border-radius: 2px; */
  background: none;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;
const Header = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Text = styled.h3`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
`;

const Form = styled.form``;

const mapStateToProps = state => {
    return {
        exerciseData: state.exerciseData
    }
};


export default connect(mapStateToProps, {addExerciseToState})(ExerciseForm);