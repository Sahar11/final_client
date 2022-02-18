import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/location.css';

export default function Search () {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    axios.get("/location")
    .then((res) => {
      console.log('response', res.data);
      setState(res.data)
    })
    .catch(error => console.log(`Error: ${error}`));
  
}, []);

useEffect(() => {
 setFilteredData(
   state.filter((location) => location.addres.toLowerCase().includes(search.toLowerCase()))
 )

}, [search, state]);

return <div className = "address_space">
  <div>
   <input type="text" placeholder="search ..." onChange={(e) => {
     setSearch(e.target.value)
   }} />
 </div>
  {
  filteredData.length === 0 ? <div>No result found</div> : filteredData.map((location,index) => {
  return <div key={index}> 
    <p className="address" >{location.addres}</p></div>
  })
}
</div>
}