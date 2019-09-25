// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../components/auth0-wrapper";
import styled from "styled-components";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div />;
  }

  return (
    <Div>
      <NameDiv>
        <Span>Profile Photo</Span>
        <Img src={user.picture} alt="Profile" />
      </NameDiv>
      <NameDiv>
        <Span>Name</Span>
        <Name>{user.name}</Name>
      </NameDiv>

      <NameDiv>
        <Span>Username</Span>
        <Name>{user.nickname}</Name>
      </NameDiv>

      <NameDiv>
        <Span>Email</Span>
        <Name>{user.email}</Name>
      </NameDiv>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Div>
  );
};

const Div = styled.div``;
const Img = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const Name = styled.p`
  color: white;
  font-family: Roboto Condensed;
  font-style: normal;
  font-size: 16px;
`;

const Span = styled.span`
  color: white;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;
const NameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: 10px;
  border-bottom: 1px solid rgba(88, 91, 95, 0.2);
`;

export default Profile;
