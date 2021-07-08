import React, { useState, useEffect } from "react";

import styles from "./Selecty.module.css";

function Selecty({ width }) {
  return (
    <div>
      <div>
        <select
          style={{ width: width || "200px" }}
          className={styles.select_sel}
        >
          <option>One </option>
          <option>Two </option>
          <option>Three </option>
          <option> Four </option>
        </select>
      </div>
    </div>
  );
}

export default Selecty;
