import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../Components/App';
import SignUp from '../Containers/SignUp';

const AppRoutes = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;