import {Button} from "antd";
import {
  CheckOutlined,
} from "@ant-design/icons";

export default function Instructions({onClick}) {
  return (
    <p className="Instructions w-50 mx-auto">
      <h3>These special tests must be booked by phone:</h3>
      Call to book an appointment or for more information about these tests.
      <div className="row">
        <div className="col-md-6">
          <div className="Instruction-box"><h4>In Ontario :</h4>
          <ul>
            <li>Ambulatory Blood Pressure</li>
            <li>Seminal Analysis</li>
            <li>Holter Monitor</li>
            <li>Urea Breath Test (H. Pylori)</li>
            <li>Cryoglobulin/Cryofibrinogen/Cold Agglutinin</li>
            <li>
              Medical Legal Drugs of Abuse collections (Including urine, breath
              and hair)
            </li>
            <li>QuantiFERON TB Gold</li>
            <li>Contract Services</li>
          </ul>
          </div>
        </div>
        <div className="col-md-6">
         <div className="Instruction-box"><h4>In Saskatchewan :</h4>
          <ul>
            <li>ECG (available in Regina only)</li>
            <li>Lactose Tolerance (available in Saskatoon only)</li>
          </ul>
          </div>
          <div className="Instruction-box">
          <h4>Serving Patients with Autism:</h4>
          <ul>
            <li>Booking Ont. and Sask. autism appointments call here</li>
          </ul>
          </div> 
        </div>
        <div className="col-12">
          <div className="Instruction-box">
          <h4>Patient Instructions</h4>
          <h5>Fasting Required</h5>
          Do not eat or drink (except water) for 8-12 hours before the following tests:
          <ul>
            <li>GLUCOSE – fasting</li>
            <li>GTT – gestational diabetes confirmation</li>
            <li>GTT – non pregnant</li>
            <li>Urea Breath Test (H. Pylori)</li>
            <li>LIPIDS/CHOLESTEROL - if indicated by your physician</li>
           
          </ul>
          Fasting is preferred, but not required for these tests
          <ul>
            <li>Homocysteine</li>
            <li>Iron/Transferrin</li>
          </ul>
          </div>
        </div>
      </div>
      <Button type="primary" size="large" icon={<CheckOutlined/>} onClick={() => onClick(1)}>Confirm</Button>
    </p>
  );
}
