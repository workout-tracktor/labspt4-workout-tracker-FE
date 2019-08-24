import React from "react"

import OnboardingHeader from "../components/OnboardingHeader";
import ButtonWithBackground from "../components/ButtonWithBackground";


class BodyGoal extends React.Component {
    state= {
        goal: ""
    }

    render() {
        // change to real data, when design will be finalized
        const dummyData = [
            {
                id: 1,
                url: "https://images.pexels.com/photos/949130/pexels-photo-949130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                text: "Slim down"
            },
            {
                id: 2,
                url: "https://images.pexels.com/photos/949130/pexels-photo-949130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                text: "Get big"
            },
            {
                id: 3,
                url: "https://images.pexels.com/photos/949130/pexels-photo-949130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                text: "Maintain"
            },
            {
                id: 4,
                url: "https://images.pexels.com/photos/949130/pexels-photo-949130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                text: "Athletic"
            }
        ]
        return (
            <>
                {/* Reusable header component (Icon + text). Props: icon source(=url) and text(=text) */}

                <OnboardingHeader url="https://img.icons8.com/carbon-copy/100/000000/uefa-euro-trophy.png" text="What's your goal?" />

                {/* Reusable button with background component (background image + text). Needs props for text and image source, onClick change filter, save goal to state */}
                
                {dummyData.map(elem =>
                    <ButtonWithBackground key={elem.id} url={elem.url} text={elem.text} />
                )}

                {/* "Select" Button */}

                {/* @TO-DO: Add possibility to skip onboarding when it grows in next versions of the app */}

            </>
        )
    }
}

export default BodyGoal;