import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/location.css'
import Location from "./Location";
import Search from "./Search";
import axios from "axios";
import './styles/location.css';

export default function LabLocation() {
  
  

  return <div className="container-fluid">
    <div clasName="heading">Lab Location</div>
 
{/* flex */}
<div className="row add_padding">
  
  <div className="col-lg-12">
   
    <Location />
   
   
  </div>
  {/* <div className="col-lg-6"></div> */}
  </div>
  {/* flex end */}
  </div>
}