import React from 'react';
import '../styles/SignUp.scss';

function SignUp() {
	return (
		<div className="signup">
      <div className="form-container">
        <h1 className="title">CRC-cards</h1>
        <form action="/" className="form">
          <label for="user" className="label">User</label>
          <input type="text" id="user" placeholder="" className="input"  required/>

          <label for="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" required/>

					<label for="confirm_password" className="label">Confirm Password</label>
          <input type="password" id="confirm_password" placeholder="*********" className="input input-password" required/>

          <input type="submit" value="Create Account" className="primary-button signup-button" />          
 
        </form>
      </div>
    </div>
	);
}

export {SignUp};