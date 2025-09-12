import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState(''); // New state for success message
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    setSuccess(''); // Clear previous messages
    try {
      const user = await login(email, password);
      setSuccess('Login Successful! Redirecting...'); // Set success message
      setTimeout(() => {
        navigate(user.role === 'admin' ? '/admin' : '/employee');
      }, 1000); // Wait 1 second before redirect to show message
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <header>Sign in</header>
        {err && <div className="alert">{err}</div>}
        {success && <div className="success">{success}</div>} {/* Display success */}
        <form onSubmit={submit}>
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit" id="loginbtn">Login</button>
          <p className="hint">
            Demo: <b>admin@demo.com / admin123</b> or <b>john@demo.com / john123</b>
          </p>
        </form>
      </div>
    </div>
  );
}
