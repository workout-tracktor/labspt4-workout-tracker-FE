import React from "react";
import styled from "styled-components";

export default function ButtonWithBackground(props) {
    const url = props.url;
    return (
        <Button style={{background: `url(${url})`}}>
            {props.text}
        </Button>
    )
};

const Button = styled.button`
    width: 90%;
    margin: 15px auto;
    &:hover {
        background-image: 
            linear-gradient(
            rgba(0, 15, 200, 0.5),
            rgba(0, 15, 200, 0.5)
            )
    };
`;