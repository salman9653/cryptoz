import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import 'antd/dist/antd.css';

import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
)