import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../Components/App';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRoutes;