import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../Components/App';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;