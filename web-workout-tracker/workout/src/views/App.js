import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../components/Navbar";
import Landing from "./Landing";
import BodyGoal from "./BodyGoal";

import UserSettings from "./user_settings";
// import PrivateRoute from "../components/PrivateRoute";

import { useAuth0 } from "../components/auth0-wrapper";
import Loading from "../components/Loading";
import InputWorkoutForm from "./InputWorkoutForm";

function App() {
  //   const { loading } = useAuth0();

  //   if (loading) {
  //     return <Loading />;
  //   }
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/user-settings" component={UserSettings} />

          {/* On boarding - choose the body goal */}
          {/* @TO-DO: Make route private */}
          <Route exact path="/onboarding/body-goal" component={BodyGoal} />

          <Route path="/input-workout" component={InputWorkoutForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
