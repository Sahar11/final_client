import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: details.email,
      password: details.password,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("Logged In");
          navigate("/", {
            state: { name: details.name, email: details.email },
          });
        } else {
          console.log("Details do not match");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <Header />
      <div class="wrapper">
        <form class="form-signin" onSubmit={submitLogin}>
          <h2 class="form-signin-heading">Please login</h2>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Full Name"
            required=""
            autofocus=""
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          <br />
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          <br />
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            required=""
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @import "bourbon";
  body {
    background: #eee !important;
  }
  .wrapper {
    margin-top: 80px;
    margin-bottom: 80px;
    min-height: 60vh;
    padding-top: 120px;
  }
  .form-signin {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    .form-signin-heading,
    .checkbox {
      margin-bottom: 30px;
    }
    .checkbox {
      font-weight: normal;
    }
    .form-control {
      position: relative;
      font-size: 16px;
      height: auto;
      padding: 10px;
      @include box-sizing(border-box);
      &:focus {
        z-index: 2;
      }
    }
    input[type="text"] {
      margin-bottom: -1px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    input[type="password"] {
      margin-bottom: 20px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

export default LoginForm;
