import React from "react";
import styled from "styled-components";
import DropdownLogs from './DropdownLogs'
import PencilEdit from '../assets/icons/PencilEdit.svg'

class WorkoutLogs extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    editHandler = () => {
        //Would let user edit data, and send to actions to do an axiosPUT request
    }

render(){
    return (
        <Container>
            <Title>
                <Text> FITTER FASTER FURTHER </Text>
                <Button>
                    <EditIcon 
                        src = {PencilEdit} 
                        alt = 'edit icon'
                        onClick = {this.editHandler}
                        />
                    <ButtonText>EDIT</ButtonText>
                </Button>
            </Title>

            <DropdownLogs />

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
    padding: 0 0 15px 0;
    border-bottom: 1px solid gray;
    
    @media (max-width: 1040px) {
        margin-top: 25px;
        width: 100%;
        justify-content: center;
        
    }  
`

const EditIcon = styled.img `
    display: flex;
    align-items: center;
    width: 1.3rem;
`
const ButtonText = styled.p`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
`
const Text = styled.p `
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #03A3F3;
`
const Button = styled.button`
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 6px;
    padding: 7px 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70px;

    &:hover {
        cursor: pointer;
    }
    &:focus, &:active {
        outline: none;
    };
`

export default WorkoutLogs;