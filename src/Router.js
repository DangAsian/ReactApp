import React from 'react';
import c from './components';
// import Layout from './components/Layout';
import Collection from './components/Contacts/Collection';
import Layout from './components/Layout';
// import ContactInfo from './components/ContactInfo';
import Show from './components/Contacts/Show';
// import New from './components/Sessions/New';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const Router = () =>
  <BrowserRouter>
    <Switch>
      <Route path='contacts' component={c.Layout}/>
      <Route exact path="/contacts" component={Collection}/>
      <Route path="/contacts/:id" component={Show}/>
      <Route path='users'>
        {/* <Route path='sign_in' component={New}/> */}
      </Route>
      <Redirect from='/' to='/contacts'/>
      {/* <Route component={Show}/> */}
    </Switch>
  </BrowserRouter>;


export default Router;
