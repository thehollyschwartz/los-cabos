import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Home from "./pages/home/home";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Header />
          <Toolbar />
          <Home />
        </Route>
        <Route path='/about'>
          <h1>About</h1>
        </Route>
        <Route path='/menu'>
          <h1>Menu</h1>
        </Route>
        <Route path='/contact'>
          <h1>Contact</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
