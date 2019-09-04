import React from "react";
import styled from "styled-components";

// PROPS:
// color (default: white)
// background (default: #03A3F3)
// width 
// text
// onClick
// alt
// icon (for src attribute)

export default function Button(props) {
    return (
        <StyledButton onClick={props.onClick} background={props.background} color={props.color}>
            <img alt={props.alt} src={props.icon} />{props.text}
        </StyledButton>
    )
};

const StyledButton = styled.button`
    background: ${props => props.background || "#03A3F3"};
    color: ${props => props.color || "white"};
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    padding: 7px 15px;
    min-width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
        cursor: pointer;
    }
    &:focus, &:active {
        outline: none;
    };
`;