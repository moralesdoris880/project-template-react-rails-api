import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/login" exact element={<Login user={user} />}/>
        <Route path="/signup" exact element={<SignUp />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

/* 

  

  ; 
*/