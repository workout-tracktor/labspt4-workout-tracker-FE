import React from "react";
import styled from "styled-components";
import emoji from '../assets/images/ThinkingEmoji.svg'

class NoWorkouts extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        //Notifies parent component to keep the default titling.
        this.props.titleToggler(false)
    }

    render(){
        return(
            <Container>
                <NoWorkout> 
                <Plus src = {emoji} alt = 'thinking emoji' />
                    <TextContainer>
                        <Text> NO WORKOUTS</Text>
                        <Text> LOGGED TODAY</Text>
                    </TextContainer>    
                </NoWorkout>
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
const NoWorkout = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px auto;
`
const Text = styled.p `
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: gray;
`
const Plus = styled.img`
    display: flex;
    justify-content: flex-start;
` 

export default NoWorkouts;