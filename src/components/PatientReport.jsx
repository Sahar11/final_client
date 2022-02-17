import {useEffect, useState } from "react";
import axios from "axios";
import "./styles/report.css"
import ReportTemplate from './ReportTemplate';

export default function PatientReport() {
  const [state, setState] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/report")
    .then((res) => {
      console.log('response', res.data);
      setState(res.data)
    })
    .catch(error => console.log(`Error: ${error}`));
  
}, []);
return state.map((patient, index) => (
 <div key={index} className="files"><img src={patient.report} alt="file" /></div>
))
} 