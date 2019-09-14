import React from "react";
import styled from "styled-components";
//moment is used to get the time and set AM or PM
import WorkoutLogs from "./WorkoutLogs";
import NoWorkouts from "./NoWorkouts";



class Workouts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            //Boolean to switch if the user does have a workout logged
            workout: false
        }
    }

render() {
    return(
        <Container>
         { !this.state.workout? <WorkoutLogs /> : <NoWorkouts /> }
        </Container>
    )
  }
}

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: 'space-around';
    width: 600px;
    margin: 0 20px ;
    height: 100%;
    
    @media (max-width: 1040px) {
        width: 100%; 
    }  

`

export default Workouts;