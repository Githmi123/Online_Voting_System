import React, { useState } from 'react';
import "./AccountPage.css";
import img1 from '../components/icon.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const AccountPage = () => {
    
    return ( 
        <header>
            <div id="hello">
            Hello User!!!
            </div>
            <img id = "icon" src={img1} style={{left:"67px"}}/>
            <div id="profileText">
            Change Profile Picture
            </div> 
            <Link to="/AccountPage">
                <Button id = "delete" >
                Delete Account
                </Button>
            </Link>
            <Link to="/">
                <Button id = "Logout" >
                Logout
                </Button>
            </Link>
            <div id="box">
                <div id="AccountDetails">
                Account Details
                </div>
                <div class="List">
                Full name  :  

                </div>
                <div class="List" style={{top:"67px"}}>

                Email  :  

                </div>
                <div class="List" style={{top:"90px"}}>


                Registered Date  :

                </div>
                <div class="List" style={{top:"116px"}}>

                Stakeholder Role  :  
                </div>

                <Link to="/EditDetailsPage">
                    <Button id = "Edit" >
                    Edit Details
                    </Button>
                </Link>

                
            
            </div>
            <div id="Upcoming">
                Upcoming Elections
            </div> 
            <div id="greenBox">
                <div id="Chairman">
                Chairman - CEO
                </div> 
                <div id="Text">
                Starts on 25.08.2023  At  8.00 pm - 9.00pm
                </div> 
                <div id="Text1">
                Open for All Stakeholders
                </div> 

                <Link to="/VotingPage">
                    <Button id = "Vote" >
                    Vote
                    </Button>
                </Link>
            </div> 
            
                
            
          

        </header>
        
     );
}


export default AccountPage;