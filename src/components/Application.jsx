import { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';
import LabUpload from './LabUpload';
import Patient from './Patients/Patient';
import LabLocation from './LabLocation';
import PatientReport from './PatientReport';
import MainPage from './Patients/MainPage';
import LoginForm from './Patients/LoginForm';
import PatientLogin from './Patients/PatientLogin'
import LabMain from './Patients/LabMain';
import Booking from './Booking/Index';
import {Routes, Route} from 'react-router-dom';
import Appointment from './Appointment';
import LabReport from './LabReport';


import SMSForm from './SMSForm';
export default function Application() {
  const [state, setState] = useState([]);
 
  
//   useEffect(() => {
//     axios.get("http://localhost:8080")
//     .then((res) => {
//       console.log('response', res.data);
//       setState(res.data)
//     })
//     .catch(error => console.log(`Error: ${error}`));
  
// }, []);

return <Fragment>
   <Routes>
        <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="Lab" element={<LabMain />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/sms" element={<SMSForm/>} />
        <Route path="/location" element={<LabLocation />} />
        <Route path="/report" element={<PatientReport />} />
        <Route path="/labupload" element={<LabUpload />} />
        <Route path="/patienthome" element={<PatientLogin/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/appointments" element={<Appointment/>} />
        <Route path="/labReport" element={<LabReport/>} />
        </Route>
      </Routes>
{/* <MainPage /> */}
</Fragment> 
}