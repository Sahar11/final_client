import React, {useEffect, useState } from "react";
import axios from "axios";
import "./styles/report.css"
import { Document, Page} from 'react-pdf';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSaver from 'file-saver';
 import DownloadLink from "react-download-link";


export default function PatientReport() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [timer, setTimer] = React.useState(0);
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);

  const showModal = () => {
    setIsOpen(true);
    setTitle("Report");
    document.body.style.backgroundColor = "white";
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const startTimer = () => {
    setStartTime(Date.now());
  };

  const modalLoaded = () => {
    setEndTime(Date.now());
  };


  const [state, setState] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/report")
    .then((res) => {
      console.log('response', res.data);
      setState(res.data)
    })
    .catch(error => console.log(`Error: ${error}`));
  
}, []);



return <div className="card"> <h1 className="heading" > View Reports</h1> 
{ 
state.map((patient, index) => (

  <div key={index}  className="alignModal">
 <div className = "btnCenter"> <button className="btn btn-primary" onClick={showModal}>Display Report</button>
 <span className="patientDetails"><b className="space">{patient.test_type}</b><em>{new Date(patient.date).toLocaleDateString()}</em> </span> 
 
  </div>
      
      <Modal
        show={isOpen}
        onHide={hideModal}
        onEnter={startTimer}
        onEntered={modalLoaded}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={patient.report} alt="report" /></Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={hideModal}>Close</button>
        </Modal.Footer>
      </Modal>
      
   </div>
   
  
//  <div key={index} className="files"><img src={patient.report} alt="file" /></div>

)) }
</div>
} 