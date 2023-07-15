import { useState } from "react";
export default function RegisterPage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    try{
      await fetch('http://localhost:4000/register',{
      method: 'POST',
      body: JSON.stringify({username: username, password: password}),
      headers: { 'Content-Type': 'application/json',}

    })}catch(e){
      alert('Register failed');
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