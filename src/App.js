import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Designed from './components/Designed';
import Details from './components/Details';
import Footer from './components/Footer';
import StateOfArt from './components/StateOfArt';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Intro />
          <Designed />
          <StateOfArt />
          <Details />
          <Footer />
        </div>
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
