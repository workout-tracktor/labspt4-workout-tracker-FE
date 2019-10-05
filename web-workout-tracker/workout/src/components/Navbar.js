// src/components/NavBar.js
import React from "react";
import {useAuth0} from "../components/auth0-wrapper";
import styled from "styled-components";
import {Link} from "react-router-dom";
import liftQuestTitle from '../assets/images/LiftQuestTitle.png'
import GearIcon from '../assets/icons/Gear.svg'
import plus from '../assets/icons/Plus.svg'
import PersonIcon from '../assets/icons/Person.svg'
import Button from '../components/Button'

const NavBar = (props) => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <div>
            {!props.Registered && isAuthenticated &&(
                <Nav >
                    <img src = {liftQuestTitle} alt = 'liftquest'/>
                    <LogoutContainer>
                            <NavText 
                                    onClick={() => logout()}
                                >
                                <Person src = {PersonIcon} alt= 'person'/>
                                    LOGOUT
                                </NavText>

                            </LogoutContainer>
                </Nav>
            )}


            {!isAuthenticated && (
                <Nav 
                onClick={() => loginWithRedirect({})} >
                    <div> 
                        <img src = {liftQuestTitle} alt = 'liftquest'/>
                    </div>
                    <Button 
                        color = {'white'}
                        background = {' linear-gradient(#2FDDE4, #2367FF)'}
                        text = {"LOGIN"}
                        />
                </Nav>
            )}

            {isAuthenticated && props.Registered && (
                <Nav>
                        <Link to="/"> <Logo src = {liftQuestTitle}/> </Link>
                    <RightNav>
                        <AddWorkoutContainer> 
                        <Link to="/workout-form">
                            <WorkoutButton >
                                <Plus src = {plus} alt= 'plus' />
                                <ButtonText> 
                                    NEW WORKOUT
                                </ButtonText>
                            </WorkoutButton>
                        </Link>
                        </AddWorkoutContainer> 
                        <Link to="/user-settings" >
                        <NavText> 
                            <Gear src = {GearIcon} alt= 'gear'/>
                            <SettingText> SETTINGS </SettingText>
                        </NavText>
                        </Link>
                        {isAuthenticated && 
                            <LogoutContainer>
                            <NavText 
                                    onClick={() => logout()}
                            >
                                <Person src = {PersonIcon} alt= 'person'/>
                            
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

const Nav = styled.span`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 669px) {
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
}  
`
const Logo = styled.img`
    width: 20rem;
    transition: .5s ease; 
    @media (max-width: 669px) {
    width: 14rem;
}  
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
const SettingText = styled.p `
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    @media (max-width: 669px) {
        display: none;
    }
    @media (min-width: 670px) {
        display: block;
    }
`
const LogoutContainer = styled.div`
    @media (max-width: 669px) {
        display: none;
    }
    @media (min-width: 670px) {
        display: block;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 8px;
        &:hover{
            cursor: pointer;
        }
    }
` 
const AddWorkoutContainer = styled.div`
    margin-right: 8px;
` 
const Plus = styled.img`
    width: 2rem;
    display: flex;
    align-items: center;
` 
const WorkoutButton = styled.button`
    background:linear-gradient(#2FDDE4, #2367FF);
    line-height: 23px;
    border: none;
    border-radius: 6px;
    padding: 7px 10px;
    width: 20rem;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    transition: .5s ease; 
    &:hover {
        cursor: pointer;
    }
    &:focus, &:active {
        outline: none;
    };
    @media (max-width: 669px) {
    width: 14rem;
}  
`;
const ButtonText = styled.p `
    font-family: Roboto Condensed, sans-serif;
    font-weight: bold;
    color: white;
    font-size: 18px;
    @media (max-width: 669px) {
        font-size: 14px;
}  
`
export default NavBar;