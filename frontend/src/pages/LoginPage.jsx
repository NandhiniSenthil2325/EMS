import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect } from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const user = await login(email, password);
      navigate(user.role === "admin" ? "/admin" : "/employee");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign In</h2>
        {err && <div className="alert">{err}</div>}
        <form onSubmit={submit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
