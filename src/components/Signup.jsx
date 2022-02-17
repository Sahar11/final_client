import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    healthcard: "",
    dob: "",
    email: "",

    open: false,
    error: "",
  });

  const navigate = useNavigate();

  const handleChange = (first_name) => (event) => {
    setValues({ ...values, [first_name]: event.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
    const details = {
      first_name: first_name,
      last_name: last_name,
      healthcard: Healthcard,
      dob: dob,
      email: email,
    };
    Axios.post("http://localhost:3001/login", details)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // const user = {
    //   first_name: values.first_name || undefined,
    //   last_name: values.last_name || undefined,
    //   healthcard: values.healthcard || undefined,
    //   dob: values.dob || undefined,
    //   email: values.email || undefined,
    // };
  };

  const signUp = (e) => {};
  return (
    <div>
      <Header />
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="signup-form">
            <form
              onSubmit={clickSubmit}
              class="mt-5 border p-4 bg-light shadow"
            >
              <h4 class="mb-5 text-secondary">Create Your Account</h4>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label>
                    First Name<span class="text-danger">*</span>
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    name="fname"
                    class="form-control"
                    placeholder="Enter First Name"
                    value={values.first_name}
                    onChange={handleChange("first_name")}
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label>
                    Last Name<span class="text-danger">*</span>
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    name="lname"
                    class="form-control"
                    placeholder="Enter Last Name"
                    value={values.last_name}
                    onChange={handleChange("last_name")}
                  />
                </div>
                <div class="mb-3 col-md-12">
                  <label>
                    healthcard<span class="text-danger">*</span>
                  </label>
                  <input
                    id="healthcard"
                    type="healthcard"
                    name="healthcard"
                    class="form-control"
                    placeholder="Enter healthcard"
                    value={values.Healthcard}
                    onChange={handleChange("healthcard")}
                  />
                </div>
                <div class="mb-3 col-md-12">
                  <label>
                    dob<span class="text-danger">*</span>
                  </label>
                  <input
                    id="dob"
                    type="signup"
                    name="dob"
                    class="form-control"
                    placeholder="dob"
                    value={values.dob}
                    onChange={handleChange("dob")}
                  />
                </div>
                <div class="mb-3 col-md-12">
                  <label>
                    Email<span class="text-danger">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                </div>
                <div class="col-md-12">
                  <button
                    class="btn btn-primary float-end"
                    type="submit"
                    onClick={signUp}
                  >
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
