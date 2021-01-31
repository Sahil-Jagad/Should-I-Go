import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import LandingPage from './pages/LandingPage/LandingPage'
import SuccessPage from './pages/SuccessPage/SuccessPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import StartPage from './pages/StartPage/StartPage'
import NoGoPage from './pages/NoGoPage/NoGoPage'
import SymptomsPage from './pages/SymptomsPage/SymptomsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/start" component={StartPage} />
          <ProtectedRoute path="/success" component={SuccessPage} />
          <ProtectedRoute path="/no" component={NoGoPage} />
          <ProtectedRoute path="/symptoms" component={SymptomsPage} />
          <Route component={ErrorPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
