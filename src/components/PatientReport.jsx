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
      .get("/report")
      .then((res) => {
        console.log("response", res.data);
        setState(res.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  useEffect(() => {
    setFilteredData(
      state.filter((patient) =>
        patient.test_type.toLowerCase().includes(search.toLowerCase())
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
              <Link to="/location">
                <button type="button" className="btn-style">
                  <i className="fa-solid fa-location-dot"></i> Find a Location
                </button>
              </Link>
              <Link to="/booking">
              <button type="button " className="btn-style">
                {/* <!-- Book a Lab Visit Button --> */}
                <i className="fa-solid fa-calendar-days"></i> Book a visit
              </button>
              </Link>

              <Link to="/report">
                <button type="button " className="btn-style">
                  {/* <!-- Reports Button --> */}
                  <i className="fa-solid fa-file-chart-column"></i>View Reports
                </button>
              </Link>
              <Link to="/">
                <button type="button" className="btn-style">
                  <i className="fa-solid fa-location-dot"></i> Home
                </button>
              </Link>
            </div>

            <div className="login-padding">
              {/* <!-- LogIn Button --> */}
              {/* <!-- SignUp Button --> */}
              denzel@email.com
              <Link to="/login">
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
          <h1 className="heading"> View Reports</h1>{" "}
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
          filteredData.map((patient) => (
            <div key={patient.id} className="alignModal">
              <div className="btnCenter row">
                <div className="col-lg-8">
                  {" "}
                  <button
                    className="btn-sm btn-primary"
                    onClick={() => showModal(patient)}
                  >
                    Display Report
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    className="btn-sm btn-primary"
                    onClick={() => download(patient.download_url)}
                  >
                    download
                  </button>
                </div>
                <div className="col-lg-3 space">
                  {patient.test_type}
                  &nbsp;&nbsp;
                  {new Date(patient.date).toLocaleDateString()}{" "}
                </div>
              </div>
            </div>
          ))
        )}
        <Modal show={isOpen} onHide={hideModal} size="lg">
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={patient.report_url}
              alt="report"
              width="600px"
              height="600px"
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={hideModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
        {/* //  <div key={index} className="files"><img src={patient.report} alt="file" /></div> */}
      </div>
    </div>
  );
}
