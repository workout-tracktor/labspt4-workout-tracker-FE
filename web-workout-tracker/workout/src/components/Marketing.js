import React from "react";
import { useAuth0 } from "../components/auth0-wrapper";
<<<<<<< HEAD
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
=======
import { withRouter } from "react-router";
>>>>>>> f7bc3e64ac2104081f997fc0118591bd1096059f
// Image imports
import phoneGuy from "../assets/images/guyWithPhone.jpg";
import iPhone from "../assets/images/applePhone.png";
import tabletMockup from "../assets/images/tabletAndPhone.png";
import featureGraphic from "../assets/images/infographic.jpg";
import tripleThreat from "../assets/images/threePhones.png";

import Team from '../components/Team.js';

// CSS import
import "../assets/index.css";

const Marketing = props => {
  React.useEffect(() => {
    //checks to see if user is logged in by checking cookies, and routes them
    //to the dashboard if they have not logged out.
<<<<<<< HEAD
    if (document.cookie.indexOf('auth0.is.authenticated') === -1) {
      return null
    } else {
      props.history.push("/validate-user")
=======
    if (document.cookie.indexOf("auth0.is.authenticated") === -1) {
      return null;
    } else {
      props.history.push("/validate-user");
>>>>>>> f7bc3e64ac2104081f997fc0118591bd1096059f
    }
  });

<<<<<<< HEAD
  })



=======
>>>>>>> f7bc3e64ac2104081f997fc0118591bd1096059f
  return (
    <div>
      <meta charSet="utf-8" />
      <title />
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="apple-touch-icon" href="icon.png" />
      {/* Place favicon.ico in the root directory */}
      <link rel="stylesheet" href="/index.css" />
      <link
        href="/resources/img/hamburgers-master/hamburgers-master/dist/hamburgers.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://use.typekit.net/zqt0klh.css" />
      {/*[if IE]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
          <![endif]*/}
      <div className="container">
        <div className="top-market">
          <img
            className="guy-phone"
            src={phoneGuy}
            alt="Guy with a phone in the gym"
          />
          <h1 className="top-cta">
            YOU DO THE WORK
<<<<<<< HEAD
              <br />
            WE'LL DO THE COUNTING
            </h1>
=======
            <br />
            WE'LL DO THE COUNTING
          </h1>
>>>>>>> f7bc3e64ac2104081f997fc0118591bd1096059f
          <div className="nav">
            {/*
          line 31
        <a href="#" class="signupButton">SIGNUP</a>
        */}
          </div>
          {/*
      <img class="google-download" src="/resources/img/google-play-badge.png" alt="Download on GooglePlay" />
      <img class="apple-download" src="/resources/img/app-store-badge.svg" alt="Download on App Store" />
      */}
        </div>
        <div className="upper-mid-market">
          <p>
            At LiftQuest we provide a simple, intuitive system that allows you
<<<<<<< HEAD
            to stop worrying about keeping track of your workouts. With a
            platform that is constantly growing and improving right at your
            fingertips, we empower our users to create, track, and store their
            daily exercise! You handle the lifting and you leave the counting
            to us.
            </p>
          <img
            className="onboarding-mock"
            src={iPhone}
            alt="iPhone witha app"
          />
          <img
            className="tablet-mock"
            src={tabletMockup}
            alt="A tablet and a phone with LiftQuest"
          />
          <div className="boxes">
            <p className="box">
              Designed from the ground up to make tracking exercises easy.
              </p>
=======
            to keep track of your workouts, on your mobile device. With a
            platform that is constantly growing and improving right at your
            fingertips, we empower our users to create, track, and store their
            daily exercise! You handle the lifting and leave the counting to us.
          </p>
          <img
            className="onboarding-mock"
            src={iPhone}
            alt="iPhone witha app"
          />
          <img
            className="tablet-mock"
            src={tabletMockup}
            alt="A tablet and a phone with LiftQuest"
          />
          <div className="boxes">
            <p className="box">
              Designed from the ground up to make tracking exercises easy.
            </p>
>>>>>>> f7bc3e64ac2104081f997fc0118591bd1096059f
            <p className="box">Take it with you everywhere you go!</p>
          </div>
        </div>
        <div className="lower-market">
          {/* <img class="running-girl" src="/resources/img/jumping-blue-chick-shoelace-bbq-tennis-racket.png"
        alt="Running Girl" /> Removes running girl for now */}
          <img
            className="feature-graphic"
            src={featureGraphic}
            alt="A list of Features"
          />
<<<<<<< HEAD
          <img
            className="trips"
            src={tripleThreat}
            alt="Mock up screens"
          />
=======
          <img className="trips" src={tripleThreat} alt="Mock up screens" />
>>>>>>> f7bc3e64ac2104081f997fc0118591bd1096059f
        </div>
        <div className="footer">
          <footer>
            {/*
        <img class="google-download" src="/resources/img/google-play-badge.png" alt="Download on GooglePlay" />
        <img class="apple-download" src="/resources/img/app-store-badge.svg" alt="Download on App Store" />
        */}
<<<<<<< HEAD
            <h1>Get Big!</h1>
            <a href="https://dev-zjd-v4vy.auth0.com/login?state=g6Fo2SBoVUp1RGp4cEtBMHJUX1BRYWdVbGZMeTVXVFUxMTJ0UaN0aWTZIFFENGNPT3BjWHE1dlBRSTdGeEZ1Z0w2WTZWTERtREdoo2NpZNkgWEQ2b3BXS1UwV2dXSFhKVndwMmxrWnVTdWpnVnAyaXg&client=XD6opWKU0WgWHXJVwp2lkZuSujgVp2ix&protocol=oauth2&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=HnG1hDZr6Rzh0FSLzNChi4fCYtU.wAED0KhsSV4Fe-c&code_challenge=iT7_RG510Y2mmd2xE-dW4YMDAqlqcKsrnvNi8yDL2pI&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMS4xIn0%3D">Login</a>
            <br />
            <br />
            <br />
            <Link to={"/team"}>Team</Link>
          </footer>
        </div>
        <div className="copyright">
          <p>© LiftQuest 2019</p>
=======
            <h1>Fitter Faster Further</h1>
            {/* <a href="https://peaceful-joliot-329a9c.netlify.com/">Login</a> */}
            {/* <p>
              "You must expect great things of yourself before you can do them."
              ~ Michael Jordan
            </p> */}
          </footer>
        </div>
        <div className="copyright">
          <p>© 2019 LiftQuest</p>
>>>>>>> f7bc3e64ac2104081f997fc0118591bd1096059f
        </div>
      </div>
      {/* Google Analytics: change UA-XXXXX-Y to be your site's ID. */}
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> f7bc3e64ac2104081f997fc0118591bd1096059f

export default withRouter(Marketing);
