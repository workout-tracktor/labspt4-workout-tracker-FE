import React from "react";
// import { useAuth0 } from "../react-auth0-wrapper"
import Profile from "../Profile";
import styled from "styled-components";
import ProfileIcon from "./ProfileIcon.png";

class UserSettings extends React.Component {
  state = {
    goal: ""
  };

  render = () => (
    <Section>
      <Header>
        <Img src={ProfileIcon} alt="profileIcon" />
        <ProfileHeading>USER PROFILE</ProfileHeading>
      </Header>

      <ProfileDiv>
        <Profile />
      </ProfileDiv>

      <Div>
        <Span>Goal</Span>

        <GoalValueDiv>{this.state.goal}</GoalValueDiv>
      </Div>

      <Div onClick={this.update_active_setting}>
        <Span className="title">Units</Span>
        <Unit>
          <UnitDiv className="unit-types">
            <Input type="radio" name="unit-type" value="us" id="us"></Input>
            <Label htmlFor="us">US Standard</Label>
          </UnitDiv>

          <UnitDiv>
            <Input
              type="radio"
              name="unit-type"
              value="metric"
              id="metric"
              defaultChecked
            ></Input>
            <Label htmlFor="metric">Metric</Label>
          </UnitDiv>
        </Unit>
      </Div>
    </Section>
  );
}

const Section = styled.div`
  width: 375px;
  margin: auto 0;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px;
`;
const Img = styled.img`
  margin-right: 10px;
`;
const ProfileHeading = styled.h2`
  color: white;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`;
const ProfileDiv = styled.div``;
const Span = styled.span`
  color: white;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;
const GoalValueDiv = styled.div``;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: 10px;
  border-bottom: 1px solid rgba(88, 91, 95, 0.2);
`;

const Unit = styled.div`
  display: flex;
  align-items: center;
`;
const UnitDiv = styled.div`
  margin-right: 20px;
`;

const Input = styled.input``;
const Label = styled.label`
  color: white;
  font-family: Roboto Condensed;
  font-style: normal;
  font-size: 16px;
  margin-left: 5px;
`;

export default UserSettings;
