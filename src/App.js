import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from '../../landing_page/src/components/Intro';
import Designed from './components/Designed';
import StateOfArt from './components/StateOfArt';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Intro />
          <Designed />
          <StateOfArt />
        </div>
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
