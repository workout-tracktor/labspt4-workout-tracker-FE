import React from "react"
import styled from "styled-components";

// Redux
import { connect } from "react-redux";
import { addGoal } from '../actions';

import OnboardingHeader from "../components/OnboardingHeader";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Button from "../components/Button";

import TrophyIcon from "../assets/icons/Trophy.svg";
import CheckMark from "../assets/icons/CheckMark.svg";


class BodyGoal extends React.Component {
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
        console.log(this.state.buttonPressed);
        // @TO-DO: add different urls for mobile and desktop, make it separate file as well
        const dummyData = [
            {
                id: 1,
                url: "https://s3-alpha-sig.figma.com/img/cb4f/0681/b2fc8492d1a3149fe77f55d644e2bd60?Expires=1567987200&Signature=FTEgebWuPaXpcTjjFPMR1LxlQgJHWJE9L53UNTFxwSKP0h41g6TF6OjBx~zj9BUKNUS746sBNdF58AmwxqiGUEqu9J4Q2OulfL1YIfQ3AmIs4oREbzTfxXUUdBustOjq6P65s9hMOcWlwgEPeSmY7nIxBogcNZVf~EEEWZdWwlQjsCn8IBob48zEVdCwFotMtUohF926QTw0IlXRqcDHY2wLEL4us9DxUWxkPi3rS1xehzJ2IdRksv9WxBS8Y3CyolBf5aBqB1-HjWp9pVM~3-cFd8oxGIcLj3oJnrmlG902GbomhmV6Dv7LBnlxL08QuBeSMzJtGYjcea3tqN5fjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                text: "Slim down"
            },
            {
                id: 2,
                url: "https://s3-alpha-sig.figma.com/img/6799/bbc2/cd7ba475f2525a3b2020ebdb24552cd1?Expires=1567987200&Signature=YGpGFRtSvolBZrS8Az2QH0gLrtt-Ydz9UgtZ962xkWp3Yuv~SMxsZeTyEzEl~aQJnbY5rJuSbPZsX2HBsf6mDXc17tm6aUCL58xMoRTUEU56DBPYvnxKXsJHixz73duiOJHAXiAT0VmyZax4PuRjInBHKRzzDaIR1b24SpvZl~TpXhcl-5RstmvilTTPE7luDaTR5jmEGyL5QXchjuaLB7XpehPx76myl9iU9UyMiIfp6QAke2VWakQcj2XzEwJ01BTmvmNinmR48wFC0beqClHNf1eb0vbuxD2iR2EWfh1CH9T2hTx4ht5Xrk5fJCOwMPQ-Pl0Hz6LJnUPmg88pYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                text: "Get big"
            },
            {
                id: 3,
                url: "https://s3-alpha-sig.figma.com/img/8949/0b85/559de265f93d16058bf878d1591aa3a8?Expires=1567987200&Signature=OCIMeD0G-ByrCGy6b15I-F8Ktl5IV6jYW3R4z3iAwBEz6F3pH7tmOp7BlD3SZ9Fa-WVprptbjdQ6Awncuujo6ofvurGLlFC2qIQi9HgHHjTmPeBhKg8S-62fwgfnu8QaojVm24nKZn2HgMHMI-cgsLz0mLSFBRgVFmzVhjYMhUgxva6-jrNPFYJLjBPKy9fl0LD9JGmGi~0iTEhW-meoygae6jltipRwOF0Bancz8jFOUdlNpoCyqKpJjJXHj-zHcLGf45Vp4ocxXKNMSQljjo2jIvGJKdIfE4i1UUreOCKbUefW~8Ikz3hAbkx4hfKT-0bHcPn3tOZoX~Yo~Ipq3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                text: "Maintain"
            },
            {
                id: 4,
                url: "https://s3-alpha-sig.figma.com/img/0fc9/5987/8e1f5df124cebe407906e6d9ab0579e3?Expires=1567987200&Signature=fjibM-WqQbZkapl-ID6NQOu3TZHTvndjH-GihpyAtBdUDVLsC9q8mBYzYkx-NdaiDjUOwew94nhZoszMB23mas9SKcmF-oH4BdbqfxaRsa5s3ITYIRKezhU7nxIDrk5SL9ljz1wadU-cgPApbRxQywk73tS~yrcaazDAZCbewIighZZsJsBmosCOJNmzXaNr8rIMkNkiPLl44lMGC7CQ7F7sTDHkp4usDz3Ud4HoNnqpU3dcDQ5h-E2Hphei6gBgAAV-Ahzp4l6h5p2hIDT2PMJPL93YZkR01f4d2HLvgb5Z3IkdlHCMYE37SoQ8toIEa4Y7iLCk2ofBxS0kAK3Qkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                text: "Athletic"
            }
        ]
        return (
            <PageWrapper>
                {/* Reusable header component (Icon + text). Props: icon source(=url) and text(=text) */}

                <OnboardingHeader url={TrophyIcon} text="What's your goal?" />

                {/* Reusable button with background component (background image + text). Needs props for text and image source, onClick and onBlur change filter, onClick also saves goal to state 
                */}

                {/* onBlur event occurs when component lose focus */}
                <OptionsWrapper>
                    {dummyData.map(elem =>
                        <ButtonWithBackground key={elem.id} url={elem.url} icon={CheckMark} text={elem.text} onClick={() => this.clickOptionHandler(elem.text)} onBlur={this.handleBlur} opacity={this.state.buttonPressed ? "0.3" : "0.7"} gradient={!this.state.buttonPressed ? "rgba(22, 26, 41, 0.5)" : "transparent"} />
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


export default connect(mapStateToProps, {addGoal})(BodyGoal);