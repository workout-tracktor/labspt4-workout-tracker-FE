import React from "react";
import Profile from "../Profile";
import styled from "styled-components";
import ProfileIcon from "./ProfileIcon.png";
import { connect } from "react-redux";
import Logout from "./Logout";
import axios from "axios";
import { sendUserData } from '../../actions';


class UserSettings extends React.Component {
  state = {
    metric: false,
    us: true
  }

  componentDidMount(props) {
    if(this.props.thisUser.unit_system === "metric") {
      this.setState({metric: true, us: false});
    }
  }

  toOnboarding = props => {
    this.props.history.push("/change-body-goal");
  };

  handleCheckBoxClick = () => {
    this.setState({
      metric: !this.state.metric,
      us: !this.state.us
    });
  } 

  updateUser = units => {
    axios
        .put("https://workouttrackerprod.herokuapp.com/api/user", { user_id: this.props.thisUser.user_id, unit_system: units })
        .then(res => {
            // save updated user object in Redux store (state.thisUser)
            this.props.sendUserData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
  }

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
        <GoalHeaderWrapper>
          <Span>Goal</Span>
          <Edit onClick={this.toOnboarding}>Edit</Edit>
        </GoalHeaderWrapper>

        <GoalValueDiv>{this.props.thisUser.body_goal}</GoalValueDiv>
      </Div>

      <Div  onClick={this.update_active_setting}>
        <Span className="title">Units</Span>
        <Unit>
          <UnitDiv className="unit-types" onChange={() => this.updateUser("standard")}>
            <Input
              type="radio"
              name="unit-type"
              value="us"
              id="us"
              checked={this.state.us}
              onClick={this.handleCheckBoxClick}
            ></Input>
            <Label htmlFor="us">US Standard</Label>
          </UnitDiv>

          <UnitDiv onChange={() => this.updateUser("metric")}>
            <Input
              type="radio"
              name="unit-type"
              value="metric"
              id="metric"
              checked={this.state.metric}
              onClick={this.handleCheckBoxClick}
            ></Input>
            <Label htmlFor="metric">Metric</Label>
          </UnitDiv>
        </Unit>
      </Div>

      <LogoutDiv>
        <Logout />
      </LogoutDiv>
    </Section>
  );
}

const Section = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 10px 20px;
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
const GoalValueDiv = styled.div`
  color: white;
  font-family: Roboto Condensed;
  font-style: normal;
  font-size: 16px;
  margin-right: 10px;
`;

// quick workaround for edit feature
const GoalHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Edit = styled.p`
  color: #03a3f3;
  font-family: Roboto Condensed;
  font-style: normal;
  font-size: 10px;
  border: 1px solid #03a3f3;
  border-radius: 3px;
  margin-left: 10px;
  padding: 3px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }
`;

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
const LogoutDiv = styled.div``;

const mapStateToProps = state => {
  return {
    // it's saved data for particular user
    thisUser: state.thisUser,
    // it's a temporary storage for on boarding page purposes
    bodyGoal: state.bodyGoal,
    units: state.units
  };
};
export default connect(mapStateToProps, {sendUserData})(UserSettings);
