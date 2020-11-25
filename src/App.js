import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Header />
          <Toolbar />
          <Home />
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
