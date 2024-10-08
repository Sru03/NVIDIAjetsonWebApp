import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Display from './Navigation/screens/Display';
import DataAnalysis from './Navigation/screens/DataAnalysis';
import Test from './Navigation/screens/Test';
import Map from './Navigation/screens/Map';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Display" element={<Display />} />
        <Route path="/DataAnalysis" element={<DataAnalysis />} />
        <Route path="/Map" element={<Map/>}/>
        <Route path="/Test" element={<Test/>}/>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
