import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/location.css";

export default function Location({ getCheckin }) {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    axios
      .get("/location")
      .then((res) => {
        console.log("response", res.data);
        setState(res.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  useEffect(() => {
    setFilteredData(
      state.filter((location) =>
        location.addres.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, state]);

  return (
    <div className="location-wrapper">
      <div className="search">
        <input
          className="form-control p-3"
          type="text"
          size="large"
          placeholder="search ..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div className="scroll ">
        {filteredData.length === 0 ? (
          <div>No result found</div>
        ) : (
          filteredData.map((location, index) => {
            return (
              <div className="location-card" key={index}>
                <h5>{location.addres}</h5>
                <h6>
                  contact: <i>{location.phone_number}</i>
                </h6>
                <Button type="primary" onClick={()=>getCheckin(index+1,location.addres)}>
                  Checkin
                </Button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
