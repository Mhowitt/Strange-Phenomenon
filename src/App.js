import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './containers/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
