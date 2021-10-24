import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar_Component/Navbar'
import HomePage from './Components/HomePage'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/ContactMe'
import MyCV from './Components/MyCV'
import About from './Components/About'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/"exact><HomePage/></Route>
        <Route path="/project" exact><Projects/></Route>
        <Route path="/myCv" exact><MyCV/></Route>
        <Route path="/about" exact><About/></Route>
        <Route path="/contact" exact><ContactMe/></Route>
      </Switch>
    </Router>
  );
}

export default App;
