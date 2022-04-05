import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Error from "./Error";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }

    return (
        <div>
            <h1>Log in to NYC Drinkers Society</h1>
            <p>New to NYC Drinkers Society?</p>
            <button><Link to="/signup">Sign Up</Link></button>
            <p>By logging in, you agree to NYC Drinkers Society Terms of Service and Privacy Policy.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" value="Login"></input>
            </form>
            <div>
                {errors.map((err) => (
                <Error key={err}>{err}</Error>
                ))}
            </div>
        </div>

    );
}

export default Login;