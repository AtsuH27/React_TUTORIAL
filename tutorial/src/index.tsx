import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from "./test";
import {BrowserRouter,Route,Routes}from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path = "/"element={<App />}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
