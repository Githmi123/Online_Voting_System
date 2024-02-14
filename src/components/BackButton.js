import React from 'react';
// import styled from styled-components;
import "./BackButton.css"; 


import { Button } from '@mui/material';
//import {useState} from 'react'

// const ButtonComponent = styled.Button

function BackButton() {
 
  return (
    <div style={{marginTop: "500px", marginLeft: "150px"}}> 
      <Button id = "button" style={{width: "150px"}}>Back
  
</Button>
      
    
    </div>
    
  );
}

export default BackButton;
