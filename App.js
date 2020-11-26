import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className='App'>
        <Dashboard />
    </div>
  );
}

export default App;
