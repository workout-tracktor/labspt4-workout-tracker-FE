import React from "react";
import styled from "styled-components";

export default function ButtonWithBackground(props) {
    return (
        // onTouchStart={() => {}} is for re-enabling active pseudo classe (By default Mobile Safari disables CSS active pseudo styles on web pages)
        <Button url={props.url} onClick={props.onClick} onBlur={props.onBlur} opacity={props.opacity} gradient={props.gradient} onTouchStart={() => {}}>
            <img alt="" src={props.icon} style={{position: "absolute", left: "12px", top: "12px", width: "19px", height: "18px" }} />
            <Text>{props.text}</Text>
        </Button>
    )
};

const Button = styled.button`
    width: 100%;
    height: 120px;
    position: relative;
    margin: 0 0 15px 0;
    padding: 0;
    border: none;
    border-radius: 5px; 
    background: linear-gradient(0deg, ${props => props.gradient}, ${props => props.gradient}),
    url(${props => props.url || "white"});
    opacity: ${props => props.opacity || "0.7" };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center; 
    img {
        display: none;
    }
    &:hover {
        cursor: pointer;
        border: 2px solid #03A3F3;
    }
    &:focus, &:active {
        background: linear-gradient(180deg, rgba(47, 221, 228, 0.8) -18.64%, rgba(35, 103, 255, 0.8) 75.02%),
        url(${props => props.url || "white"});
        outline: none;
        box-shadow: 0px 5px 10px rgba(35, 103, 255, 0.4);
        opacity: 1;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center; 
        border: none;
        img {
            display: block;
        }
    };
`;

const Text = styled.div`
    position: absolute;
    bottom: 5px;
    right: 15px;
    font-family: Roboto Condensed, sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 46px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #03A3F3;
    }
`;