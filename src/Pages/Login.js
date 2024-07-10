import React, { useState } from 'react';


const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className='loginPage text-center my-5'>
            <div className={`wrapper ${isSignUp ? 'animate-signUp' : 'animate-signIn'}`}>
              <div className="form-wrapper sign-up">
                  <form>
                      <h2>Sign Up</h2>
                      <div className="input-group">
                          <input type="text"   />
                          <label>Username</label>
                      </div>
                      <div className="input-group">
                          <input type="email"   />
                          <label>Email</label>
                      </div>
                      <div className="input-group">
                          <input type="password"   />
                          <label>Password</label>
                      </div>
                      <button type="submit" className="btn">Sign Up</button>
                      <div className="sign-link">
                          <p>Already have an account? <button className="signIn-link" onClick={toggleForm}>Sign In</button></p>
                      </div>
                  </form>
              </div>

              <div className="form-wrapper sign-in">
                  <form>
                      <h2>Login</h2>
                      <div className="input-group">
                          <input type="text"   />
                          <label>Username</label>
                      </div>
                      <div className="input-group">
                          <input type="password"   />
                          <label>Password</label>
                      </div>
                      <div className="forgot-pass">
                          <a href="#">Forgot Password?</a>
                      </div>
                      <button type="submit" className="btn">Login</button>
                      <div className="sign-link">
                          <p>Don't have an account? <button className="signUp-link" onClick={toggleForm}>Sign Up</button></p>
                      </div>
                  </form>
                </div>
            </div>
        </div>
    );
};

export default Login;