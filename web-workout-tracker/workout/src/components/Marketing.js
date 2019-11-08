import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// Image imports
import phoneGuy from "../assets/images/guyWithPhone.jpg";
import iPhone from "../assets/images/applePhone.png";
import tabletMockup from "../assets/images/tabletAndPhone.png";
import featureGraphic from "../assets/images/infographic.jpg";
import tripleThreat from "../assets/images/threePhones.png";

// CSS import
import "../assets/index.css";

const Marketing = props => {
  React.useEffect(() => {
    //checks to see if user is logged in by checking cookies, and routes them
    //to the dashboard if they have not logged out.
    if (document.cookie.indexOf("auth0.is.authenticated") === -1) {
      return null;
    } else {
      props.history.push("/validate-user");
    }
  });

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
            <br />
            WE'LL DO THE COUNTING
          </h1>
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
          <img className="trips" src={tripleThreat} alt="Mock up screens" />
        </div>
        <div className="footer">
          <footer>
            {/*
        <img class="google-download" src="/resources/img/google-play-badge.png" alt="Download on GooglePlay" />
        <img class="apple-download" src="/resources/img/app-store-badge.svg" alt="Download on App Store" />
        */}
            <h1>Fitter Faster Further</h1>
            {/* <a href="https://peaceful-joliot-329a9c.netlify.com/">Login</a> */}
          </footer>
        </div>
        <div className="copyright">
          <button>
            <Link to={"/team"}>TEAM</Link>
          </button>
          <p>© 2019 LiftQuest</p>
        </div>
      </div>
      {/* Google Analytics: change UA-XXXXX-Y to be your site's ID. */}
    </div>
  );
};

export default withRouter(Marketing)