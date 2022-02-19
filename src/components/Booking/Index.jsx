import { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import Patient from "../Patients/Patient";
import { Calendar, Alert, Steps, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Instructions from "./Step2";
import Step4 from "./Step4";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

const { Step } = Steps;
const unavailable = [
  "02-16-2022",
  "02-17-2022",
  "02-18-2022",
  "02-21-2022",
  "02-22-2022",
];
const timeOnThe25th = ["3:30", "5:00"];
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

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => {
        console.log("response", res.data);
        //setState(res.data)
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  const onSelect = (value) => {
    console.log(value);
    setValue(value);
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between mb-4">
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
          disabled={step === 3}
        >
          Next <CaretRightOutlined />
        </Button>
      </div>
      <div className="mb-4">
        <Steps current={step}>
          <Step
            title="Select lab"
            description="Select a lab for your appointment"
          />
          <Step
            title="Patient Instructions"
            description="Follow these instructions"
          />
          <Step
            title="Choose a date"
            description="Select a date for your appointment"
          />
          <Step title="Confirmation" />
        </Steps>
      </div>
      {step === 0 ? (
        <div> </div>
      ) : step === 1 ? (
        <div>
          <Instructions />
          <button onClick={() => setStep(2)}>Confirm</button>
        </div>
      ) : step === 2 ? (
        <div style={{ padding: "2rem" }}>
          {/* <Alert
          message={`You selected date: ${
            selectedValue && selectedValue.format("YYYY-MM-DD")
          }`}
        /> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
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
        <Step4 />
      )}
    </div>
  );
}
