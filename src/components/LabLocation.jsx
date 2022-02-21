import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Switch } from "react-router-dom";
import './styles/location.css';
import './Patients/css/style.css';
import Location from "./Location";
import './styles/location.css';
import './styles/map.css';

export default function LabLocation() {
  

  return <div className=""> 
  <div className="scroll-up-btn">
    <i className="fas fa-angle-up"></i>
  </div>
  {/* <!--scroll up btn end-->
  <!-- Main wrapper-screen --> */}
  <div className="wrapper" id="main-screen">
    {/* <!-- Header starts--> */}
    <header>
      {/* <!-- Header-top starts--> */}
      <div className="header-top pad-top-btm pad-lft-rth">
        <div>
          {/* <!-- Find a Location Button --> */}
          <Link to="/location">
          <button type="button" className="btn-style">
            <i className="fa-solid fa-location-dot"></i> Find a Location
          </button>
          </Link>
          
          <button type="button " className="btn-style">
            {/* <!-- Book a Lab Visit Button --> */}
            <i className="fa-solid fa-calendar-days"></i> Book a visit
          </button>
        
          <Link to="/report">
          <button type="button " className="btn-style">
            {/* <!-- Reports Button --> */}
            <i className="fa-solid fa-file-chart-column"></i>View Reports
          </button>
          </Link>
          <Link to="/">
        <button type="button" className="btn-style">
          <i className="fa-solid fa-location-dot"></i> Home
        </button>
        </Link>
       
        </div>

        <div className="login-padding">
          {/* <!-- LogIn Button --> */}
        
          {/* <!-- SignUp Button --> */}
          denzel@email.com
          <Link to='/login'>
          <button type="button " id="signup-btn" className="btn-style">
            <i className="fa-solid fa-right-to-bracket"></i> Logout
          </button>
         
          </Link>
        </div>
      </div>
      </header>
      {/* <!-- Header-top ends-->*/}
    <div className="heading-border">
    <div className="heading">Find Location</div>
 </div>
{/* flex */}
<div className="row">
  
  <div className="col-lg-12">
   
    <Location />
  
  </div>
  </div>
  {/* flex end */}
  </div>
  </div>
}