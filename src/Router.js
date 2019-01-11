import React from 'react';
// import c from './components';
// import Layout from './components/Layout';
import Collection from './components/Collection';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Redirect, Link, Switch } from "react-router-dom";

const Router = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/contacts" component={Collection}/>
      <Route path="/contacts/:id" component={NotFound}/>
      <Redirect from='/' to='/contacts'/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>;


export default Router;
