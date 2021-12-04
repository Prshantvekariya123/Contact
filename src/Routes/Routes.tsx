import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactScreen from "../Screen/ContactScreen";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ContactScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
