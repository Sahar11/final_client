import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, Steps, Button, Select, notification } from "antd";
import Instructions from "./Step2";
import Step4 from "./Step4";
import { Link } from "react-router-dom";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  SmileOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { Step } = Steps;
const unavailable = [
  "03-01-2022",
  "02-22-2022",
  "02-23-2022",
  "02-25-2022",
  "02-24-2022",
];
const timeSlot = [
  ["8:00am", "8:10am", "8:20am", "8:30am", "8:40am", "8:50am"],
  [
    "9:00am",
    "9:10am",
    "9:20am",
    "9:30am",
    "9:40am",
    "9:50am",
    "10:00am",
    "10:10am",
    "10:20am",
    "10:30am",
    "10:40am",
    "10:50am",
    "11:00am",
    "11:10am",
    "11:20am",
    "11:30am",
    "11:40am",
    "11:50am",
  ],
  [
    "12:00pm",
    "12:10pm",
    "12:20pm",
    "12:30pm",
    "12:40pm",
    "12:50pm",
    "1:00pm",
    "1:10pm",
    "1:20pm",
    "1:30pm",
    "1:40pm",
    "1:50pm",
    "2:00pm",
    "2:10pm",
    "2:20pm",
    "2:30pm",
    "2:40pm",
    "2:50pm",
  ],
  [
    "3:00pm",
    "3:10pm",
    "3:20pm",
    "3:30pm",
    "3:40pm",
    "3:50pm",
    "4:00pm",
    "4:10pm",
    "4:20pm",
    "4:30pm",
    "4:40pm",
    "4:50pm",
    "5:00pm",
    "5:10pm",
    "5:20pm",
    "5:30pm",
    "5:40pm",
    "5:50pm",
    "6:00pm",
  ],
];
const timeSegments = ["Before 9am", "9am-12pm", "12-3pm", "After 3pm"];
export default function Appointment() {
  const [value, setValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [step, setStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  function onInfoChange(info, value) {
    if (info === "firstname") {
      setFirstName(value);
    } else if (info === "lastname") {
      setLastName(value);
    } else if (info === "email") {
      setEmail(value);
    } else {
      console.log(value)
      setPhoneNumber(value);
    }
  }

  useEffect(() => {
    axios
      .get("/location")
      .then((res) => {
        console.log("response", res.data);
        setLocations(res.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  const saveBooking = async () => {
    axios
      .post("/booking", {
        location: selectedLocation,
        date: value.toDate(),
        time: selectedValue,
        firstName,
        lastName,
        email,
        phoneNumber,
      })
      .then((res) => {
        console.log("response", res.data);
        notification.open({
          message: "Successfully booked",
          description:
            "Your appointment has been booked successfully and you will receive updates via email",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  const onSelect = (value) => {
    console.log(value);
    setValue(value);
  };
  const options = locations.map((d, i) => <Option key={i}>{d.addres}</Option>);
  return (
    <div>
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
      <div className="d-flex justify-content-between mb-4 mt-4 mx-4">
        <Button
          type="primary"
          icon={<CaretLeftOutlined />}
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
        >
          Back
        </Button>
        <h1>ExcelLabs Appointment Booking</h1>
        <Button
          type="primary"
          onClick={() => setStep(step + 1)}
          disabled={step === 2}
        >
          Next <CaretRightOutlined />
        </Button>
      </div>
      <div className="mb-4 mx-4" >
        <Steps current={step}>
          <Step
            title="Patient Instructions"
            description="Follow these instructions"
          />
          <Step
            title="Choose a lab location and date"
            description="Select a location and date"
          />
          <Step title="Confirmation" description="Provide contact details" />
        </Steps>
      </div>
      {step === 0 ? (
        <div>
          <Instructions onClick={() => setStep(1)} />
        </div>
      ) : step === 1 ? (
        <div style={{ padding: "2rem" }}>
          {/* <Alert
          message={`You selected date: ${
            selectedValue && selectedValue.format("YYYY-MM-DD")
          }`}
        /> */}
          <div className="container-fluid">
            <div className="row mb-5">
              <div className="col-md-6">
                <label className="mb-3 fs-4">Choose a Location</label>
                <Select
                  showSearch
                  className="w-100"
                  value={selectedLocation}
                  placeholder="Type to search"
                  defaultActiveFirstOption={false}
                  onChange={(value) => setSelectedLocation(value)}
                >
                  {options}
                </Select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="mb-3 fs-4">Choose a Date and Time</label>
                <Calendar
                  fullscreen={true}
                  value={value}
                  onSelect={onSelect}
                  disabledDate={(CellDate) =>
                    CellDate.isBefore(new Date(), "day") ||
                    unavailable.includes(CellDate.format("MM-DD-YYYY"))
                  }
                  dateCellRender={(CellDate) => {
                    let textDate = CellDate.format("MM-DD-YYYY");
                    if (CellDate.isBefore(new Date(), "day")) {
                      return (
                        <div
                          className="calendar-item"
                          style={{
                            backgroundColor: "#eee",
                            width: "100%",
                            height: "100%",
                          }}
                        ></div>
                      );
                    } else if (unavailable.includes(textDate)) {
                      return (
                        <div className="calendar-item">
                          <CloseOutlined
                            style={{ fontSize: "200%", color: "red" }}
                          />
                        </div>
                      );
                    } else if (
                      !CellDate.isBefore(new Date(), "day") &&
                      (CellDate.day() === 6 || CellDate.day() === 0)
                    ) {
                      return (
                        <div className="calendar-item">
                          <span style={{ color: "#555" }}>Closed</span>
                        </div>
                      );
                    } else {
                      return (
                        <div className="calendar-item">
                          <CheckOutlined
                            style={{ fontSize: "200%", color: "green" }}
                          />
                        </div>
                      );
                    }
                  }}
                />
              </div>
              <div className="col-md-6">
                <div
                  className="row appointment-time"
                  style={{ maxHeight: "500px", overflow: "auto" }}
                >
                  {timeSlot.map((period, i) => {
                    return (
                      <div className="col-md-3">
                        <ul class="list-group text-center">
                          <li class="list-group-item bg-dark text-white">
                            {timeSegments[i]}
                          </li>
                          {period
                            .filter((slot) => {
                              // const inSlot=timeOnThe25th.includes(slot)
                              // if (inSlot) {
                              //   return false
                              // }else if ()
                              return true;
                            })
                            .map((slot) => {
                              return (
                                <li
                                  className={
                                    selectedValue === slot
                                      ? "list-group-item active"
                                      : "list-group-item"
                                  }
                                  onClick={() => setSelectedValue(slot)}
                                >
                                  {slot}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Step4
          firstName={firstName}
          lastName={lastName}
          email={email}
          location={locations[selectedLocation]}
          dateTime={value.format("DD, MMM YYYY")+ " " +selectedValue}
          phoneNumber={phoneNumber}
          onChange={onInfoChange}
          onSave={saveBooking}
        />
      )}
    </div>
  );
}
