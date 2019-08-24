import React from "react";

function OnboardingHeader(props) {
    return (
        <div className="onb-header">
            <img alt={props.text} src={props.url} />
            <h1>{props.text}</h1>
        </div>
    )
}

export default OnboardingHeader;