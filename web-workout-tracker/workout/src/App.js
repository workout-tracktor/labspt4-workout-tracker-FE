import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from './components/Landing'
import Login from './components/login'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component = {Landing} />
        <Route exact path='/login' component={Login} />
      </Router>
    </div>
  );
}

export default App;
