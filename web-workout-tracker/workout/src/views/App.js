import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ValidateUser from './ValidateUser';
import NavBar from "../components/Navbar";
import Landing from "./landing/Landing";
import BodyGoal from "./BodyGoal";
import ChangeBodyGoal from "./ChangeBodyGoal";
import ChooseUnits from "./ChooseUnits";

import ExerciseForm from "./exercise_form/ExerciseForm";

import UserSettings from "./user_settings";
// import PrivateRoute from "../components/PrivateRoute";

import { useAuth0 } from "../components/auth0-wrapper";
import Loading from "../components/Loading";
import ExerciseTypeForm from "./exercise_form/ExerciseTypeForm";
import { MarketingPage } from "./MarketingPage";

function App() {
  const { loading } = useAuth0();
  const [newUser, setnewUser] = React.useState(false)

  if (loading) {
    return <Loading />;
  }


  const newUserToggler = bool => {
    setnewUser(bool)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar newUser={newUser}/>
        </header>
        <Switch>
          <Route exact path="/" component={MarketingPage} />
          <Route exact path="/validate-user" render = {(props) => <ValidateUser {...props} newUserToggler={newUserToggler}/>} />
          <Route exact path="/Landing" render = {(props) => <Landing {...props} />} />}/>
          <Route exact path="/user-settings" component={UserSettings} />
          {/* On boarding - choose the body goal */}
          {/* @TO-DO: Make route private */}
          <Route exact path="/onboarding/body-goal" render = { (props) => <BodyGoal {...props} newUserToggler={newUserToggler}/>} />
          {/* change body goal from settings */}
          <Route exact path="/change-body-goal" render = { (props) => <ChangeBodyGoal {...props} newUserToggler={newUserToggler}/>} />
          {/* On boarding - choose units */}
          <Route exact path="/onboarding/choose-units" render = { (props) => <ChooseUnits {...props} newUserToggler={newUserToggler}/>} />

          <Route exact path="/exercise-form"  render = {(props) => <ExerciseTypeForm {...props}/>} />
          <Route exact path="/exercise-form/:exercise"  render = {(props) => <ExerciseForm {...props}/>} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
