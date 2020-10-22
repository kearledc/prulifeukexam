import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dire from "./components/Dire";
import Radiant from "./components/Radiant";
import Create from "./components/Create";
import Landing from "./components/Landing";
import Edit from "./components/Edit";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/dire" component={Dire} />
          <Route path="/radiant" component={Radiant} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
