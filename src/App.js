
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import Home from "./pages/home/home";
import Menu from "./pages/menu/menu";
import Contact from "./pages/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Header />
          <Toolbar />
          <Home />
          {/* <About /> */}
          <Footer />
        </Route>
        <Route path='/menu'>
          <Header />
          <Toolbar />
          {/* <Menu />
          <About /> */}
          <Footer />
        </Route>
        <Route path='/contact'>
          <Header />
          <Toolbar />
          {/* <Contact />
          <About /> */}
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
