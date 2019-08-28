import React from "react"
import styled from "styled-components";

// Redux
import { connect } from "react-redux";
import { addGoal } from '../actions';

import OnboardingHeader from "../components/OnboardingHeader";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Button from "../components/Button";


class BodyGoal extends React.Component {
    state= {
        goal: "",
        buttonPressed: false
    }

    render() {
        // change to real data, when design will be finalized
        const dummyData = [
            {
                id: 1,
                url: "https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=375&w=630",
                text: "Slim down"
            },
            {
                id: 2,
                url: "https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=375&w=630",
                text: "Get big"
            },
            {
                id: 3,
                url: "https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=375&w=630",
                text: "Maintain"
            },
            {
                id: 4,
                url: "https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=375&w=630",
                text: "Athletic"
            }
        ]
        return (
            <PageWrapper>
                {/* Reusable header component (Icon + text). Props: icon source(=url) and text(=text) */}

                <OnboardingHeader url="https://img.icons8.com/carbon-copy/100/000000/uefa-euro-trophy.png" text="What's your goal?" />

                {/* Reusable button with background component (background image + text). Needs props for text and image source, onClick change filter, save goal to state 
                @TO-DO: change styling for non-active buttons when one of the buttons is active; add clickHandler function?
                */}
                <OptionsWrapper>
                    {dummyData.map(elem =>
                        <ButtonWithBackground key={elem.id} url={elem.url} text={elem.text} onClick={this.clickHandler} />
                    )}
                </OptionsWrapper>
                
                <ButtonsWrapper>
                    {/* @TO-DO: Uncomment button element below (possibility to skip onboarding when it grows in next versions of the app) */}
                    <Button text="I'll do this later" background="white" color="#03A3F3" width="1" />

                    {/* "Select" Button
                    @TO-DO: should be rendering only when user made a choice for his/her body goal (button with background is active) 
                    @TO-DO: For Canvas 1 it's the only screen for on boarding, so SELECT button will be === SUBMIT button. And onSubmit events which saves body goal in the db and change it in Redux store and then redirects to the right page
                    */}
                    {
                        !this.state.buttonPressed && <Button icon="https://img.icons8.com/ios/20/ffffff/checked-2.png"  alt="check mark" text="Select"  width="1" />
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
    width: 40%;
    margin: 0 auto;
`;

const OptionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;


export default connect(mapStateToProps, {addGoal})(BodyGoal);