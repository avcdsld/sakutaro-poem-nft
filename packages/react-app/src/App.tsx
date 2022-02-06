import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import HomeEn from "./pages/en";

import "./styles/tailwind.css";
import "./styles/font.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/en" exact>
          <HomeEn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
