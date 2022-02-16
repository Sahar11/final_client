import {useEffect, useState } from "react";
import axios from "axios";
// import "./styles/report.css"
//import { Fragment } from "react/cjs/react.production.min";

export default function PatientReport() {
  const [report, setReport] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/report")
    .then((res) => {
      console.log('response', res.data);
      setReport(res.data)
    })
    .catch(error => console.log(`Error: ${error}`));
  
}, []);
return report.map((patient) => 
<button className="links" key={patient.id}> {patient.report } </button>) 
  
  
} 