import React, { useState } from "react";
import Axios from "axios";
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const PatientLogin = () => {

     
   return  ( <div className="login-background">
     <form className="form" action="/">
       <h1 className="loginheading">Login Form</h1>
       <hr></hr>
   <div className="form-group">
     <label for="email">Email address:</label>
     <input type="email" className="form-control" id="email" />
   </div>
   <div className="form-group">
     <label for="pwd">Password:</label>
     <input type="password" className="form-control" id="pwd" />
   </div>
   <div className="checkbox checkbox-space">
     <label><input type="checkbox" /> Patient</label>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <label><input type="checkbox" /> Admin</label>
   </div>
   <div className="btncenter">
   <button type="submit" className="btn btn-default">Submit</button>
   </div>
 </form>
 </div>
  )
};



export default PatientLogin;
