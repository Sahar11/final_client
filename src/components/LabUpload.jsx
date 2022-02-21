import { useState } from "react";
import axios from "axios";
import "./styles/lab.css";
import $ from 'jquery'

export default function LabUpload() {
 const [name, setName] = useState("");
 const [health, setHealth] = useState("");
 const [upload, setUpload] = useState("");
 const [test, setTest] = useState("");
 const [date, setDate] = useState("");
 
  
  $(".btn").click(function () {
    
      $(".successmsg").html("Your data has been saved");
  });
  // $("form").on("submit", function (event) {
  //   event.preventDefault();
  // $('#error-message').text('Your data has been saved');
  // });
 const onSubmit = event => {
  event.preventDefault();

  let formData = new FormData();
   formData.append('file', upload);
   //formData.append('filename',formData.get('file').name )

   formData.append('fullname', name);
   formData.append('health', health);
   formData.append('upload', upload);
   formData.append('test', test);
   formData.append('date', date);
   //console.log("File name: ",formData.get('file').name);
  axios.post("http://localhost:8080/lab", formData)
 .then(res => console.log(res))
 .catch(err => console.log(err.data))
}
const fileSelectedHandler = event => {
  setUpload(event.target.files[0] )
}
  return (
   
    <div className="form container-sm">
    <div className="headingDiv"> <h1 className="heading">Reports</h1> </div>
<div className="successmsg"></div>

    <form onSubmit={onSubmit} className="row g-3" id="myForm" encType="multipart/form-data">
    <div className="grid">
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
       <div className="col-sm-9 btnPadding">
        <button type="submit" className="btn btn-primary" name="commit" >Submit</button>
        </div>
      </div>
      </div>
    </form>
    </div>

  );
  
} 
