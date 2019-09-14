import React from 'react'
import styled from "styled-components";
import DropdownArrow from '../assets/icons/DropdownArrow.svg'

class DropdownLogs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            logs: [
                {
                    exerciseName: "Bench Press",
                    sets: [
                        {
                            weight: 160,
                            reps: 14
                        },
                        {
                            weight: 160,
                            reps: 14
                        },
                        {
                            weight: 160,
                            reps: 14
                        }
                    ]

                },
                {
                    exerciseName: "DB Incline Press",
                    sets: [
                        {
                            weight: 180,
                            reps: 9
                        },
                        {
                            weight: 180,
                            reps: 9
                        },
                        {
                            weight: 180,
                            reps: 9
                        }
                    ]
                },
                {
                    exerciseName: "DB Flyers",
                    sets: [
                        {
                            weight: 205,
                            reps: 11
                        },
                        {
                            weight: 205,
                            reps: 11
                        },
                        {
                            weight: 205,
                            reps: 11
                        }
                    ]
                },
                {
                    exerciseName: "Treadmill",
                    sets: [
                        {
                            weight: 205,
                            reps: 10
                        },
                        {
                            weight: 205,
                            reps: 10
                        },
                        {
                            weight: 205,
                            reps: 10
                        }
                    ]
                },
            ],
            unit: 'lbs',
            openLogs: false,
            selectedValue: '',
            rotate: false
        }
    }

    dropDownToggler = (i) => {
        this.setState({selectedValue: i, rotate: !this.state.rotate, openLogs: !this.state.openLogs})
    }
    render(){
        // const {exerciseName, sets, weights, unit, reps} = this.state.logs
        return(
            <Container>
            {this.state.logs.map((workout, i) => {
                return(
                    <>
                    <Dropdown key= {i} onClick = {() => this.dropDownToggler(i)}>
                        <TitleLeft> 
                            <Arrow 
                                src = {DropdownArrow}  
                                rotate= {i === this.state.selectedValue? this.state.rotate : null}
                                alt = "arrow"
                            />
                            <Text> {workout.exerciseName}</Text>
                        </TitleLeft>
                        <Text> {workout.sets.length} Excercises</Text>
                    </Dropdown>
                    {this.state.openLogs? 
                     i === this.state.selectedValue? 
                        this.state.logs[this.state.selectedValue].sets.map((set, i) => {
                            return(
                                <Row>
                                    <GrayText> Set {i + 1}</GrayText>
                                    <Text> {set.weight} {this.state.unit}</Text>
                                    <GrayText> X </GrayText>
                                    <Text>{set.reps} reps</Text>
                                </Row>
                                )
                            })
                    : null

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
const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0;
`
const GrayText = styled.p `
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #636774;
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

export default DropdownLogs;