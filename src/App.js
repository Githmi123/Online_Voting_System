import React from 'react';
import './index.css';
import HomePage from './pages/HomePage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import necessary components
import RegisterDetailsPage from './pages/RegisterDetailsPage';
import EmailRegistrationPage from './pages/EmailRegistrationPage';
import RegistrationSuccessfulPage from './pages/RegistrationSuccessfulPage';
import VotingPage from './pages/VotingPage';
import ThankYou from './pages/ThankYou';
import Header from './components/Header'
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import LoginPagePage from './pages/LoginPagePage';
import EditDetailsPage from './pages/EditDetailsPage';
import AboutPage from './pages/AboutPage';

import { useEffect } from 'react';
import axios from "axios";
//import {useState} from 'react'

function App() {
  

  useEffect(()=>{
    axios.get('http://localhost:5555/voters')
    .then(
      response=>console.log(response)
    )

  }, []) 
  //const[color, setColor] = useState("blue")
  return (
    <div style={{backgroundColor: "white"}} >
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPagePage/>}></Route>
        <Route exact path="/RegisterDetailsPage" element={<RegisterDetailsPage/>}></Route>
        <Route exact path="/EmailRegistrationPage" element={<EmailRegistrationPage/>}></Route>
        <Route exact path="/RegistrationSuccessfulPage" element={<RegistrationSuccessfulPage/>}></Route>
        <Route exact path="/AccountPage" element={<AccountPage/>}></Route>
        <Route exact path="/VotingPage" element={<VotingPage/>}></Route>
        <Route exact path="/ThankYou" element={<ThankYou/>}></Route>
        <Route exact path="/LoginPage" element={<LoginPage/>}></Route>
        <Route exact path="/EditDetailsPage" element={<EditDetailsPage/>}></Route>
        <Route exact path="/AboutPage" element={<AboutPage/>}></Route>
        {/* Define other routes as needed */}
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
/* function App() {
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes as needed */
/*     </Routes>
  </Router>,
  document.getElementById('root')
)}; */
/* export default App;  */