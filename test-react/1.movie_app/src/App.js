import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
