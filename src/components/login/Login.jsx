import React from "react";

export default function Login() {
  return (
    <div class="login-card">
      <h2>Login</h2>
      <form>
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  )
};