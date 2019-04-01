import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from 'react-router-dom';


  const App = () => (
    <Router>
      <div>
        <Navigation />
      </div>
    </Router>
  );


export default App;
