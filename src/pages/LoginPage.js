import React, { useState } from 'react';
import "./LoginPage.css";
import img1 from '../components/vote.png';
import img2 from '../components/man1.png';
import img3 from '../components/man2.png';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const LoginPage = () => {
    
    return ( 
        <header>
            
            <img id = "img" src={img1} />
            <div id='grey'>

            </div>

            <div id = 'login'>
                Login
            </div>

            <div class='name'>
            Email Address
            </div>
            <div class='textbox'>

            </div>
            <div class='name'style={{top:'450px'}}>
            Password
            </div>
            <div class='textbox' style={{top:'365px'}}>
                
            </div>
            <Link to="/AccountPage">
                <Button id = "login1" >
                Login
                </Button>
            </Link>
            <div class = 'blue'>
            Forgot Password?
            </div>

            <div class='white'>
            No account?
            </div>
            <div class = 'blue' style={{top:'645px', left: '910px'}}>
            Register now
            </div>
          

        </header>
        
     );
}


export default LoginPage;