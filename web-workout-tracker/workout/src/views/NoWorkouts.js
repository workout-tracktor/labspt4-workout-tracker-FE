import React from "react";
import styled from "styled-components";
//moment is used to get the time and set AM or PM
import moment from 'moment';
import emoji from '../assets/images/ThinkingEmoji.svg'

let monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

class NoWorkouts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            month: ``,
            date: ``,
            year: ``,
            time: ``
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

render() {
    return(
        <Container>
            <Title> 
                <TitleText> {this.state.month} {this.state.date},  {this.state.year}</TitleText>
                <TitleText>{this.state.time}</TitleText>
            </Title>
            <NoWorkout> 
                <img src = {emoji} alt = 'thinking emoji' />
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
    width: 600px;
    margin: 0 20px ;
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
export default NoWorkouts;