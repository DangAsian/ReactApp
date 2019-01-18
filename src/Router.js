import React from 'react';
// import c from './components';
// import Layout from './components/Layout';
import Collection from './components/Collection';
// import ContactInfo from './components/ContactInfo';
import Show from './components/Show';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const Router = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/contacts" component={Collection}/>
      <Route path="/contacts/:id" component={Show}/>
      <Redirect from='/' to='/contacts'/>
      {/* <Route component={Show}/> */}
    </Switch>
  </BrowserRouter>;


export default Router;
