import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from '../src/routes';
import registerServiceWorker from "./registerServiceWorker"; 
import store from './store';
import 'bootstrap';

const render = () => {
  fancyLog();
  return ReactDOM.render(
    <AppRoutes />,
  document.getElementById('root')
);
}

render();
store.subscribe(render);
registerServiceWorker();

function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
}