import React from "react";
import styled from "styled-components";

// PROPS:
// color (default: #FFFFFF)
// background (default: #2367FF)
// text
// onClick
// padding (default: "7px 15px")

export default function Button(props) {
    return (
        <StyledButton data-testid="option-button" onClick={props.setGoal} background={props.background} color={props.color} padding={props.padding}>
            {props.text}
        </StyledButton>
    )
};

const StyledButton = styled.button`
    background: ${props => props.background || "#2367FF"};
    color: ${props => props.color || "#FFFFFF"};
    font-size: 18px;
    line-height: 23px;
    font-family: Roboto Condensed, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    padding: ${props => props.padding || "7px 15px"};
    min-width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #03A3F3;
    }
    &:focus, &:active {
        outline: none;
    };
`;