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



return <div className="card"> <div className="card-header"> <h1 className="heading" > View Reports</h1> 
</div>
{ 
state.map((patient) => (

   <div key={patient.id}  className="card-body">
     <div className="alignModal"> 

 <div className = "btnCenter list-group-item list-group-item-secondary list-group"> <button className="btn btn-primary btn-sm" onClick={() => showModal(patient)}>Display Report</button> 
 <button className="btn btn-outline-primary btn-sm" onClick={() => download(patient.download_url)}>Download Report</button>
 <b className="space patientDetails">{patient.test_type}{new Date(patient.date).toLocaleDateString()} </b>
 </div>
  </div>
  </div>
  )) }
      <Modal
        show={isOpen}
        onHide={hideModal}
      >
        
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={patient.report_url} alt="report" width="200px" height="300px" /></Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={hideModal}>Close</button>
        </Modal.Footer>
      </Modal>
      
   
  
  
{/* //  <div key={index} className="files"><img src={patient.report} alt="file" /></div> */}


</div>
} 