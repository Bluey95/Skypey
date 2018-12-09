import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../Components/App';
let server = require('http').Server(app);

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("App is running on port " + port);
});

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