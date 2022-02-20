import { useState } from "react";

export default function Confirmation({firstName,lastName,email,phoneNumber,onChange}) {
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div>
            <h3 className="mb-3">1. Select who the appointment is for:</h3>
            <div className="row ms-4">
              <div className="col-md-6">
                <label>First Name</label>
                <input className="form-control" placeholder="First Name" value={firstName} onChange={(e)=>onChange("firstname",e.target.value)}/>
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input className="form-control" placeholder="Last Name" value={lastName} onChange={(e)=>onChange("lastname",e.target.value)} />
              </div>
              <div className="col-md-12 md-3">
                <label>Email</label>
                <input
                  className="form-control"
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={(e)=>onChange("email",e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="mb-3">2. Confirm appointment booking:</h3>
            <div className="ms-5">
              <p className="fw-light fs-5 mb-0">When:</p>
              <p className="fw-bold text-primary fs-5">
                3 PM Friday, February 25, 2022
              </p>
              <p className="fw-light fs-5 mb-0 mt-3">Location:</p>
              <p className="fw-bold text-primary fs-5">
                11:40 AM Saturday, February 26, 2022
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="mb-3">3. Confirm your phone number:</h3>
            <div className="ms-5">
              <p className="fw-light fs-5 mb-0">
                ExcelLabs will contact you on this phone number if there are any
                issues with ExcelLabs appointments you make.
              </p>
              <label className="mt-4 fs-5">Phone Number</label>
              <input className="form-control" placeholder="phone number" value={phoneNumber} onchange={(e)=>onChange("phonenumber",e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
