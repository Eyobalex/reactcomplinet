import React, { Component, useEffect } from 'react';

import jwt from 'jwt-decode';

import logIn from './components/auth/logIn'
import {BrowserRouter as Router, Route,Switch, useLocation, useHistory} from 'react-router-dom'
import signUp from './components/auth/signUp';
import AdminHome from './components/admin/AdminHome';
import FeedBacks from './components/admin/FeedBacks';
import Review from './components/compliant/Review';
import Home from './components/compliant/Home';
import {Dashbord as ComplainDashboard} from './components/compliant/Dashbord';
import Dashbord from './components/admin/Dashbord';
import { AdminRoute } from './helpers/routes/AdminRoute';
import { ClientRoute } from './helpers/routes/ClientRoute';
import AdminLogin from './components/auth/adminLogin';
import { useDispatch  } from 'react-redux';
import { logout } from './store/actions/auth';
import SignUpAdmin from './components/auth/signUpAdmin';
const App = () => {
  // const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = (JSON.parse(localStorage.getItem('profile'))) ? JSON.parse(localStorage.getItem('profile'))['X-Access-Token'] : null;
    if (token) {
      const decodedToken = jwt(token);

      if (decodedToken.exp * 1000 < new Date().getTime()){

        console.log("app++ ::  ", decodedToken);
        dispatch(logout(history))
      } 
    }
  },[dispatch]);
  
  return (

 
    <Router>

      <Switch>
 
        <Route exact path='/' component={logIn}/>
        <AdminRoute exact path='/admin' component={() =>  <Dashbord component={AdminHome} /> }/>
        <AdminRoute exact path='/admin/feedBacks' component={() =>  <Dashbord component={FeedBacks} /> }/>
        {/* <Route exact path='/feedBacks' component={FeedBacks}/> */}
        <Route exact path='/login' component={logIn}/>
        <Route exact path='/adminLogin' component={AdminLogin}/>
        <Route exact path='/adminSignup' component={SignUpAdmin}/>
        <Route exact path='/signup' component={signUp}/>
        <ClientRoute exact path='/home' component={() => <ComplainDashboard component={Home} />}/>
        <ClientRoute exact path='/review' component={() => <ComplainDashboard component={Review} />}/>

      </Switch>

    </Router>
    
  )
}

export default App;
