import React from 'react'
import styled from "styled-components";
import DropdownArrow from '../assets/icons/DropdownArrow.svg'
import DropDownInfo from './DropDownInfo'
import { withRouter } from "react-router-dom";
import PencilEdit from "../assets/icons/PencilEdit.svg";

class DropdownLogs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            //DUMMY Data
            //Units would set to proper units when pulled from backend
            unit: 'lbs',
            distanceUnits: 'miles',
            selectedValue: [],
            //Rotate helps check to see if the arrow image would roatate when clicked WIP
            rotate: false,
            Workouts: [],
            editInfo: false,
        }
    }

    componentDidMount(){
        //Notifies parent component to change the titling to include Edit button.
        this.props.titleToggler(true)
    }

    dropDownToggler = (workoutIndex) => {
        //checks to see if selectedValue state already includes the passed index
        this.state.selectedValue.includes(workoutIndex)?
        //if the passed id is already in selectedValue state, it removes it, and sets rotate to
        //false. That way it tells the conditionals to not show that id workout log
        //data and rotate the arrow back to its original position.
            this.setState({
                selectedValue: this.state.selectedValue.filter( function(data) {
                    return data !== workoutIndex
                }),
                rotate: !this.state.rotate, 
            })
            : 
        //if passed id is not in selectedValue state, then it add it to that array,
        //which then lets the conditional know to render that workout log data.
        //it also sets rotate to true, so it passes a prop to properly animate arrow image.
            this.setState({
                selectedValue: [...this.state.selectedValue, workoutIndex], 
                rotate: !this.state.rotate, 
            })
    }

    editHandler = workout => e =>{
        e.preventDefault()
        this.props.history.push({
         pathname:   `/exercise-form/${workout.workoutType}`,
         workout: workout
        })
    }

    deleteHandler = exerciseId => {
        console.log('Wait for backend to resolve GET to get the exercise ID to delete')
        // axios.put(`https://workouttrackerprod.herokuapp.com/api/exercises?user_id=${user_id}`, exerciseId)
    }

    render(){
        // const {exerciseName, sets, weights, unit, reps} = this.state.logs
        return(
            <Container>
                      
                {this.props.workout.map((workout, workoutIndex) => {
                    return(
                        <TopContainer>
                        <Dropdown 
                        key= {workoutIndex} 
                        onClick = {() => this.dropDownToggler(workoutIndex)}
                        //onClick sends the id of the current workout to the selectedValue array, which then is passed
                        //to the conditional below to see if it should render the workout log data
                        >
                            <TitleLeft> 
                                <Arrow 
                                    src = {DropdownArrow}  
                                    //checks to see if id is in selectedValue/selected, then sets the animation prop for it to rotate
                                    rotate= {this.state.selectedValue.includes(workoutIndex)? this.state.selectedValue.includes(workoutIndex) : null}
                                    alt = "arrow"
                                />
                                <Text> {workout.name}</Text>
                                <EditButton onClick={this.editHandler(workout)}>
                                <EditIcon src={PencilEdit} alt="edit icon" />
                                <ButtonText>EDIT</ButtonText>
                                </EditButton>

                                <EditButton onClick={this.deleteHandler(
                                    //When GET is functional from backend, insert the exerciseId
                                    // exerciseId
                                    )}>
                                <ButtonText>DELETE</ButtonText>
                                </EditButton>

                            </TitleLeft>
                            <Text> {workout.set.length} Excercises</Text>
                        </Dropdown>
                        {
                            //checks to see if the mappped id is is included in the selectedValue state to render 
                            //workout log data.
                            this.state.selectedValue.includes(workoutIndex) ?
                            workout.set.map((sets, index) => {
                                return(
                                    <>
                                    <DropDownInfo 
                                        
                                        weight = {sets[`weight${index}`]} 
                                        thisIndex = {index+1} 
                                        reps = {sets[`rep${index}`]}
                                        //type checks to see if distance key is in mapped object
                                        //it passes a true prop to render the distance data
                                        type = {sets[`distance${index}`] ? false : true }
                                        distanceUnits = {this.state.distanceUnits}
                                        distance = { sets[`distance${index}`] }
                                        unit = {this.state.unit}
                                        />
                                    </>
                                )
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
const TopContainer = styled.div `
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
`
const Dropdown = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #636774;
    padding: 20px 0;
    &:hover {
        cursor: pointer;
    }
`
const Arrow = styled.img `
    padding: 0 5px;
    float: right;
   transform: rotate(0deg);
   overflow: hidden;
   transition: all 0.3s ease-out;
   transform: ${props => (props.rotate ? `rotate(90deg)` : "")};
    ${'' /* checks to see if props are passed to the css to determine if it will rotate button */}
`
const TitleLeft = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const TitleText = styled.p `
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #03A3F3;
    text-transform: uppercase;
` 
const Text = styled.p `
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