import 'purecss/build/pure.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
// // import Contact from "./components/Contact";
import * as serviceWorker from './serviceWorker';
// import { Router } from 'react-router';
import Router from "./Router";
import stores from './stores';


ReactDOM.render(<Provider contacts ={stores.contacts}>
  <Router/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
