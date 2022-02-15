import { useState } from 'react';
import axios from 'axios';
//import { Fragment } from "react/cjs/react.production.min"
//import { useState } from "react";

export default function Patient(props) {
  const [state, setState] = useState('');
  const handleRequest = event => {
    event.preventDefault();
    const patient = {
      firstname: state
    }
    axios.post("http://localhost:8080/patient", patient)
   .then(res => console.log('Data send'))
   .catch(err => console.log(err.data))
}
   return (
     <form onSubmit={handleRequest}>
    <input name="firstname" value = {state} onChange={event => setState(event.target.value)}></input>
    {state}
    <button>Submit</button>
    </form>);
  
}