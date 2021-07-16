import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Page from './components/Page';
import Login from './components/Login';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <PrivateRoute exact path = "/page" component={Page}/>
        <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;