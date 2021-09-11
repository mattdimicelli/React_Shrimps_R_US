import { HashRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import './styles.css';
import { useState } from 'react';

function App() {
  const [itemCount, setItemCount] = useState("");
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
            <Homepage itemCount={itemCount} />
        </Route>
        <Route exact path='/shop'>
          <Shop itemCount={itemCount} setItemCount={setItemCount} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
