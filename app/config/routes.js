import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Success from '../components/Success';
import Home from '../components/Home';
import ResultsContainer from '../containers/ResultsContainer';

// Here we create a description of our routes using react router.
// We set the Main component as the main container for all our routes/pages
// We set the index route/page to be our home component
// We set Thank you route page to Success component
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="thankYou" component={Success} />
      <Route path="results" component={ResultsContainer} />
    </Route>
  </Router>
);
export default routes;
