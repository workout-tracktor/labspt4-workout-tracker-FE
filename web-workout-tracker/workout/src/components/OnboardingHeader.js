import React from "react";
import styled from "styled-components";

export default function OnboardingHeader(props) {
    return (
        <Header>
            <img alt={props.text} src={props.url} style={{width: "4%"}}/>
            <HeaderText>{props.text}</HeaderText>
        </Header>
    )
}

const Header = styled.div`
    width: 90%;
    margin: 15px auto;
    display: flex;
    align-items: center;
`;

const HeaderText = styled.h1`
    /* font-family: Aktiv Grotesk Cd; */
    font-size: 24px;
    line-height: 31px;
    text-transform: uppercase;
    color: #333333;
`;