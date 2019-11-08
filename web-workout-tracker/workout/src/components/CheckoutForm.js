import React from "react";
import styled from "styled-components";
// import StripeCheckout from "react-stripe-checkout";
const stripe = window.Stripe("pk_test_1MMw6F4AwE6N02FyRrmMDgUw00jBG44S6s");

export default class CheckoutForm extends React.Component {
  checkout() {
    stripe
      .redirectToCheckout({
        items: [{ sku: "sku_G5XJGwvYOLZ2KZ", quantity: 1 }],
        successUrl:
          window.location.protocol + "//liftquestapp.com/Landing-paid",
        cancelUrl: window.location.protocol + "//liftquestapp.com/landing"
      })
      .then(result => {
        console.log(result);
      });
  }

  render() {
    return (
      <Button
        onClick={this.checkout}
        // background="linear-gradient(to right, #236cfe, #2ed7e5)"
        // padding="30px"
        // border="none"
        // border-radius="5px"
        // color="white"
        // font-size="20px"
        // font-weight="bold"
      >
        Want to chart your progress?
      </Button>
    );
  }
}

const Button = styled.button`
  background-image: linear-gradient(to right, #236cfe, #2ed7e5);
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
