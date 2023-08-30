import React from "react";
import classes from "./Spinder.module.css";

const Spinder = () => {
  return (
    <div>
      <svg className={classes.spinder} viewBox="25 25 50 50">
        <circle className={classes.circle} cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  );
};

export default Spinder;
