import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    let navigate = useNavigate();
    // const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name:"", email:"", password:"",
    });
    const [flag, setFlag] = useState(true);

    const handleChange = (e: any) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, 
        }))
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(!inputs.name || !inputs.email || !inputs.password){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("Email", inputs.email);
            localStorage.setItem("Password", inputs.password);

            console.log("Saved in local strorage")
        }
        return navigate("/log-in");
    };

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
                    Signup
                </Typography>
                
                    <TextField 
                        onChange={handleChange}
                        value={inputs.name}
                        name="name"
                        margin="normal" 
                        type={'text'} 
                        variant="outlined" 
                        placeholder='Name' 
                    />
                
                
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
                    Signup
                </Button>
                <Link to='/log-in' style={{ textDecoration: "none" }}>
                    <Button 
                        sx={{
                            marginTop: 3,
                            borderRadius: 3
                        }}>
                        Change to Login
                    </Button>
                </Link>
            </Box>
        </form>
    </div>
  )
}

export default SignUp;