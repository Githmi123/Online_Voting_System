import React, { useState } from 'react';
import "./EditDetailsPage.css";
import Header from "../components/Header";
import { AlignHorizontalCenter, AlignVerticalTop } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import img1 from '../components/Register.png';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";


import { Button } from '@mui/material';
// import RegisterButton from "../components/RegisterButton";
/* 

import img2 from '../components/int1.png';
import img3 from '../components/Text.png'; */

//import setBodyColor from '../components/setBodyColor'

   
    
       

    
    

const EditDetailsPage = () => {
    
    return ( 
        <header>
            
                {/* <div id="he">
                 <Header/>
                <img src={img1} style={{ width: '300px', height: '100px' }}/>

                </div> */}
            
            
            <div id = "row">
                <div id ="column" style={{backgroundColor: '#8080A1'}}>
                    <img src={img1} style={{ width: '600px', height: '500px', marginTop: '100px' }}/>
                    
                </div>
                <div id = "column2" style={{ textAlign: 'left'}}>
                    {/* <img src={img3} style={{ width: '930px', height: '550px'}}/> */}
                    
                        <p id = "heading" style={{top: '0', marginTop: '40px',marginLeft: '0px'}}>Edit my account details ...</p>
                        

                        <p class = "attribute" style={{top: '0', marginTop: '90px',marginLeft: '0px', fontFamily: 'sans-serif'}}>First Name</p>
                     

                        <p class = "attribute" style={{top: '0', marginTop: '150px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Last Name</p>
                

                        <p class = "attribute" style={{top: '0', marginTop: '213px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Date of Birth</p>


                        <p class = "attribute" style={{top: '0', marginTop: '276px',marginLeft: '0px', fontFamily: 'sans-serif'}}>National ID No</p>
                     

                        <p class = "attribute" style={{top: '0', marginTop: '339px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Contact No</p>
                      

                        <p class = "attribute" style={{top: '0', marginTop: '402px',marginLeft: '0px', fontFamily: 'sans-serif'}}>Stakeholder Role</p>
                
                </div>    
                        <div id = "row">
                            <div id = "column" className = "buttoncontainer">
                                <Link to="/AccountPage"  className="button-link" style={{ marginTop: '100px', marginRight:'0'}}>
                                {/* <button>Posts</button> */}
                                    <Button class = "back">Back</Button>
                                </Link>
                            </div>
                            <div id = "column" className = "buttoncontainer">
                                <Link to="/AccountPage"  className="button-link" style={{ marginTop: '600px', marginLeft:'0px' }}>
                                {/* <button>Posts</button> */}
                                    <Button id = "edit">Edit login details</Button>
                                        
                                </Link>
                            </div>

                        </div>
                        


                        

                

            </div>
            
                
            
            
            {/* <div id = "root"> 
                hiiiii

                </div>
             */}

        </header>
        
     );
}
 
export default EditDetailsPage;