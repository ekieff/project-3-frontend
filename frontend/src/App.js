import React from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div >
      <div className="container">
        <BrowserRouter>
        <Switch>

          <Route path= "/" component={Homepage} />

        </Switch>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
