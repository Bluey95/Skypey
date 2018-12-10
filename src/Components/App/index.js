import Sidebar from '../Sidebar';
import Main from '../Main';
import './index.css'
import React from 'react';
import store from '../../store';
import _ from 'lodash';

const { contacts } = store.getState();


const App = () => {
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;