import React from "react";
import styled from "styled-components";
//moment is used to get the time and set AM or PM
import moment from 'moment';
import InputWorkoutForm from "./InputWorkoutForm";
import emoji from '../assets/images/ThinkingEmoji.svg'
import plus from '../assets/icons/Plus.svg'

let monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

class Workouts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            month: ``,
            date: ``,
            year: ``,
            time: ``,
            addWorkout: false
        }
    }


componentDidMount() {
    const d = new Date();
    this.setState({
        month: monthNames[d.getMonth()],
        date: d.getDate(),
        year: d.getFullYear(),
        time: moment().format(`hh:mm a`)
    })
}

addWorkoutToggler = () =>{
    this.setState({addWorkout: !this.state.addWorkout})
}

render() {
    return(
        <Container>
            <Title> 
                <TitleText> {this.state.month} {this.state.date},  {this.state.year}</TitleText>
                <TitleText>{this.state.time}</TitleText>
            </Title>
            
         {   this.state.addWorkout? 
                <InputWorkoutForm />
                :
                <NoWorkout> 
                    <Plus src = {emoji} alt = 'thinking emoji' />
                    <TextContainer>
                        <Text> NO WORKOUTS</Text>
                        <Text> LOGGED TODAY</Text>
                    </TextContainer>    
                </NoWorkout>}
            
            <Button onClick = {this.addWorkoutToggler}>
                <img src = {plus} alt= 'plus' />
                ADD A WORKOUT
            </Button>
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
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0 15px 0;
    border-bottom: 1px solid gray;
`

const TitleText = styled.p`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
`
const NoWorkout = styled. div`
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
const Button = styled.button`
    background:linear-gradient(#2FDDE4, #2367FF);
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

    &:hover {
        cursor: pointer;
    }
    &:focus, &:active {
        outline: none;
    };
`;

export default Workouts;