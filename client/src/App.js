import React from 'react'
import "@material-tailwind/react/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar_Component/Navbar'
import HomePage from './Components/HomePage'
import Projects from './Components/Projects'
import Shot from './Components/Projects_List/Shot'
import Sparkx from './Components/Projects_List/Sparkx'
import PaymentIntegration from './Components/Projects_List/PaymentIntegration'
import Tasky from './Components/Projects_List/Tasky'
import BookAPI from './Components/Projects_List/BookAPI'
import Billing from './Components/Projects_List/Billing'
import ML from './Components/Projects_List/ML'
import Attendance from './Components/Projects_List/Attendance'
import ContactMe from './Components/ContactMe'
import MyCV from './Components/MyCV'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"exact><HomePage navbar={<Navbar/>}/></Route>
        <Route path="/project" exact><Projects navbar={<Navbar/>}/></Route>
        <Route path="/myCv" exact><MyCV navbar={<Navbar/>}/></Route>
        <Route path="/contact" exact><ContactMe navbar={<Navbar/>}/></Route>
        <Route path="/project/shot_mobile_store" exact><Shot navbar={<Navbar/>}/></Route>
        <Route path="/project/sparkx_bank" exact><Sparkx navbar={<Navbar/>}/></Route>
        <Route path="/project/payment_integration" exact><PaymentIntegration navbar={<Navbar/>}/></Route>
        <Route path="/project/tasky"exact><Tasky navbar={<Navbar/>}/></Route>
        <Route path="/project/bookapi" exact><BookAPI navbar={<Navbar/>}/></Route>
        <Route path="/project/billing" exact><Billing navbar={<Navbar/>}/></Route>
        <Route path="/project/ml" exact><ML navbar={<Navbar/>}/></Route>
        <Route path="/project/attendance"exact><Attendance navbar={<Navbar/>}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
