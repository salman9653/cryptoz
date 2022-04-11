import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import store from './app/store'
import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)