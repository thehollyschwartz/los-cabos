import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Header />
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
