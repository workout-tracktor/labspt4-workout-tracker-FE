import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "../components/auth0-wrapper";

import Landing from "./Landing";
import BodyGoal from './BodyGoal';
import NavBar from "../components/Navbar";
import UserSettings from './user_settings'

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path='/user-settings' component={UserSettings} />
        <Route exact path='/onboarding/body-goal' component={BodyGoal} />
      </Router>
    </div>
  );
}

export default App;
