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
        buttonPressed: false,
        user_id: ""
    }
    componentDidMount() {
        const id = localStorage.getItem("user_id");
        this.setState({user_id: id});
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

    setGoal = (e, props) => {
        axios
            .put("https://workouttrackerprod.herokuapp.com/api/user", { user_id: this.state.user_id, body_goal: this.props.bodyGoal })
            .then(res => {
                this.props.sendUserData(res.data);
                localStorage.setItem("body_goal", res.data.body_goal);
                this.props.history.push("/Landing");
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

                {/* onBlur event occurs when component lose focus */}
                <OptionsWrapper>
                    {data.data.map(elem =>
                        <ButtonWithBackground key={elem.id} url={elem.url} urlMobile={elem.urlMobile} icon={CheckMark} text={elem.text} onClick={this.clickOptionHandler} opacity={this.state.buttonPressed ? "0.3" : "0.7"} gradient={!this.state.buttonPressed ? "rgba(22, 26, 41, 0.5)" : "transparent"} />
                    )}
                </OptionsWrapper>
                
                <ButtonsWrapper>
                    {/* @TO-DO: Uncomment button element below (possibility to skip onboarding when it grows in next versions of the app)? */}
                    <Button text="I'll do this later" background="transparent" padding="7px 0px" />

                    {/* "Select" Button
                    @TO-DO: For Canvas 1 it's the only screen for on boarding, so SELECT button will be === SUBMIT button. And onSubmit events which saves body goal in the db and change it in Redux store and then redirects to the right page
                    */}
                    {
                        this.state.buttonPressed && <Button text="Select" setGoal={this.setGoal} />
                    }
                </ButtonsWrapper>

            </PageWrapper>
        )
    }
}

const mapStateToProps = state => ({
    bodyGoal: state.bodyGoal
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