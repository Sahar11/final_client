import { useState } from "react";
import axios from "axios";
import "./styles/lab.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Switch } from "react-router-dom";
import "./styles/location.css";
import "./Patients/css/style.css";

export default function LabUpload() {
  const [name, setName] = useState("");
  const [health, setHealth] = useState("");
  const [upload, setUpload] = useState("");
  const [test, setTest] = useState("");
  const [date, setDate] = useState("");
  const[status, setStatus] = useState("");

 
 
  const onSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("file", upload);
    //formData.append('filename',formData.get('file').name )

    formData.append("fullname", name);
    formData.append("health", health);
    //formData.append('upload', upload);
    formData.append("test", test);
    formData.append("date", date);
    //console.log("File name: ",formData.get('file').name);
    axios
      .post("http://localhost:8080/lab", formData)
      .then((res) =>{ 
        console.log(res)
        setStatus({ type: 'success' });
      
      })
      .catch((err) => {
        console.log(err.data)
        setStatus({ type: 'error', err });
      });
  };
  const fileSelectedHandler = (event) => {
    setUpload(event.target.files[0]);
  };
  return (
    <div>
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
              <Link to="/Lab">
                <button type="button" className="btn-style">
                  <i className="fa-solid fa-location-dot"></i> Home
                </button>
              </Link>
            </div>

            <div className="login-padding">
              {/* <!-- LogIn Button --> */}
              {/* <!-- SignUp Button --> */}
              admin@email.com
              <Link to="/patienthome">
                <button type="button " id="signup-btn" className="btn-style">
                  <i className="fa-solid fa-right-to-bracket"></i> Logout
                </button>
              </Link>
            </div>
          </div>
        </header>
        {/* <!-- Header-top ends-->*/}
      </div>

      <div className="form container-sm">
        <div className="headingDiv">
          {" "}
          <h1 className="heading">Reports</h1>{" "}
        </div>
        {status?.type === 'success' && <p className="successmsg">Data has been saved successfully</p>}
      {status?.type === 'error' && (
        <p className="successmsg">Error has occured while saving the data.</p>
      )}
       
        <form
          onSubmit={onSubmit}
          className="row g-3"
          id="myForm"
          encType="multipart/form-data"
        >
          <div className="grid">
            <div className="row mb-3">
              <input
                type="text"
                name="fullname"
                value={name}
                placeholder="Enter Patients Full Name"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="row mb-3">
              <input
                type="number"
                name="health"
                value={health}
                placeholder="HealthCard"
                className="form-control"
                onChange={(event) => setHealth(event.target.value)}
              />
            </div>
            {/* file */}
            <div className="row mb-3">
              <input
                type="file"
                name="selectedFile"
                placeholder="Upload Document"
                className="form-control"
                id="formFile"
                onChange={fileSelectedHandler}
              />
            </div>
            {/* end file */}
            <div className="row mb-3">
              <input
                type="text"
                name="test"
                value={test}
                placeholder="Enter Test type"
                className="form-control"
                onChange={(event) => setTest(event.target.value)}
              />
            </div>
            <div className="row mb-3">
              <input
                type="date"
                name="date"
                value={date}
                placeholder="Select Date"
                className="form-control"
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="col-sm-9 btnPadding">
                <button type="submit" className="btn btn-primary" name="commit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
