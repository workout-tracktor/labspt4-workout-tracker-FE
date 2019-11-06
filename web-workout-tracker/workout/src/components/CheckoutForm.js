import React from "react";
import StripeCheckout from "react-stripe-checkout";

//need following on backend
// router.route('/save-stripe-token')
// .post((req, res) => {
// stripe.charges.create({
// amount: 300,
// currency: "usd",
// source: req.token,
// description: "Charge for additional features"
// }, function(err, charge) {
// asynchronously called, check if charge was created successfully
// ...
// Insert job, or return error to frontend
// });
// });

export default class CheckoutForm extends React.Component {
  onToken = token => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  render() {
    return (
      <StripeCheckout
        name="LiftQuest" // the pop-in header title
        amount="300"
        currency="usd"
        label="Want to chart your progress?" // text inside the Stripe button
        panelLabel="Pay with 💳"
        description="Special Features"
        image="https://lift-quest-logo-staging.s3.us-east-2.amazonaws.com/lift-logo.png"
        locale="auto"
        name="LiftQuest"
        stripeKey="pk_test_1MMw6F4AwE6N02FyRrmMDgUw00jBG44S6s"
        token={this.onToken}
        zipCode
      />
    );
  }
}
