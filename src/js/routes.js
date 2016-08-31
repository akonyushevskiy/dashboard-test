import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
