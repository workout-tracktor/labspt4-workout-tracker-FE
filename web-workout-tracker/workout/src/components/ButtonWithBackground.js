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
    width: 40%;
    height: 50px;
    margin: 15px auto;
    padding: 0;
    border: none;
    /* display: flex;
    align-items: flex-end;
    justify-content: flex-end; */

    background: url(${props => props.url || "white"});

    &:hover, &:focus, &:active {
        background-image: 
            linear-gradient(
                rgba(3, 163, 243, 0.5),
                rgba(3, 163, 243, 0.5)
            ),
        url(${props => props.url || "white"});
        cursor: pointer;
    };
`;

const Text = styled.span`
    width: 100%;
    height: 100%;
    margin-right: 10%;
    margin-bottom: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border: 1px solid red;
    font-size: 20px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
`;