import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/location.css';

export default function Location() {
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

return <div>
  <div className="search">
   <input className="form-control" type="text" placeholder="search ..." onChange={(e) => {
     setSearch(e.target.value)
   }} />
 </div>
 <div className = "address_space">
   <div className = "scroll ">
  {
  filteredData.length === 0 ? <div>No result found</div> : filteredData.map((location,index) => {
  return <div key={index} > 
  <table class="table ">
  <tr class=" address">{location.addres} <br/><br/>
   Contact: {location.phone_number}
  
  <hr />
  </tr>
  
</table>
    {/* <p className="address" ></p>
    <p className="address" ></p> */}
    </div>
    
  })
}
</div>
</div>
</div>

}
