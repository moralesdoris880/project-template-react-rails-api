import React, {} from "react";
import {Link} from 'react-router-dom';


function NavBar(){

    return (
        <div style={{display: 'flex'}}>
            <h1>NYC Drinkers Society</h1>
            <input placeholder="Find drinks, restaurants..."></input>
            <button>Search</button>
            <button>
            <Link to="/login">Login</Link>
            </button>
            <button><Link to="/signup">Sign Up</Link></button>
        </div>

    );
}

export default NavBar;