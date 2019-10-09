import React from "react";
import PersonIcon from "../../assets/icons/Person.svg";
import { useAuth0 } from "../../components/auth0-wrapper";
import styled from "styled-components";

const Logout = props => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <LogoutDiv>
      {isAuthenticated && (
        <LogoutContainer>
          <NavText onClick={() => logout()}>
            <Person src={PersonIcon} alt="person" />
            LOGOUT
          </NavText>
        </LogoutContainer>
      )}
    </LogoutDiv>
  );
};

const LogoutDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin: 10px;
  border-bottom: 1px solid rgba(88, 91, 95, 0.2);

  display: none;

  @media (max-width: 570px) {
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

const LogoutContainer = styled.div``;

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
  font-size: 20px;
`;

export default Logout;
