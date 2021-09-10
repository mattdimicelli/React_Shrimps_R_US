import { ReactRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Shop from './Shop';

function App() {
  return (
    <ReactRouter>
      <Switch>
        <Route path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </ReactRouter>
  );
}

export default App;
