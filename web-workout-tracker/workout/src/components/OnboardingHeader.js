import React from "react";
import styled from "styled-components";

export default function OnboardingHeader(props) {
    return (
        <Header>
            <img alt={props.text} src={props.url} style={{width: "10%"}}/>
            <h1 style={{fontSize: "30px"}}>{props.text}</h1>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    margin: 15px 0;
    display: flex;
    align-items: center;
    text-transform: uppercase;
`;