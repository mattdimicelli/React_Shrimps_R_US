import { ReactRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';

function App() {
  return (
    <ReactRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </ReactRouter>
  );
}

export default App;
