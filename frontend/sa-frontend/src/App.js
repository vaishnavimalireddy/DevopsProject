import React from 'react'; 
import './App.css'; 
import Home from './components/home.component';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
        <Router>
          <div className="App">
            <Switch>
                  
                  <Route  path="/" exact component={Home} />
                  <Redirect from="/home" to="/" />

            </Switch>
          </div>
      </Router>
      </div>
  );
}

export default App;
