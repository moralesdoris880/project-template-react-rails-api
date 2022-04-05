import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";


function App() {

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/login" exact element={<Login />}/>
        <Route path="/signup" exact element={<SignUp />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
