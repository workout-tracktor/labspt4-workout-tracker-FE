import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ValidateUser from './ValidateUser';
import NavBar from "../components/Navbar";
import Landing from "./landing/Landing";
import BodyGoal from "./BodyGoal";
import ExerciseForm from "./exercise_form/ExerciseForm";

import UserSettings from "./user_settings";
// import PrivateRoute from "../components/PrivateRoute";

import { useAuth0 } from "../components/auth0-wrapper";
import Loading from "../components/Loading";
import WorkoutForm from "./exercise_form/ExerciseForm";
import ExerciseTypeForm from "./exercise_form/ExerciseTypeForm";
import { MarketingPage } from "./MarketingPage";

function App() {
  const { loading } = useAuth0();
  const [Registered, setRegistered] = React.useState(false);

  if (loading) {
    return <Loading />;
  }

  const registerToggler = () => {
    //toggles the state to render certain Navbar buttons if in the onboarding or dashboard
    setRegistered(true)
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar Registered = {Registered}/>
        </header>
        <Switch>
          <Route exact path="/" component={MarketingPage} />
          <Route exact path="/validate-user" render = {(props) => <ValidateUser {...props} isRegistered={registerToggler} />} />
          <Route exact path="/Landing" render = {(props) => <Landing {...props} isRegistered={registerToggler} />}/>
          <Route exact path="/user-settings" component={UserSettings} />
          {/* On boarding - choose the body goal */}
          {/* @TO-DO: Make route private */}
          <Route exact path="/onboarding/body-goal" component={BodyGoal} />

          <Route exact path="/exercise-form"  render = {(props) => <ExerciseTypeForm {...props}/>} />
          <Route exact path="/exercise-form/:exercise"  render = {(props) => <ExerciseForm {...props}/>} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
