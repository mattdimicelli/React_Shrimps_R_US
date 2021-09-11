import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import './styles.css';
import { useState } from 'react';

function App() {
  const [itemCount, setItemCount] = useState("");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
            <Homepage itemCount={itemCount} />
        </Route>
        <Route exact path='/shop'>
          <Shop itemCount={itemCount} setItemCount={setItemCount} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
