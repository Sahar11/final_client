import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/location.css";
import Location from "./Location";
import "./styles/location.css";
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
    axios
      .post("/checkin", { ...values, locationID: locationData.id })
      .then((res) => {
        console.log("response", res.data);
        notification.open({
          message: "Checkin Update",
          description: "You will receive a SMS with an estimated waiting time",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div className="" style={{ backgroundImage: "url(/1.png)" }}>
      <div className="wrapper-overlay">
        <div className="heading-border">
          <h1 className="heading">Find a Location Near You</h1>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Location getCheckin={getCheckin} />
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
  );
}
