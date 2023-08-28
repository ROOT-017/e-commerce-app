import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import classes from "./Filter.module.css";

const Filter = () => {
  //   console.log(props);
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div>
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        showClear
        placeholder="Select a City"
        className={classes.filter_dropdown}
      />
    </div>
  );
};

export default Filter;
