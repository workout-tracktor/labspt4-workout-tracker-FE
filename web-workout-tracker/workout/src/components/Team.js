import React from "react";
import { useAuth0 } from "../components/auth0-wrapper";
import { connect } from 'react-redux'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import Home from '../components/Marketing';

// Team images
import Tevvin from '../assets/images/Tevvin.jpg';
import Kristea from '../assets/images/Kristea.jpg';
import Miguel from '../assets//images/Miguel.jpeg';

// CSS import
import "../assets/index.css";

const Team = (props) => {

    React.useEffect(() => {
        //checks to see if user is logged in by checking cookies, and routes them
        //to the dashboard if they have not logged out.
        if (document.cookie.indexOf('auth0.is.authenticated') === -1) {
            return null
        } else {
            props.history.push("/validate-user")
        }

    })



    return (
        <div className="team">
            {/*h1>About Us:</h1>*/}
            <div className="member">
                <img className="selfie" src={Tevvin} alt="Selfie of Tevvin" />
                <h2>Tevvin strong</h2>
                <h3>Full-Stack Developer</h3>
                <p>
                    Software Developer with experience in full stack web and computer science. Looking to meet more people, work on growing my network.
                </p>
                <div className="icons">
                    <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-envelope-square fa-4x" aria-hidden="true" />
                </div>
            </div>

            <div className="member">
                <img className="selfie" src={Kristea} alt="Selfie of Kristea" />
                <h2>Kristea Gamel</h2>
                <h3>Full-Stack Developer</h3>
                <p>
                    Kristea has a background in Marketing and enjoys the creative aspect of Web Development. She is obsessed with halloween and fall.
                </p>
                <div className="icons">
                    <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" href="https://www.linkedin.com/in/kristeagamel/" />
                    <i className="fa fa-envelope-square fa-4x" aria-hidden="true" />
                </div>
            </div>
            <div className="member">
                <img className="selfie" src={Miguel} alt="Selfie of Miguel" />
                <h2>Miguel Diaz</h2>
                <h3>Full-Stack Developer</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente laboriosam
            dicta voluptas doloremque mollitia veniam iste, </p>
                <div className="icons">
                    <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-envelope-square fa-4x" aria-hidden="true" />
                </div>
            </div>
            <div className="member">
                <img className="selfie" src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Selfie of Tevvin" />
                <h2>Tevvin strong</h2>
                <h3>Full-stack developer</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente laboriosam
            dicta voluptas doloremque mollitia veniam iste, </p>
                <div className="icons">
                    <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-envelope-square fa-4x" aria-hidden="true" />
                </div>
            </div>
            <div className="member">
                <img className="selfie" src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Selfie of Tevvin" />
                <h2>Tevvin strong</h2>
                <h3>Full-stack developer</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente laboriosam
            dicta voluptas doloremque mollitia veniam iste, </p>
                <div className="icons">
                    <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-envelope-square fa-4x" aria-hidden="true" />
                </div>
            </div>
            <div className="member">
                <img className="selfie" src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Selfie of Tevvin" />
                <h2>Tevvin strong</h2>
                <h3>Full-stack developer</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente laboriosam
            dicta voluptas doloremque mollitia veniam iste, </p>
                <div className="icons">
                    <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-envelope-square fa-4x" aria-hidden="true" />
                </div>
            </div>
            <div className="member">
                <img className="selfie" src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Selfie of Tevvin" />
                <h2>Tevvin strong</h2>
                <h3>Full-stack developer</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente laboriosam
            dicta voluptas doloremque mollitia veniam iste, </p>
                <div className="icons">
                    <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-envelope-square fa-4x" aria-hidden="true" />
                </div>
            </div>
            <div className="member">
                <img className="selfie" src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Selfie of Tevvin" />
                <h2>Tevvin strong</h2>
                <h3>Full-stack developer</h3>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente laboriosam
                    dicta voluptas doloremque mollitia veniam iste, </p>
                <div className="icons">
                    <i className="fa fa-github-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
                    <i className="fa fa-envelope-square fa-4x" aria-hidden="true" />
                </div>
            </div>
            <div className="link">
                <button>
                    <Link to={'/'}>HOME</Link>
                </button>
            </div>
        </div>
    );
}

export default connect()(Team);