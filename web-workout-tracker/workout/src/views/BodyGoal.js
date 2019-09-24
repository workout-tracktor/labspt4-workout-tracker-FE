import React from "react"
import styled from "styled-components";

// Redux
import { connect } from "react-redux";
import { updateUser } from '../actions';

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
    }
    handleBlur = () => {
        this.setState({ buttonPressed: false });
    }

    render() {
        return (
            <PageWrapper>
                {/* Reusable header component (Icon + text). Props: icon source(=url) and text(=text) */}

                <OnboardingHeader url={TrophyIcon} text="What's your goal?" />

                {/* Reusable button with background component (background image + text). Needs props for text and image source, onClick and onBlur change filter, onClick also saves goal to state 
                */}
                {/* url prop is for desktop/tablet, urlMobile for mobile only */}

                {/* onBlur event occurs when component lose focus */}
                <OptionsWrapper>
                    {data.data.map(elem =>
                        <ButtonWithBackground key={elem.id} url={elem.url} urlMobile={elem.urlMobile} icon={CheckMark} text={elem.text} onClick={() => this.clickOptionHandler(elem.text)} onBlur={this.handleBlur} opacity={this.state.buttonPressed ? "0.3" : "0.7"} gradient={!this.state.buttonPressed ? "rgba(22, 26, 41, 0.5)" : "transparent"} />
                    )}
                </OptionsWrapper>
                
                <ButtonsWrapper>
                    {/* @TO-DO: Uncomment button element below (possibility to skip onboarding when it grows in next versions of the app)? */}
                    <Button text="I'll do this later" background="transparent" padding="7px 0px" />

                    {/* "Select" Button
                    @TO-DO: For Canvas 1 it's the only screen for on boarding, so SELECT button will be === SUBMIT button. And onSubmit events which saves body goal in the db and change it in Redux store and then redirects to the right page
                    */}
                    {
                        this.state.buttonPressed && <Button text="Select" />
                    }
                </ButtonsWrapper>

            </PageWrapper>
        )
    }
}

const mapStateToProps = state => ({
    goal: state.goal,
    savingGoal: state.savingGoal
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


export default connect(mapStateToProps, {updateUser})(BodyGoal);