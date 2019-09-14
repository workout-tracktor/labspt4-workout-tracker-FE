import React from 'react'
import styled from "styled-components";

class DropDownInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <Row>
                <GrayText> Set {this.props.set.id}</GrayText>
                <Text> {this.props.set.weight} {this.props.unit}</Text>
                <GrayText> X </GrayText>
                <Text>{this.props.set.reps} reps</Text>
            </Row>
            )
    }
}

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

export default DropDownInfo