// src/components/NavBar.js

import React from "react";
<<<<<<< Updated upstream
import {useAuth0} from "../components/auth0-wrapper";

import {Link} from "react-router-dom";
=======
import { useAuth0 } from "../components/auth0-wrapper";
import styled from "styled-components";
import { Link } from "react-router-dom";
import liftQuestTitle from "../assets/images/LiftQuestTitle.png";
import GearIcon from "../assets/icons/Gear.svg";
import PersonIcon from "../assets/icons/Person.svg";

import Button from "../components/Button";
>>>>>>> Stashed changes

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

<<<<<<< Updated upstream
    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

            {isAuthenticated && (
                <span>
                    <Link to="/profile">Profile</Link>
                    <Link to="/user-settings">Settings</Link>
                    <Link to='/input-workout'>Input Workout</Link>

        </span>
=======
  return (
    <div>
      {!isAuthenticated && (
        <Container>
          <img src={liftQuestTitle} alt="liftquest" />
          <Button
            onClick={() => loginWithRedirect({})}
            color={"white"}
            background={" linear-gradient(#2FDDE4, #2367FF)"}
            text={"LOGIN"}
          />
        </Container>
      )}

      {isAuthenticated && (
        <Nav>
          <Link to="/">
            {" "}
            <Logo src={liftQuestTitle} />{" "}
          </Link>
          <RightNav>
            <Link to="/user-settings">
              <NavText>
                <Gear src={GearIcon} alt="gear" />
                SETTINGS
              </NavText>
            </Link>
            {isAuthenticated && (
              <LogoutContainer>
                <Person src={PersonIcon} alt="person" />
                <NavText onClick={() => logout()}>LOGOUT</NavText>
              </LogoutContainer>
>>>>>>> Stashed changes
            )}
          </RightNav>
        </Nav>
      )}
    </div>
  );
};

<<<<<<< Updated upstream
=======
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
  padding: 10px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Logo = styled.img`
  width: 20rem;
`;
const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Gear = styled.img`
  margin: 5px;
`;
const Person = styled.img`
  margin: 5px;
`;
const NavText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;
const LogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 8px;
  &:hover {
    cursor: pointer;
  }
`;

>>>>>>> Stashed changes
export default NavBar;
