import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Menu from "./pages/menu/menu";
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
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
