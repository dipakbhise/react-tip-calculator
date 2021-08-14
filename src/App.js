import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home/Home';


function App() {
  return (
    <div className="App">

    <Router>

    <Route path="/react-tip-calculator" component={Home}/>


    </Router>

    

    

     

    </div>
  );
}

export default App;
