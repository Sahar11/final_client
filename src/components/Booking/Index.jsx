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
  "02-16-2022",
  "02-17-2022",
  "02-18-2022",
  "02-21-2022",
  "02-22-2022",
];
const timeSlot = [
  ["8:00", "8:10", "8:20", "8:30", "8:40", "8:50"],
  [
    "9:00",
    "9:10",
    "9:20",
    "9:30",
    "9:40",
    "9:50",
    "10:00",
    "10:10",
    "10:20",
    "10:30",
    "10:40",
    "10:50",
    "11:00",
    "11:10",
    "11:20",
    "11:30",
    "11:40",
    "11:50",
  ],
  [
    "12:00",
    "12:10",
    "12:20",
    "12:30",
    "12:40",
    "12:50",
    "1:00",
    "1:10",
    "1:20",
    "1:30",
    "1:40",
    "1:50",
    "2:00",
    "2:10",
    "2:20",
    "2:30",
    "2:40",
    "2:50",
  ],
  [
    "3:00",
    "3:10",
    "3:20",
    "3:30",
    "3:40",
    "3:50",
    "4:00",
    "4:10",
    "4:20",
    "4:30",
    "4:40",
    "4:50",
    "5:00",
    "5:10",
    "5:20",
    "5:30",
    "5:40",
    "5:50",
    "6:00",
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
