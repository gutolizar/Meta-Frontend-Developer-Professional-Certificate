//App.js

import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div> 
	  <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;

//Contact.js

function Contact(props) {
    return (        
        <h1>Contact Little Lemon on this page.</h1>     
    )
}

export default Contact

//Homepage.js

function Homepage() {
    return (
        <h1>Welcome to the Little Lemon site</h1>
    )
}

export default Homepage

//index.js

import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

//AboutLittleLemon.js

function AboutLittleLemon() {
    return (
        <h1>About AboutLittleLemon</h1>
    )
}

export default AboutLittleLemon

//App.css

* {
    font-family: sans-serif;
}
nav {
    background: #ee9972;
    padding: 20px;
}
nav a {
    color: #edefee;
    text-decoration: none;
    font-size: 20px;
    margin-right: 20px;
}
