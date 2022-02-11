import React from 'react';
import { Button } from 'src/components';

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
            <Button onPress={() => console.log("Hello!")} >
                Login
            </Button>
        </div>
    );
}

export default Login;