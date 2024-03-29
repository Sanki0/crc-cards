import React from 'react';
import '../styles/SignIn.scss';
import { Header } from "../components/Header";

function SignIn() {
  
  return (
    <>
      <Header />
      <div className="SignIn">
        <div className="form-container">
          <h1 className="title">CRC-cards</h1>
          <form action="/" className="form">
            <label for="user" className="label">User</label>
            <input type="text" id="user" name="name" placeholder="" className="input" required />

            <label for="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" required />

            <input type="submit" value="Sign in" className="primary-button signin-button" />
            <input type="submit" value="Sign up" className="primary-button signup-button" />
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
export { SignIn };