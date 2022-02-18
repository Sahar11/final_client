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
  const [patient, setPatient] = useState({});

  const showModal = (patient) => {
    setIsOpen(true);
    setTitle("Report");
    setPatient(patient)
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

  const download= (url) => {
    window.open(url);
  }


  const [state, setState] = useState([]);
 
  useEffect(() => {
    axios.get("/report")
    .then((res) => {
      console.log('response', res.data);
      setState(res.data)
    })
    .catch(error => console.log(`Error: ${error}`));
  
}, []);



return <div className="card"> <h1 className="heading" > View Reports</h1> 
{ 
state.map((patient) => (

  <div key={patient.id}  className="alignModal">
 <div className = "btnCenter"> <button className="btn btn-primary" onClick={() => showModal(patient)}>Display Report</button> 
 <button className="btn btn-primary" onClick={() => download(patient.download_url)}>download</button>
 <span className="patientDetails"><b className="space">{patient.test_type}</b><em>{new Date(patient.date).toLocaleDateString()}</em> </span> 
 
  </div>
  </div>
  )) }
      <Modal
        show={isOpen}
        onHide={hideModal}
        onEnter={startTimer}
        onEntered={modalLoaded}
      >
        
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>{patient.id}<img src={patient.report_url} alt="report" width="200px" height="300px" /></div></Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={hideModal}>Close</button>
        </Modal.Footer>
      </Modal>
      
   
  
  
{/* //  <div key={index} className="files"><img src={patient.report} alt="file" /></div> */}


</div>
} 