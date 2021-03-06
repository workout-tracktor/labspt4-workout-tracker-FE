// View for the first step of on boarding process (user is choosing a body goal). If user is skiping on boarding, we're automatially setting units to US system, but body goal remain blank

import React from "react"
import styled from "styled-components";

// Redux
import { connect } from "react-redux";
import { sendUserData, sendUserGoal } from '../actions';

import axios from "axios";

import OnboardingHeader from "../components/OnboardingHeader";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Button from "../components/Button";

import data from "../assets/data/ButtonWithBackgroundData.js";
import TrophyIcon from "../assets/icons/Trophy.svg";
import CheckMark from "../assets/icons/CheckMark.svg";

// this export is for testing purposes
export class BodyGoal extends React.Component {
    state= {
        goal: "",
        buttonPressed: false
    }
    
    clickOptionHandler = (goal) => {
        this.setState({ goal, buttonPressed: true });
        this.props.sendUserGoal(goal);
    }
    // eventListener for the window, hide Select button when user isn't pressing on body options or Select button itself
    hideSelectButton(e) {
        if(e.target.dataset.testid !== "body-goal" || e.target.dataset.txt === "Select") {
            this.setState({ buttonPressed: false });
        }
        if(e.target.dataset.txt === "I'll do this later") {
            this.props.history.push("/Landing");
        }
    }

    // If user is skipping onboarding process, we're setting default unit as standard (meaning US system) 
    setDefaultUnits = () => {
        axios
        .put("https://workouttrackerprod.herokuapp.com/api/user", { user_id: localStorage.getItem('user_id'), unit_system: "standard" })
        .then(res => {
            // save updated user object in Redux store (state.thisUser)
            this.props.sendUserData(res.data);
            // go to the next on boarding screen (choose default units)
            this.props.history.push("/validate-user");
        })
        .catch(err => {
            console.log(err);
            this.props.history.push("/onboarding/body-goal");
        })
    }

    setGoal = (e, props) => {
        axios
            .put("https://workouttrackerprod.herokuapp.com/api/user", { user_id: localStorage.getItem('user_id'), body_goal: this.props.bodyGoal })
            .then(res => {
                // save updated user object in Redux store (state.thisUser)
                this.props.sendUserData(res.data);
                // go to the next on boarding screen (choose default units)
                this.props.history.push("/onboarding/choose-units");
            })
            .catch(err => {
                console.log(err);
                this.props.history.push("/onboarding/body-goal");
            })
    }

    render() {
        return (
            <PageWrapper onClick={ e => this.hideSelectButton(e)}>
                {/* Reusable header component (Icon + text). Props: icon source(=url) and text(=text) */}

                <OnboardingHeader url={TrophyIcon} text="What's your goal?" />

                {/* Reusable button with background component (background image + text). Needs props for text and image source, onClick and onBlur change filter, onClick also saves goal to state 
                */}
                {/* url prop is for desktop/tablet, urlMobile for mobile only */}

                <OptionsWrapper>
                    {data.data.map(elem =>
                        <ButtonWithBackground key={elem.id} url={elem.url} urlMobile={elem.urlMobile} icon={CheckMark} text={elem.text} onClick={this.clickOptionHandler} opacity={this.state.buttonPressed ? "0.3" : "0.7"} gradient={!this.state.buttonPressed ? "rgba(22, 26, 41, 0.5)" : "transparent"} />
                    )}
                </OptionsWrapper>
                
                <ButtonsWrapper>
                     {/* Skip on boarding Button*/}
                    <Button text="I'll do this later" background="transparent" padding="7px 0px" onClick={this.setDefaultUnits} />

                    {/* "Select" Button*/}
                    {
                        this.state.buttonPressed && <Button text="Select" justify="center" onClick={this.setGoal} />
                    }
                </ButtonsWrapper>

            </PageWrapper>
        )
    }
}

const mapStateToProps = state => ({
    bodyGoal: state.bodyGoal,
    thisUser: state.thisUser
});

const PageWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const OptionsWrapper = styled.div`
    width: 90%;
    max-width: 510px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const ButtonsWrapper = styled.div`
    width: 90%;
    max-width: 510px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;


export default connect(mapStateToProps, {sendUserData, sendUserGoal})(BodyGoal);