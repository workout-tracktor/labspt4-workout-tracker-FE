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
            <img src = {emoji} alt = 'thinking emoji' />
        </Container>
    )
  }
}

const Container = styled.div` 
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TitleText = styled.p`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
`

export default NoWorkouts;