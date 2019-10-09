import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ValidateUser from './ValidateUser';
import NavBar from "../components/Navbar";
import Landing from "./landing/Landing";
import BodyGoal from "./BodyGoal";

import UserSettings from "./user_settings";
// import PrivateRoute from "../components/PrivateRoute";

import { useAuth0 } from "../components/auth0-wrapper";
import Loading from "../components/Loading";
import WorkoutForm from "./workout_form/WorkoutForm";
import WorkoutTypeForm from "./workout_form/WorkoutTypeForm";
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

          <Route exact path="/workout-form"  render = {(props) => <WorkoutTypeForm {...props}/>} />
          <Route exact path="/workout-form/:exercise"  render = {(props) => <WorkoutForm {...props}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
