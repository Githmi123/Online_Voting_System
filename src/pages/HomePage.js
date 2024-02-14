import React from 'react';
import "./HomePage.css";
import Header from "../components/Header";
import RegisterButton from "../components/RegisterButton";
// import { useNavigate } from 'react-router-dom';
import img1 from '../components/VictoryHoldings Logo.png';
import img2 from '../components/int1.png';
import img3 from '../components/Text.png';
import { AlignHorizontalCenter } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';
//import setBodyColor from '../components/setBodyColor'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

   
    
       

    
    

const HomePage = () => {
    // const navigate = useNavigate();
    return ( 
        <header id="he1">
                <Link to="/LoginPage">
                    <Button id = "login" >
                    LOGIN
                    </Button>
                </Link>
                <Link to="/AboutPage">
                    <Button id = 'text' >
                    About
                    </Button>
                </Link>
                
                <div id="he">
                {/* <Header/> */}
                <img src={img1} style={{ width: '300px', height: '100px' }}/>

                </div>
            
            
            <div id = "row">
                <div id ="column">
                    <img src={img2} style={{ width: '600px', height: '600px' }}/>
                </div>
                <div id = "column" style={{ textAlign: 'left'}}>
                    <img src={img3} style={{ width: '930px', height: '550px'}}/>
                    <Link to="/RegisterDetailsPage">
                        {/* <button>Posts</button> */}
                        <RegisterButton id = "registerButton" >
                        <span id="register-button-text">REGISTER TO VOTE</span>
                        </RegisterButton>
                    </Link>
                    
                </div>

            </div>
            
                
            
            
            <div id = "root">
                

            </div>
            

        </header>
        
     );
}

//const navigate = useNavigate();

export default HomePage;