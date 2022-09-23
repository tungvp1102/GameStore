import React, { useEffect } from 'react'
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react"
import axios from 'axios'

const LogIn = () => {
   
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name:"", email:"", password:"",
    });
    const handleChange = (e: any) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, 
        }))
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(inputs);
    };
    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({name:'',email:"", password:""})
    }
  return (
    <div style={{backgroundColor: '#fff'}}>
        <form onSubmit={handleSubmit}>
            <Box 
                display="flex"
                flexDirection={"column"}
                maxWidth={400}
                alignItems="center"
                justifyContent={"center"}
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={5}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px #ccc',
                        }
                    }}
            >
                <Typography variant='h2' padding={3} textAlign="center">
                    {isSignup ? "Signup" : "Login"}
                </Typography>
                {isSignup && (
                    <TextField 
                        onChange={handleChange}
                        value={inputs.name}
                        name="name"
                        margin="normal" 
                        type={'text'} 
                        variant="outlined" 
                        placeholder='Name' 
                    />
                )}
                
                <TextField 
                    onChange={handleChange}
                    value={inputs.email}
                    name="email"
                    margin="normal" 
                    type={'email'} 
                    variant="outlined" 
                    placeholder='Email' 
                />
                <TextField 
                    onChange={handleChange}
                    value={inputs.password}
                    name="password" 
                    margin="normal" 
                    type={'password'} 
                    variant="outlined" 
                    placeholder='Password' 
                />
                <Button 
                    
                    type="submit"
                    sx={{
                        marginTop: 3,
                        borderRadius: 3
                    }}
                    variant='contained' 
                    color='warning'
                >
                    {isSignup ? "Signup" : "Login"}
                </Button>
                <Button 
                    onClick={resetState} 
                    sx={{
                        marginTop: 3,
                        borderRadius: 3
                    }}>
                    Change to {isSignup ? "Login" : "Signup"}
                </Button>
            </Box>
        </form>
    </div>
  )
}

export default LogIn