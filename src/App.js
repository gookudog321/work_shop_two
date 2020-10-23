import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './component/page/Home'
import Services from './component/page/Services'
import Products from './component/page/Products'
import Signup from './component/page/SignUp'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services'  component={Services} />
      <Route path='/products'  component={Products} />
      <Route path='/sign-up'  component={Signup} />
    </Switch>
    </Router>
     
  </>
  );
}

export default App;
