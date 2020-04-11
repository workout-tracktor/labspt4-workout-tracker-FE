import React from "react";
import axios from "axios";
import styled from "styled-components";
import DropdownArrow from '../assets/icons/DropdownArrow.svg'
import DropDownInfo from './DropDownInfo'
import { withRouter } from "react-router-dom";
import PencilEdit from "../assets/icons/PencilEdit.svg";

class DropdownLogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //DUMMY Data
      //Units would set to proper units when pulled from backend
      unit: "lbs",
      distanceUnits: "miles",
      selectedValue: [],
      //Rotate helps check to see if the arrow image would roatate when clicked WIP
      rotate: false,
      Workouts: [],
      editInfo: false
    };
  }

  componentDidMount() {
    //Notifies parent component to change the titling to include Edit button.
  }

  dropDownToggler = workoutIndex => {
    //checks to see if selectedValue state already includes the passed index
    this.state.selectedValue.includes(workoutIndex)
      ? //if the passed id is already in selectedValue state, it removes it, and sets rotate to
      //false. That way it tells the conditionals to not show that id workout log
      //data and rotate the arrow back to its original position.
      this.setState({
        selectedValue: this.state.selectedValue.filter(function (data) {
          return data !== workoutIndex;
        }),
        rotate: !this.state.rotate
      })
      : //if passed id is not in selectedValue state, then it add it to that array,
        //which then lets the conditional know to render that workout log data.
        //it also sets rotate to true, so it passes a prop to properly animate arrow image.
            this.setState({
                selectedValue: [...this.state.selectedValue, workoutIndex], 
                rotate: !this.state.rotate, 
            })
    }

    editHandler = workout => e =>{
        e.preventDefault()
        // this.props.history.push({
        //  pathname:   `/exercise-form/${workout.workoutType}`,
        //  workout: workout
        // })
    }

    deleteHandler = exerciseId => e => {
      e.preventDefault()
        axios
          .delete(`https://workouttrackerprod.herokuapp.com/api/exercise?id=${exerciseId}` )
          .then(res => {
            const newState = this.props.workout.filter(exercise => {
                              if(exercise.id !== exerciseId){
                                return exercise
                              }
                              })
              this.props.history.push('/validate-user')
          })
          .catch(err => {
            console.log('did not work' , err)
          })
    }

    render(){
      // console.log(this.props.workout[1])
        // const {exerciseName, sets, weights, unit, reps} = this.state.logs
        return(
            <Container>
                      
                {this.props.workout.map((exercise, workoutIndex) => {
                  {/* console.log(exercise) */}
                    return(
                        <TopContainer>
                        <Dropdown 
                        key= {workoutIndex} 
                        onClick = {() => this.dropDownToggler(exercise.id)}
                        //onClick sends the id of the current workout to the selectedValue array, which then is passed
                        //to the conditional below to see if it should render the workout log data
                        >
                            <TitleLeft> 
                                <Arrow 
                                    src = {DropdownArrow}  
                                    //checks to see if id is in selectedValue/selected, then sets the animation prop for it to rotate
                                    rotate= {this.state.selectedValue.includes(exercise.id)? this.state.selectedValue.includes(exercise.id) : null}
                                    alt = "arrow"
                                />
                                <Text> {exercise.name}</Text>
                            </TitleLeft>
                            <Text> {this.props.workout.length} Exercises</Text>
                        </Dropdown>
                        <PutDelete> 
                          {
                            //Edit Button toggler that still needs to be functional.
                            /* <EditButton onClick={this.editHandler(exercise)}>
                          <EditIcon src={PencilEdit} alt="edit icon" />
                            <ButtonText>EDIT</ButtonText>
                          </EditButton> */}
                          <DeleteButton onClick={this.deleteHandler(exercise.id)}>
                            <DeleteText >DELETE</DeleteText>
                          </DeleteButton>
                        </PutDelete>
                        {
                            //checks to see if the mappped id is is included in the selectedValue state to render 
                            //workout log data.
                            this.state.selectedValue.includes(exercise.id) ?
                            exercise.sets.map((sets, index) => {
                              if(exercise.id === sets["exercise_id"]){   
                                return(
                                    <>

                                    <DropDownInfo 
                                        weight = {sets.weight} 
                                        thisIndex = {index+1} 
                                        reps = {sets.reps}
                                        //type checks to see if cardio key is in mapped object
                                        //it passes a true prop to render the distance data
                                        workout_type = {sets.distance === null ? true : false }
                                        distanceUnits = {this.state.distanceUnits}
                                        distance = { sets.distance }
                                        unit = {sets.distance_units}
                                        />
                                    </>
                                )}
                        })
                        : null
                        }

                    
                        </TopContainer>
                    )
                })}
            </Container>
        )
    }
}

const Container = styled.div `
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
`
const TopContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
`
const Dropdown = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #636774;
    padding: 20px 0;;
    &:hover {
        cursor: pointer;
    }
`
const PutDelete = styled.div `
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 5px;
`
const Arrow = styled.img`
    padding: 0 5px;
    float: right;
   transform: rotate(0deg);
   overflow: hidden;
   transition: all 0.3s ease-out;
   transform: ${props => (props.rotate ? `rotate(90deg)` : "")};
    ${'' /* checks to see if props are passed to the css to determine if it will rotate button */}
`
const TitleLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const TitleText = styled.p`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #03A3F3;
    text-transform: uppercase;
`
const Text = styled.p`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
    text-transform: uppercase;
`
const EditIcon = styled.img`
  display: flex;
  align-items: center;
  width: 1.3rem;
`;
const ButtonText = styled.p`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: white;
`;
const DeleteText = styled.p`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: white;
`;
const EditButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 6px;
  padding: 7px 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70px;
  margin: 0 5px;

  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
const DeleteButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 6px;
  padding: 7px 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  margin: 0 5px;

  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
const Button = styled.button`
  background: linear-gradient(#2fdde4, #2367ff);
  color: white;
  font-size: 24px;
  line-height: 23px;
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  padding: 7px 15px;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

export default withRouter(DropdownLogs);
