import React, {useEffect}  from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./Checkout"; 
import Login from "./Login";
import Payment from "./Payment";
import Orders from './Orders';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import {Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51KU4h8SAm2HpUIuzB0VFHoXKrMOtB7H3UpYcgMuCfSBBZTNjIO31JnvYKaLqoG0cMW1EJ0AJeVRltaAqCY6kmYbv00kdTX9kMg"
);

function App() {
  const [{}, dispatch] = useStateValue();
useEffect(() => {
  auth.onAuthStateChanged(authUser => {
    console. log('THE USER IS >>> ', authUser);
    if (authUser) {

      dispatch({
        type: 'SET_USER',
        user: authUser,
      });

    } else {
      dispatch({
        type:'SET_USER',
        user: null,
      });

    }
  });
}, []);
  return (


    <Router>
    <div className="App">
      <Switch>
        <Route path='/orders'>
        <Header />
          <Orders/>
          </Route> 
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
       < Checkout />
      </Route>
      <Route path="/payment">
  <Header /> 
  <Elements stripe={promise}>
  <Payment />
  </Elements>
      </Route>
      <Route path="/">
        <Header/> 
    < Home />
    </Route>
   </Switch>
    </div>
   </Router>
  );
}


export default App;
