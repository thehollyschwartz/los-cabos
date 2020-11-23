import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <h1>Home</h1>
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
