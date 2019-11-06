import React from "react"
import styled from "styled-components";

// Redux
import { connect } from "react-redux";
import { sendUserData, sendUserUnits } from '../actions';

import axios from "axios";

import OnboardingHeader from "../components/OnboardingHeader";
import Button from "../components/Button";

import TrophyIcon from "../assets/icons/Trophy.svg";

export class ChooseUnits extends React.Component {
    state = {
        units: "",
        buttonPressed: false
    }

    clickOptionHandler = (units) => {
        this.setState({ buttonPressed: true });
        this.props.sendUserUnits(units);
    }

    // eventListener for the window, hide Select button when user isn't pressing on body options or Select button itself
    hideSelectButton(e) {
        if(e.target.dataset.testid !== "units" || e.target.dataset.txt === "I'm done") {
            this.setState({ buttonPressed: false });
        }
        if(e.target.dataset.txt === "I'll do this later") {
            this.props.history.push("/Landing");
        }
        if(e.target.dataset.txt === "< Go back") {
            this.props.history.push("/onboarding/body-goal");
        }
    }

    setDefault = () => {
        axios
        .put("https://workouttrackerprod.herokuapp.com/api/user", { user_id: this.props.thisUser.user_id, unit_system: "standard" })
        .then(res => {
            // save updated user object in Redux store (state.thisUser)
            this.props.sendUserData(res.data);
            // go to the next on boarding screen (choose default units)
            this.props.history.push("/Landing");
        })
        .catch(err => {
            console.log(err);
            this.props.history.push("/onboarding/choose-units");
        })
    }

    setUnits = (e, props) => {
        axios
            .put("https://workouttrackerprod.herokuapp.com/api/user", { user_id: this.props.thisUser.user_id, unit_system: this.props.units })
            .then(res => {
                // save updated user object in Redux store (state.thisUser)
                this.props.sendUserData(res.data);
                // go to the next on boarding screen (choose default units)
                this.props.history.push("/Landing");
            })
            .catch(err => {
                console.log(err);
                this.props.history.push("/onboarding/choose-units");
            })
    }

    render() {
        return (
            <PageWrapper onClick={e => this.hideSelectButton(e)}>

                {/* Reusable header component (Icon + text). Props: icon source(=url) and text(=text) */}

                <OnboardingHeader url={TrophyIcon} text="Choose a metric system" />

                <OptionsWrapper>
                    <OptionButton data-testid="units" onClick={() => this.clickOptionHandler("standard")}>
                        <img src="https://lift-quest-logo-staging.s3.us-east-2.amazonaws.com/emojione-flag-for-flag-us-outlying-islands.svg" alt="US flag" data-testid="units" />
                        <OptionsRightContent data-testid="units">
                            <OptionsHeader data-testid="units">
                            US Standard
                            </OptionsHeader>
                            <OptionsBody data-testid="units">
                                miles, feet, pounds
                            </OptionsBody>
                        </OptionsRightContent>
                    </OptionButton>

                    {!this.state.buttonPressed && <Line />}

                    {this.state.buttonPressed && <InvisibleLine />}

                    <OptionButton data-testid="units" onClick={() => this.clickOptionHandler("metric")}>
                        <img src="https://lift-quest-logo-staging.s3.us-east-2.amazonaws.com/emojione-flag-for-flag-european-union.svg" alt="EU flag" data-testid="units" />
                        <OptionsRightContent data-testid="units">
                            <OptionsHeader data-testid="units">
                            Metric
                            </OptionsHeader>
                            <OptionsBody data-testid="units">
                                kilometers, meters, kilograms
                            </OptionsBody>
                        </OptionsRightContent>
                    </OptionButton>

                </OptionsWrapper>

                <ButtonsWrapper>
                    {/* Go back button */}
                    <Button text="< Go back" background="transparent" />
                    {/* {
                        this.state.buttonPressed && 
                    } */}

                    {/* Skip on boarding Button*/}
                    {
                        !this.state.buttonPressed && <Button text="I'll do this later" background="transparent" padding="7px 0px" onClick={this.setDefault} />
                    }

                    {/* "Select" Button*/}
                    {
                        this.state.buttonPressed && <Button text="I'm done" onClick={this.setUnits} />
                    }
                </ButtonsWrapper>

            </PageWrapper>
        )
    }
}

const mapStateToProps = state => ({
    units: state.units,
    thisUser: state.thisUser
});

const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
`;

const OptionsWrapper = styled.div`
    width: 90%;
    max-width: 510px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const OptionButton = styled.button`
    width: 500px;
    height: 119px;
    /* z-index: 111; */
    position: relative;
    margin: 0 0 15px 0;
    padding: 0 0 0 23px;
    border: 2px solid transparent;
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
        cursor: pointer;
        border: 2px solid #03A3F3;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    &:focus, &:active {
        background: rgba(255, 255, 255, 0.08);
        outline: none;
        border: none;
    };
`;

const OptionsRightContent = styled.div`
    height: 119px;
    display: flex;
    z-index: 111;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 23px;
`;

const OptionsHeader = styled.h1`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: #FFFFFF;
`;

const OptionsBody = styled.p`
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`;

const Line = styled.div`
    width: 500px;
    height: 0px;
    margin-bottom: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InvisibleLine = styled.div`
    width: 500px;
    height: 0px;
    margin-bottom: 15px;
    border: 1px solid transparent;
`;

const ButtonsWrapper = styled.div`
    width: 90%;
    max-width: 510px;
    z-index: 333;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

export default connect(mapStateToProps, {sendUserData, sendUserUnits})(ChooseUnits);