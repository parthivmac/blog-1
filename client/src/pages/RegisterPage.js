import { useState } from "react";
export default function RegisterPage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    await fetch('http ://localhost:4000/register',{
      method: 'POST',
      body: JSON.stringify({username: username, password: password}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override, Accept',
        'Access-Control-Allow-Credentials': 'true'
      }

    });
    }
    return(
        <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={register}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" 
          name="username"
          placeholder="Enter your username" required 
          value={username} 
          onChange={ev=> setUsername(ev.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
          type="password"
          id="password"
          name="password"
           placeholder="Enter your password" required 
           value={password}
           onChange={ev=> setPassword(ev.target.value)}/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    );
}