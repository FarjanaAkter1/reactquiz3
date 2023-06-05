import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query"
export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  localStorage.setItem(PERSON_KEY,JSON.stringify(person))

  const handleLogin = async () => {

    const url = ' https://jsonplaceholder.typicode.com/posts/'
    const usersQuery= useQuery (`users/1`,async() =>await axios.get(url),{
        
    })




    const p = JSON.parse(localStorage.getItem(PERSON_KEY))
    console.log (p)

    // Store token in localStorage
    
    // Navigate user to home page
  };

  return (
    <div>
      <h1>Welcome to the best App!</h1>
      <div id="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <br />
      </div>
    </div>
  );
};


