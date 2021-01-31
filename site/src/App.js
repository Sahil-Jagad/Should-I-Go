import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LandingPage from './pages/LandingPage/LandingPage'
import SuccessPage from './pages/SuccessPage/SuccessPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import StartPage from './pages/StartPage/StartPage'
import GuidelinesPage from './pages/GuidelinesPage/GuidelinesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/start" component={StartPage} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/guidelines" component={GuidelinesPage} />
          <Route component={ErrorPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
