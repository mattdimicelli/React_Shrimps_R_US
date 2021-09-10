import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
