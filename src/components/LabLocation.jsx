import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/location.css";
import Location from "./Location";
import "./styles/location.css";
import { Link } from "react-router-dom";
import "./styles/map.css";
import { SmileOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Button, notification } from "antd";

export default function LabLocation() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [locationData, setLocationData] = useState({});

  const getCheckin = (id, name) => {
    setLocationData({ id, name });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    notification.open({
      message: "Checkin Update",
      description: "You will receive a SMS with an estimated waiting time",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
    // axios
    //   .post("/checkin", { ...values, locationID: locationData.id })
    //   .then((res) => {
    //     console.log("response", res.data);
    //     notification.open({
    //       message: "Checkin Update",
    //       description: "You will receive a SMS with an estimated waiting time",
    //       icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    //     });
    //   })
    //   .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div>
      <header>
        {/* <!-- Header-top starts--> */}
        <div className="header-top pad-top-btm pad-lft-rth">
          <div>
            {/* <!-- Find a Location Button --> */}
            <Link to="/location"></Link>

            <button type="button " className="btn-style">
              {/* <!-- Book a Lab Visit Button --> */}
              <i className="fa-solid fa-calendar-days"></i> Book a visit
            </button>

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
      <div className="" style={{}}>
        <div className="wrapper-overlay">
          <div className="heading-border">
            <h1 className="heading">Find a Location Near You</h1>
          </div>
          <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-lg-12">
                  <Location getCheckin={getCheckin} />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1A5qYgBZAUr-MYRSbiOrBOYG_GCb5cKep&hl=en&ehbc=2E312F"
                // width="670"
                // height="480"
                style={{ border: 0, width:"100%", height:"550px" }}
              ></iframe>
            </div>
          </div>
          </div>
          

          <Modal
            title="Checkin Online"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
          >
            <h2>
              At: <i className="fw-normal">{locationData.name}</i>
            </h2>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="firstName"
                label="First Name"
                required
                tooltip="First Name is required"
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                required
                tooltip="Last Name is required"
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                tooltip={{ title: "Phone Number is required" }}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
}
