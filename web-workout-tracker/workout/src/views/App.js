import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "../react-auth0-wrapper";

import Landing from "./Landing";
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
      </Router>
    </div>
  );
}

export default App;
