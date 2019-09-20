import React from "react";
import styled from "styled-components";
import DropdownLogs from './DropdownLogs'

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


            <DropdownLogs />

        </Container>
    )
}
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default WorkoutLogs;