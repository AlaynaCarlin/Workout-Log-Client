import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/login", {// sending a fetch to the endpoint determined by our server
            method: 'POST', // the method of the fetch is a POST
            body: JSON.stringify({ user: { username: username, password: password } }), // including a body with our state  info. This has to match what the backend is expecting
            headers: new Headers({
                'Content-Type': 'application/json' // lets the server know what type of information we are sending it
            })
        }).then(
            (response) => response.json() // jsonify the response
        ).then((data) => {
            props.updateToken(data.sessionToken) // sending the sessionToken to the updateToken function
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    );
};

export default Login;