import React from 'react'
import styled from "styled-components";
import DropdownArrow from '../assets/icons/DropdownArrow.svg'

class DropdownLogs extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <Container>
                <Dropdown>
                    <Arrow src = {DropdownArrow} alt = "arrow"/>

                </Dropdown>
            </Container>
        )
    }
}

const Container = styled.div `
    display: flex;
      flex-direction: column;
      align-items: center;
`
const Arrow = styled.img `
    
`

export default DropdownLogs;