import React, { useState } from 'react';
import "./EmailRegistrationPage.css";
import img1 from '../components/box.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
 

const EmailRegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    
    // const navigate = useNavigate();
    return ( 
        <header>
            
                <div id="box">
                    <div id = "heading">
                        Register through your email
                    </div>
                    <div class = "TextName">
                        Email Address
                    </div>
                    <input class="TextBox" type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {/* <div class = "TextBox">

                    </div> */}
                    <div class = "smallText">
                        This will be used as your email address for Future Logins and Votings
                    </div>
                    <div class = "TextName" style={{top: '275px'}}>
                        Password
                    </div>
                    <input class="TextBox" type='text' value={password} onChange={(e) => setPassword(e.target.value)} style={{top: '325px'}}/>

                    
                    <div class = "smallText" style={{top: '377px'}}>
                        Password must contain more than 8 characters. Tip: include digits and special characters for better security.
                    </div>
                    <div class = "TextName" style={{top: '400px'}}>
                        Re-enter Password
                    </div>
                    <input class="TextBox" type='text' value={rePassword} onChange={(e) => setRePassword(e.target.value)} style={{top: '448px'}}/>
                    
                    
                    <div class = "smallText" style={{top: '500px'}}>
                        Confirm your password.
                    </div>
                    
                        <Link to="/">
                            <Button class = "cancel" style={{top: '650px', width: '100px', left: '200px', textAlign: 'center'}}>
                            Cancel
                            </Button>
                        </Link>
                            
                        <Link to="/RegistrationSuccessfulPage">
                            <Button class = "cancel" style={{top: '650px', width: '100px', left: '500px', textAlign: 'center', backgroundColor: '#8AB5E5'}}>
                            Register
                            </Button>
                        </Link>

                   
                    
                </div>
            
            
            
            
                
            
          

        </header>
        
     );
}


export default EmailRegistrationPage;