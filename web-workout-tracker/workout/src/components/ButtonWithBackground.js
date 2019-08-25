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
    height: 100px;
    margin: 0 0 15px 0;
    padding: 0;
    border: none;
    border-radius: 7px; 
    background: url(${props => props.url || "white"});

    &:hover {
        cursor: pointer;
    }
    &:focus, &:active {
        background-image: 
            linear-gradient(
                rgba(3, 163, 243, 0.8),
                rgba(3, 163, 243, 0.8)
            ),
        url(${props => props.url || "white"});
        outline: none;
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
    font-size: 50px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
`;