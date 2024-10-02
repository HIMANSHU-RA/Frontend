import React, { useState } from "react";
import "./App.css"; 
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const App = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left section (Form) */}
        <div className="form-section">
          <h2 className="welcome-text">WELCOME TO UBUY</h2>
          <div className="button-group">
            <button
              className={`login-button ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
            <button
              className={`signup-button ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
              id="hover"
            >
              Sign Up
            </button>
          </div>
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>

        {/* Right section */}
        <div className="features-section">
          <ul className="features-list">
            <li className="feature-item">Delivering in 10,000+ Cities</li>
            <li className="feature-item">Presence in 6 Continents</li>
            <li className="feature-item">300 Million Products</li>
            <li className="feature-item">
              10 Million Happy Customers & Counting
            </li>
            <li className="feature-item">
              Ubuy Wins Best Cross Border Brand Award in 2023
            </li>
          </ul>
          <div className="promo-container">
            <div className="qr-code">
              <img src="/image/qrcode.jpg" alt="QR Code" />
            </div>
            <div className="promo-text">
              <p>
                DON'T HAVE UBUY APP?
                <br />
                Download it here!
              </p>
              <div className="app-buttons">
                <img src="/image/google-play-badge.png" alt="Google Play" />
                <img src="/image/appstore.png" alt="App Store" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <form className="login-form">
      <div className="form-group">
        <input type="email" className="form-input" placeholder="Email Address*" />
      </div>
      <div className="form-group flex">
        <div className="password-section flex">
          <div className="password-buttons">
            <button className="password-button">Password</button>
            <button className="otp-button">OTP</button>
          </div>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"} 
              id="password"
              className="password-input"
              placeholder="Password *"
            />
            <p className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </p>
          </div>
        </div>
      </div>
      <div className="forgot-password">
        <button className="forgot-password-button">Forgot your password?</button>
      </div>
      <button type="submit" className="submit-button">Log In</button>
      <div className="social-login">
        <div className="social-icons">
          <button className="social-button">
            <img src="/image/google.png" alt="Google" />
          </button>
          <button className="social-button">
            <img src="/image/facebook.png" alt="Facebook" />
          </button>
          <button className="social-button">
            <img src="/image/apple.png" alt="Apple" />
          </button>
          <button className="social-button">
            <img src="/image/paypal.png" alt="PayPal" />
          </button>
          <p className="social-text">Login with Social Accounts</p>
        </div>
      </div>
    </form>
  );
};

const SignupForm = () => (
  <form className="signup-form">
    <div className="form-group">
      <input type="text" className="form-input" placeholder="Full Name*" />
    </div>
    <div className="form-group">
      <input type="email" className="form-input" placeholder="Email Address*" />
    </div>
    <div className="form-group">
      <input type="password" className="form-input" placeholder="Create Password*" />
    </div>
    <div className="form-group">
      <input type="password" className="form-input" placeholder="Confirm Password*" />
    </div>
    <button type="submit" className="submit-button">Sign Up</button>
  </form>
);

export default App;
