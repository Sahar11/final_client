import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/report.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./styles/location.css";
// import "./Patients/css/style.css";

export default function PatientReport() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [patient, setPatient] = useState({});
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const showModal = (patient) => {
    setIsOpen(true);
    setTitle("Report");
    setPatient(patient);
    document.body.style.backgroundColor = "white";
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const download = (url) => {
    window.open(url);
  };

  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("/appointment")
      .then((res) => {
        console.log("response", res.data);
        setState(res.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  useEffect(() => {
    setFilteredData(
      state.filter((appointment) =>
        appointment.appointment_date.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, state]);

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
            <Link to="/labupload">
                {" "}
                <button type="button " className="btn-style">
                  {/* <!-- Reports Button --> */}
                  <i className="fa-solid fa-file-chart-column"></i>Upload
                  Reports
                </button>{" "}
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

      <div className="reportBackground">
        {" "}
        <div className="heading-back">
          <h1 className="heading"> View Appointments</h1>{" "}
        </div>
        <div className="search">
          <input
            className="form-control"
            type="text"
            placeholder="Enter test type..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {filteredData.length === 0 ? (
          <div className="search">No result found</div>
        ) : (
          filteredData.map((appointment) => (
            <div key={appointment.id} className="alignModal">
              <div className="btnCenter row">
              &nbsp;
                <div className="col-lg-3 space">
                
                  {appointment.firstname}
                  &nbsp;
                  {appointment.lastname}
                  &nbsp;
                  {appointment.phoneumber}
                  &nbsp;&nbsp;
                  {appointment.email}
                  &nbsp;&nbsp;
                  {new Date(appointment.appointment_date).toLocaleDateString()}{" "}
                  &nbsp;&nbsp;
                  {appointment.appointment}
                 
                </div>
              </div>
            </div>
          ))
        )}
     
      </div>
    </div>
  );
}
