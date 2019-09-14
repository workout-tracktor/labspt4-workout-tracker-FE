import React from 'react'
import styled from "styled-components";
import DropdownArrow from '../assets/icons/DropdownArrow.svg'
import DropDownInfo from './DropDownInfo'

class DropdownLogs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
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
            unit: 'lbs',
            openLogs: false,
            selectedValue: [],
            rotate: false
        }
    }

    dropDownToggler = (workoutIndex) => {
        this.state.selectedValue.includes(workoutIndex)?
            this.setState({
                selectedValue: [this.state.selectedValue.slice(workoutIndex)]
            })
            : 
            this.setState({
                selectedValue: [...this.state.selectedValue, workoutIndex], 
                rotate: !this.state.rotate, 
                openLogs: !this.state.openLogs
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
                    <Dropdown key= {workoutIndex} onClick = {() => this.dropDownToggler(workoutIndex)}>
                        <TitleLeft> 
                            <Arrow 
                                src = {DropdownArrow}  
                                // rotate= {this.state.selectedValue.find(place => place === workoutIndex)? this.state.rotate : null}
                                alt = "arrow"
                            />
                            <Text> {workout.exerciseName}</Text>
                        </TitleLeft>
                        <Text> {workout.sets.length} Excercises</Text>
                    </Dropdown>
                    {
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