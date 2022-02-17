import { useState } from "react";
import axios from "axios";
import "./styles/lab.css"

export default function LabUpload() {
  const [patient, setPatient] = useState("")
 const [name, setName] = useState("");
 const [health, setHealth] = useState("");
 const [upload, setUpload] = useState("");
 const [test, setTest] = useState("");
 const [date, setDate] = useState("");
  

 const onSubmit = event => {
  event.preventDefault();
   //let file = event.target.files[0];
   //console.log(file)
  let formData = new FormData();
   formData.append('file', upload);
   //formData.append('filename',formData.get('file').name )
   formData.append('patient_id', patient);
   formData.append('fullname', name);
   formData.append('health', health);
   formData.append('upload', upload);
   formData.append('test', test);
   formData.append('date', date);
   //console.log("File name: ",formData.get('file').name);
 
  // const labResult = {
  //   patient_id: patient,
  //   fullname: name,
  //   health: health,
  //   upload: formData,
  //   test:test,
  //   date: date
  // }
  axios.post("http://localhost:8080/lab", formData)
 .then(res => console.log(res))
 .catch(err => console.log(err.data))
}
const fileSelectedHandler = event => {
  setUpload(event.target.files[0] )
}
  return (
   
    <div className="form container-sm">
       <h1>Reports</h1>
    <form onSubmit={onSubmit} className="row g-3" encType="multipart/form-data">
    <div className="grid">
       <div className="row mb-3">
        <input type="integer" name="patient_id"
          value={patient} placeholder="Patient id" className="form-control"
          onChange={event => setPatient(event.target.value)} />
      </div>
       <div className="row mb-3">
        <input type="text" name="fullname"
          value={name} placeholder="Enter Patients Full Name" className="form-control"
          onChange={event => setName(event.target.value)} />
      </div>
       <div className="row mb-3">
        <input type="number" name="health"
          value={health} placeholder="HealthCard"
          className="form-control"
          onChange={event => setHealth(event.target.value)} />
      </div>
      {/* file */}
       <div className="row mb-3">
        <input type="file" name="selectedFile"
        
         placeholder="Upload Document"
          className="form-control"
          id="formFile"
          onChange={fileSelectedHandler} />
           
      </div>
      {/* end file */}
       <div className="row mb-3">
        <input type="text" name="test"
          value={test} placeholder="Enter Test type"
          className="form-control"
          onChange={event => setTest(event.target.value)} />
      </div>
       <div className="row mb-3">
        <input type="date" name="date"
          value={date} placeholder="Select Date"
          className="form-control"
          onChange={event => setDate(event.target.value)} />
      </div>
       <div className="mb-3">
       <div className="col-sm-9">
        <button type="submit" className="btn btn-primary" name="commit">Submit</button>
        </div>
      </div>
      </div>
    </form>
    </div>

  );
} 