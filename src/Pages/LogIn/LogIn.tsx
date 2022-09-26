import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import Home from "../Home/Home";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const handleChange = (e: any) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let mail = localStorage.getItem("Email")?.replace(/"/g,"");
    let pass = localStorage.getItem("Password")?.replace(/"/g,"");

    if(!inputs.email || !inputs.password){
        setFlag(true);
        console.log("empty");

    }else if (inputs.password !== pass || inputs.email !== mail){
        setFlag(true)
    }else{
        setHome(!home)
        setFlag(false);
    }
  };
  
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {home ? (
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
                  boxShadow: "10px 10px 20px #ccc",
                },
              }}
            >
              <Typography variant="h2" padding={3} textAlign="center">
                Login
              </Typography>
    
              <TextField
                onChange={handleChange}
                value={inputs.email}
                name="email"
                margin="normal"
                type={"email"}
                variant="outlined"
                placeholder="Email"
              />
              <TextField
                onChange={handleChange}
                value={inputs.password}
                name="password"
                margin="normal"
                type={"password"}
                variant="outlined"
                placeholder="Password"
              />
              <Button
                type="submit"
                sx={{
                  marginTop: 3,
                  borderRadius: 3,
                }}
                variant="contained"
                color="warning"
              >
                Login
              </Button>
              <Link to="/SignUp" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      marginTop: 3,
                      borderRadius: 3,
                    }}
                  >
                    Change to Signup
                  </Button>
              </Link>
            </Box>
          </form>
      ):(
        <Home />
      )}
    </div>
  );
};

export default LogIn;
