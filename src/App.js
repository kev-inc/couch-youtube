import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Controller from "./Controller";
import Lobby from "./Lobby";
import Player from "./Player";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/player/:roomId" component={Player} />
        </Switch>
        <Switch>
          <Route path="/controller/:roomId" component={Controller} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Lobby} />
        </Switch>
      </div>
    </Router>
  );
}
