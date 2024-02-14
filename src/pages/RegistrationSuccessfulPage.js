import React, { useState } from 'react';
import "./RegistrationSuccessfulPage.css";
import img1 from '../components/image.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const RegistrationSuccessfulPage = () => {
    
    return ( 
        <header>
            <div>
                <div id = "greenBox">
                    <div id = "Heading1">
                        Congratulations!!!!!! 
                        You have successfully registered
                    </div>
                    <img id = "img" src={img1} style={{left:"112px"}}/>

                    <div id = "text1"> 
                    Registration Successful!
                    </div>

                    <div id ="ready">
                    You are ready to Vote ....
                    </div>

                    <Link to="/AccountPage">
                            <Button id = "button" style={{top: '850px', width: '250px', left: '210px', textAlign: 'center'}}>
                            Go to your Account
                            </Button>
                    </Link>

                </div>
            </div>
                
            
            
                
            
          

        </header>
        
     );
}


export default RegistrationSuccessfulPage;