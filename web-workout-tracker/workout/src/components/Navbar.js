// src/components/NavBar.js

import React from "react";
import {useAuth0} from "../components/auth0-wrapper";
import styled from "styled-components";
import {Link} from "react-router-dom";
import liftQuestTitle from '../assets/images/LiftQuestTitle.png'
import GearIcon from '../assets/icons/Gear.svg'
import PersonIcon from '../assets/icons/Person.svg'

import Button from '../components/Button'

const NavBar = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <Container >
                    <img src = {liftQuestTitle} alt = 'liftquest'/>
                    <Button 
                        onClick={() => loginWithRedirect({})} 
                        color = {'white'}
                        background = {' linear-gradient(#2FDDE4, #2367FF)'}
                        text = {"LOGIN"}
                        />
                </Container>
            )}

            {isAuthenticated && (
                <Nav>
                        <Link to="/"> <Logo src = {liftQuestTitle}/> </Link>
                    <RightNav> 
                        <Link to="/user-settings" >
                        <NavText> 
                            <Gear src = {GearIcon} alt= 'gear'/>
                            SETTINGS
                        </NavText>
                        </Link>
                        {isAuthenticated && 
                            <LogoutContainer>
                                <Person src = {PersonIcon} alt= 'person'/>
                                <NavText 
                                    onClick={() => logout()}
                                >
                                    LOGOUT
                                </NavText>
                            </LogoutContainer>
                        }
                    </RightNav>
                </Nav>
            )}
        </div>
    );
};


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    margin: 0 auto;
    width: 294px;
`;

const Nav = styled.span`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
`

const Logo = styled.img`
    width: 20rem;
` 

const RightNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
const Gear = styled.img`
    margin: 5px;
` 
const Person = styled.img`
    margin: 5px;
` 
const NavText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
`

const LogoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 8px;
    &:hover{
        cursor: pointer;
    }
` 

export default NavBar;
