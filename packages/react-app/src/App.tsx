import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";

import "./styles/tailwind.css";
import "./styles/font.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
