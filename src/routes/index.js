import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../Components/App';
import SignUp from '../Containers/SignUp';
import Login from '../Containers/Login';

const AppRoutes = () => {

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;