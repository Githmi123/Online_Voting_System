import React, { useState } from 'react';
import "./VotingPage.css";
import img1 from '../components/VictoryHoldings Logo.png';
import img2 from '../components/man1.png';
import img3 from '../components/man2.png';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const VotingPage = () => {
    
    return ( 
        <header>
            
            <div id = "page" style={{backgroundColor:"#1A2023"}}>
                <div id='whiteboxcontent'>
                    <div class = 'whiteboxtext'>
                    This election is being conducted by Victory Holdings PLC
                    </div>
                    <div class = 'whiteboxtext' style={{textDecorationLine: 'underline', top: '20px'}}>
                    Steps
                    </div>
                    <div class = 'whiteboxtext' style={{top: '40px', fontSize:'17px', fontWeight: "normal"}}>
                    Carefully read all the qualifications of each candidate.
                    </div>
                    <div class = 'whiteboxtext' style={{top: '60px', fontSize:'17px', fontWeight: "normal"}}>
                    Click “Vote” button for yor desired candidate.
                    </div>
                    <div class = 'whiteboxtext' style={{top: '80px', fontSize:'17px', fontWeight: "normal"}}>
                    You are able to vote only for one candidate.
                    </div>
                    <div class = 'whiteboxtext' style={{top: '100px', fontSize:'17px', fontWeight: "normal"}}>
                    Please ensure that your vote is fair and transparent.
                    </div>
                    <div class = 'whiteboxtext' style={{top: '120px', fontSize:'17px', fontWeight: "normal"}}>
                    The confidentiality of your vote is ensured.
                    </div>

                    





                </div>

                <img src={img1} id = "image"/>
                <div id = "bluebox">
                    <div class = 'box'>
                        
                    </div>
                    <div class = 'box' style={{top: '270px'}}>
                        
                    </div>
                    <div class='text1'>
                        Candidate 01: 
                    </div>
                    <div class='text1' style={{top: '90px', left:'70px'}}>
                    Mr. George de Silva

                    </div>
                    <Link to="/AccountPage">
                        <Button class = "button1" >
                        See Qualifications
                        </Button>
                    </Link>
                    <Link to="/ThankYou">
                        <Button class = "vote" >
                        Vote
                        </Button>
                    </Link>
                    <img src={img2} id = "image2"/>




                    <div class='text1' style={{top: '300px'}}>
                        Candidate 02: 
                    </div>
                    <div class='text1' style={{top: '350px', left:'70px'}}>
                    Mr. David Batuwanthudawa


                    </div>
                    <Link to="/">
                        <Button class = "button1" style={{top: '300px'}}>
                        See Qualifications
                        </Button>
                    </Link>
                    <Link to="/ThankYou">
                        <Button class = "vote" style={{top: '395px'}}>
                        Vote
                        </Button>
                    </Link>
                    <img src={img3} id = "image2" style={{top: '295px'}}/>
                </div>
                <Link to="/">
                        <Button class = "exit">
                        Exit
                        </Button>
                </Link>


            </div>
            
            
            
          

        </header>
        
     );
}


export default VotingPage;