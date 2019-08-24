import React from 'react'

import OnboardingHeader from '../components/OnboardingHeader';


class BodyGoal extends React.Component {
    state= {
    }

    render() {
        return (
            <>
                {/* Reusable header component (Icon + text). Props: icon source and text */}
                <OnboardingHeader />
                {/* Reusable button with background component (background image + text). Needs props for text and image source, onClick change filter, save goal to state */}
                {/*  */}

            </>
        )
    }
}

export default BodyGoal;