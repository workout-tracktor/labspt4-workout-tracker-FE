import React from 'react'
import styled from "styled-components";

class DropDownInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            weight: this.props.weight,
            reps: this.props.reps,
            distance: this.props.distance,
            workoutId: this.props.workoutId,
            setId: this.props.setId,
            workoutName: this.props.workoutName
        }
    }

     handleChange = async e => {
        e.preventDefault()
        await this.setState({ ...this.state, [e.target.name]: e.target.value})
        let data =  {            
            weight: this.state.weight,
            reps: this.state.reps,
            distance: this.state.distance,
            id: this.state.id,
            workoutId: this.state.workoutId,
            setId: this.state.setId,
            workoutName: this.state.workoutName
        }
        this.props.updatedWorkout(data)
    }
    
    render(){
        return (
           
            <Row>
                {this.props.edit?
                    this.props.type?
                        <>
                        <GrayText> Set {this.props.thisIndex }</GrayText>
                        <Inputs 
                            type = "text" 
                            value = {this.state.weight} 
                            name= "weight" 
                            onChange={this.handleChange}/> 
                        <Text>{this.props.unit}</Text>
                        <GrayText> X </GrayText>
                        <Inputs 
                            type = "text" 
                            value = {this.state.reps}  
                            name = "reps" 
                            onChange={this.handleChange}/> 
                        <Text> reps</Text>
                        </>
                        
                    :
                        <>
                        <GrayText> Distance </GrayText>
                        <Inputs 
                            type = "text" 
                            value = {this.state.distance}  
                            name = "distance" 
                            onChange={this.handleChange}/>
                        <Text> {this.props.distanceUnits}</Text>
                        </>
                :                 
                this.props.type?
                        <>
                        <GrayText> Set {this.props.thisIndex }</GrayText>
                        <Text> {this.props.weight} {this.props.unit}</Text>
                        <GrayText> X </GrayText>
                        <Text>{this.props.reps} reps</Text>
                        </>
                    :
                        <>
                        <GrayText> Distance </GrayText>
                        <Text>{this.props.distance} {this.props.distanceUnits}</Text>
                        </>
                 
                }
            </Row>
            )
    }
}

const Inputs = styled.input `
    display: flex;
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

export default DropDownInfo