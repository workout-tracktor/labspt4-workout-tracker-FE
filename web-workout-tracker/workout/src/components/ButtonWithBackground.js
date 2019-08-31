import React from "react";
import styled from "styled-components";

export default function ButtonWithBackground(props) {
    return (
        <Button url={props.url}>
            <Text>{props.text}</Text>
        </Button>
    )
};

const Button = styled.button`
    width: 100%;
    height: 120px;
    margin: 0 0 15px 0;
    padding: 0;
    border: none;
    border-radius: 5px; 
    background: url(${props => props.url || "white"});
    background-size: 100%;
    background-repeat: no-repeat;

    &:hover {
        cursor: pointer;
    }
    &:focus, &:active {
        background: linear-gradient(0deg, rgba(3, 163, 243, 0.8), rgba(3, 163, 243, 0.8)),
        url(${props => props.url || "white"});
        outline: none;
        background-size: 100%;
        background-repeat: no-repeat;
    };
`;

const Text = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    padding-right: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    /* font-family: Aktiv Grotesk Cd; */
    font-size: 36px;
    line-height: 46px;
    /* font-size: 50px; */
    color: #FFFFFF;
    text-transform: uppercase;
    /* font-weight: bold; */
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
`;