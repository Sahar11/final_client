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
  const labResult = {
    patient_id: patient,
    fullname: name,
    health: health,
    upload: upload,
    test:test,
    date: date
  }
  axios.post("http://localhost:8080/lab", labResult)
 .then(res => console.log('Data send'))
 .catch(err => console.log(err.data))
}

  return (
   
    <div className="form container-sm">
       <h1>Reports</h1>
    <form onSubmit={onSubmit} className="row g-3">
    <div className="grid">
       <div class="row mb-3">
        <input type="integer" name="patient_id"
          value={patient} placeholder="Patient id" className="form-control"
          onChange={event => setPatient(event.target.value)} />
      </div>
       <div class="row mb-3">
        <input type="text" name="fullname"
          value={name} placeholder="Enter Patients Full Name" className="form-control"
          onChange={event => setName(event.target.value)} />
      </div>
       <div class="row mb-3">
        <input type="number" name="health"
          value={health} placeholder="HealthCard"
          className="form-control"
          onChange={event => setHealth(event.target.value)} />
      </div>
       <div class="row mb-3">
        <input type="file" name="upload"
          value={upload} placeholder="Upload Document"
          className="form-control"
          id="formFile"
          onChange={event => setUpload(event.target.value)} />
           
      </div>
       <div class="row mb-3">
        <input type="text" name="test"
          value={test} placeholder="Enter Test type"
          className="form-control"
          onChange={event => setTest(event.target.value)} />
      </div>
       <div class="row mb-3">
        <input type="date" name="date"
          value={date} placeholder="Select Date"
          className="form-control"
          onChange={event => setDate(event.target.value)} />
      </div>
       <div class="mb-3">
       <div class="col-sm-9">
        <button type="submit" class="btn btn-primary" name="commit">Submit</button>
        </div>
      </div>
      </div>
    </form>
    </div>

  );
} 