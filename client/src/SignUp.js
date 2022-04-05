import React, { useState } from "react";

function SignUp(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");

    function handleSignup(e){
        e.preventDefault();
        fetch("https://protected-oasis-61636.herokuapp.com/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
              password_confirmation: passwordConfirmation,
              email
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then(() => console.log("created!"));
            } else {
              r.json().then(() => console.log("Not created :<"));
            }
          });
    }

    return(
        <div>
            <h1>Sign Up for NYC Drinkers Society</h1>
            <p>By logging in, you agree to NYC Drinkers Society Terms of Service and Privacy Policy.</p>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                <input type="text" placeholder="Re-enter Password" onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    );
}

export default SignUp;