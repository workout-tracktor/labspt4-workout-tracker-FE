import React from "react";
import PersonIcon from "../../assets/icons/Person.svg";
import { useAuth0 } from "../../components/auth0-wrapper";
import styled from "styled-components";

const Logout = props => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      {isAuthenticated && (
        <LogoutContainer>
          <NavText onClick={() => logout()}>
            <Person src={PersonIcon} alt="person" />
            LOGOUT
          </NavText>
        </LogoutContainer>
      )}
    </div>
  );
};

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
    &:hover {
      cursor: pointer;
    }
  }
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

export default Logout;
