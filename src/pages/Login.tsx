import React from 'react';
import { Button } from 'src/components';
import { Link } from "react-router-dom";

function Login() {
    
    return (
        <div>
            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Password" />
            </div>
            <Link to="/listOfUsers">  
                <Button onPress={() => console.log("Hello!")} >
                    Login
                </Button>
            </Link>
        </div>
    );
}

export default Login;