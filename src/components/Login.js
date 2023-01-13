import React from "react";
import "../App.css";
import { SocialIcon } from 'react-social-icons';
export default function Login() {
  return (
    <div className="login-main">
      <form method="POST">
      <label id="border"></label>
        <input type="text" id="uemail" placeholder="Email Address" />
        <br />
        <input type="password" id="upass" placeholder="Password" />
        <br />
        <br />
        <input type="button" id="login-btn" value="LOGIN" name="submit" />
        <p id="forget-pass">Forget Password?</p>
      </form>
      
      <div>
        <p style={{color:"rgb(137, 137, 137)"}}>or login with</p>
        <div className="social-icon">
        <SocialIcon network="google" fgColor="#db3236" bgColor="#ffffff" />
        <SocialIcon network="facebook" fgColor="#3b5998" bgColor="#fffff3" />
        <SocialIcon network="twitter" fgColor="#00acee" bgColor="#fffff3" />
        </div>
        <br/>
        <p id="bottom-para">Don't have an account?<strong style={{color:"#ff43a4"}}>Create new now!</strong></p> 
        <br/>
        <p id="bottom-para">By Signing up, you are agree with our <u style={{color:"#ff43a4"}}>Terms & Conditions</u></p>
      </div>
     
    </div>
  );
}
