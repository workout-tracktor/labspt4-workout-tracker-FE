import React from "react";
import styled from "styled-components";

export default function OnboardingHeader(props) {
    return (
        <Header>
            <img alt={props.text} src={props.url} />
            <h1>{props.text}</h1>
        </Header>
    )
}

const Header = styled.div`
    width: 40%;
    margin: 15px auto;
    display: flex;
`;