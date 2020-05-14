import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, InputLabel } from "@material-ui/core";
import { fetchPrograms, fetchPoints } from "../../api";

import styles from "./Selector.module.css";

const Selector = ({ handleProgramChange, handlePointChange }) => {
  const [fetchedPrograms, setFetchedPrograms] = useState([]);
  const [fetchedPoints, setFetchedPoints] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedPrograms(await fetchPrograms());
      setFetchedPoints(await fetchPoints());
    };
    fetchAPI();
  }, [setFetchedPrograms]);

  return (
    <div className={styles.formMain}>
      <FormControl className={styles.formControl}>
        <InputLabel id="Program">Program</InputLabel>
        <NativeSelect
          defaultValue=""
          onChange={(event) => handleProgramChange(event.target.value)}
        >
          <option value=""></option>
          {fetchedPrograms.map((program, i) => (
            <option key={i} value={program}>
              {program}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <FormControl className={styles.formControl}>
        <InputLabel id="Point">Point</InputLabel>
        <NativeSelect
          defaultValue=""
          onChange={(event) => handlePointChange(event.target.value)}
        >
          <option value=""></option>
          {fetchedPoints.map((point, i) => (
            <option key={i} value={point}>
              {point}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Selector;
