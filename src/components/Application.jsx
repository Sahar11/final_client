import { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';
import Patient from './Patients/Patient';

export default function Application() {
  const [state, setState] = useState([]);
 
  
  useEffect(() => {
    axios.get("http://localhost:8080")
    .then((res) => {
      console.log('response', res.data);
      setState(res.data)
    })
    .catch(error => console.log(`Error: ${error}`));
  
}, []);
return <Fragment>
  <h1>Hi</h1>
 <div><Patient /></div>
{ 
state.map((user, idx) => <h1 key={idx}> {user.firstname} </h1>) 
} 
</Fragment> 
}