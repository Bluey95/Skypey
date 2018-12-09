import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppRoutes from '../src/routes';

ReactDOM.render(
    <AppRoutes />,
  document.getElementById('root')
);
