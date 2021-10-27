import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar_Component/Navbar'
import HomePage from './Components/HomePage'
import Projects from './Components/Projects'
import Btre from './Components/Projects_List/Btre'
import Shot from './Components/Projects_List/Shot'
import Sparkx from './Components/Projects_List/Sparkx'
import PaymentIntegration from './Components/Projects_List/PaymentIntegration'
import Tasky from './Components/Projects_List/Tasky'
import Zomato from './Components/Projects_List/Zomato'
import BioFm from './Components/Projects_List/BioFm'
import Billing from './Components/Projects_List/Billing'
import ML from './Components/Projects_List/ML'
import Portfolio from './Components/Projects_List/Portfolio'
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
        <Route path="/project/btre_real_estate" exact><Btre/></Route>
        <Route path="/project/shot_mobile_store" exact><Shot/></Route>
        <Route path="/project/sparkx_bank" exact><Sparkx/></Route>
        <Route path="/project/payment_integration" exact><PaymentIntegration/></Route>
        <Route path="/project/tasky"exact><Tasky/></Route>
        <Route path="/project/zomato" exact><Zomato/></Route>
        <Route path="/project/bio_fm" exact><BioFm/></Route>
        <Route path="/project/billing" exact><Billing/></Route>
        <Route path="/project/ml" exact><ML/></Route>
        <Route path="/project/portfolio" exact><Portfolio/></Route>
      </Switch>
    </Router>
  );
}

export default App;
