import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./routes/Home";
import Forum from "./routes/Forum";
import Logout from "./routes/Logout";
import Settings from "./routes/Settings";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<Home />} />
        <Route path="Forum" element={<Forum />} />
        <Route path="Logout" element={<Logout />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
