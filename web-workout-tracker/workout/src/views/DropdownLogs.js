import React from 'react'
import styled from "styled-components";
import DropdownArrow from '../assets/icons/DropdownArrow.svg'
import DropDownInfo from './DropDownInfo'

class DropdownLogs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            //DUMMY Data
            logs: [
                {
                    exerciseName: "Bench Press",
                    sets: [
                        {
                            id: 0,
                            weight: 160,
                            reps: 14
                        },
                        {
                            id: 1,
                            weight: 160,
                            reps: 14
                        },
                        {
                            id: 2,
                            weight: 160,
                            reps: 14
                        }
                    ]

                },
                {
                    exerciseName: "DB Incline Press",
                    sets: [
                        {
                            id: 1,
                            weight: 180,
                            reps: 9
                        },
                        {
                            id: 2,
                            weight: 180,
                            reps: 9
                        },
                        {
                            id: 3,
                            weight: 180,
                            reps: 9
                        }
                    ]
                },
                {
                    exerciseName: "DB Flyers",
                    sets: [
                        {
                            id: 1,
                            weight: 205,
                            reps: 11
                        },
                        {
                            id: 2,
                            weight: 205,
                            reps: 11
                        },
                        {
                            id: 3,
                            weight: 205,
                            reps: 11
                        }
                    ]
                },
                {
                    exerciseName: "Treadmill",
                    sets: [
                        {
                            id: 1,
                            weight: 205,
                            reps: 10
                        },
                        {
                            id: 2,
                            weight: 205,
                            reps: 10
                        },
                    ]
                },
            ],
            //Units would set to proper units when pulled from backend
            unit: 'lbs',
            selectedValue: [],
            //Rotate helps check to see if the arrow image would roatate when clicked
            rotate: false
        }
    }

    dropDownToggler = (workoutIndex) => {
        //checks to see if selectedValue state already includes the passed index
        this.state.selectedValue.includes(workoutIndex)?
        //if the passed id is already in selectedValue state, it removes it, and sets rotate to
        //false. That way it tells the conditionals to not show that id workout log
        //data and rotate the arrow back to its original position.
            this.setState({
                selectedValue: [this.state.selectedValue.slice(workoutIndex)],
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

    render(){
        // const {exerciseName, sets, weights, unit, reps} = this.state.logs
        return(
            <Container>
                {this.state.logs.map((workout, workoutIndex) => {
                    console.log(this.state.selectedValue)
                    return(
                        <>
                        <Dropdown 
                        key= {workoutIndex} 
                        onClick = {() => this.dropDownToggler(workoutIndex)}
                        //onClick sends the id of the current workout to the selectedValue array, which then is passed
                        //to the conditional below to see if it should render the workout log data
                        >
                            <TitleLeft> 
                                <Arrow 
                                    src = {DropdownArrow}  
                                    //checks to see if rotate state is true, then sets the animation prop for it to rotate
                                    rotate= {this.state.selectedValue.includes(workoutIndex)? this.state.rotate : null}
                                    alt = "arrow"
                                />
                                <Text> {workout.exerciseName}</Text>
                            </TitleLeft>
                            <Text> {workout.sets.length} Excercises</Text>
                        </Dropdown>
                        {
                            //checks to see if the mappped id is is included in the selectedValue state to render 
                            //workout log data.
                            this.state.selectedValue.includes(workoutIndex) ? 
                            workout.sets.map((set, index) => {
                                return(
                                    <DropDownInfo 
                                        set = {set} 
                                        key = {index} 
                                        unit = {this.state.unit}
                                        />
                                )
                        })
                            : null
                        }

                    
                        </>
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
`
const Dropdown = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #636774;
    margin: 15px 0;
    padding: 20px 0;
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
`
const Text = styled.p `
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
    text-transform: uppercase;
`

export default DropdownLogs;