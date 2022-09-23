import React from 'react'
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react"

const LogIn = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name:"", email:"", password:"",
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, 
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };
    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({name:'',email:"", password:''})
    }
  return (
    <div>
        <form>
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
                        value={inputs.name}
                        name="name"
                        margin="normal" 
                        type={'text'} 
                        variant="outlined" 
                        placeholder='Name' 
                    />
                )}
                
                <TextField 
                    value={inputs.email}
                    name="email"
                    margin="normal" 
                    type={'email'} 
                    variant="outlined" 
                    placeholder='Email' 
                />
                <TextField 
                    value={inputs.password}
                    name="password" 
                    margin="normal" 
                    type={'password'} 
                    variant="outlined" 
                    placeholder='Password' 
                />
                <Button 
                    sx={{
                        marginTop: 3,
                        borderRadius: 3
                    }}
                    variant='contained' 
                    color='warning'
                >
                    Login
                </Button>
                <Button onClick={()=>setIsSignup(!isSignup)} sx={{
                        marginTop: 3,
                        borderRadius: 3
                    }}>
                    Change to {isSignup ? "Signup" : "Login"}
                </Button>
            </Box>
        </form>
    </div>
  )
}

export default LogIn