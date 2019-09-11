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

      <GoalDiv>
        <GoalSpan>Goal</GoalSpan>

        <GoalValueDiv>{this.state.goal}</GoalValueDiv>
      </GoalDiv>

      <MeasurementDiv onClick={this.update_active_setting}>
        <UnitSpan className="title">Units</UnitSpan>

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
      </MeasurementDiv>
    </Section>
  );
}

const Section = styled.div``;
const Header = styled.div`
  display: flex;

  margin: 10px;
`;
const Img = styled.img`
  margin: 5px;
`;
const ProfileHeading = styled.h2`
  color: white;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;
const ProfileDiv = styled.div``;
const GoalDiv = styled.div``;
const GoalSpan = styled.h2``;
const GoalValueDiv = styled.div``;

const MeasurementDiv = styled.div``;
const UnitSpan = styled.h2``;
const UnitDiv = styled.div``;
const Input = styled.input``;
const Label = styled.label``;

export default UserSettings;
