import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from "./components/Plant";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' component={Index}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
