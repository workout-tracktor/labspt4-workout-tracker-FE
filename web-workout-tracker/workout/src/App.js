import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useAuth0} from "./react-auth0-wrapper";


import Landing from "./components/Landing";
import NavBar from "./components/Navbar";
import UserSettings from './components/user_settings'
import InputWorkoutForm from './components/InputWorkoutForm'

function App() {
    const {loading} = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <NavBar/>
            <Router>
                <Route exact path="/" component={Landing}/>
                <Route exact path='/user-settings' component={UserSettings}/>
                <Route exact path='/input-workout' component={InputWorkoutForm}/>
            </Router>
        </div>
    );
}

export default App;
