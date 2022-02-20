import { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';
import Patient from './Patients/Patient';
import MainPage from './Patients/MainPage';
import LoginForm from './Patients/LoginForm';
import LabMain from './Patients/LabMain';
import {Routes, Route} from 'react-router-dom';
import SMSForm from './SMSForm';

export default function Application() {
return <Fragment>
   <Routes>
        <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="Lab" element={<LabMain />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/sms" element={<SMSForm/>} />
        </Route>
      </Routes>
{/* <MainPage /> */}
</Fragment> 
}