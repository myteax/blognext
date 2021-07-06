import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

function Selectx() {
  const [age, setAge] = React.useState("");
  const [sd, setsd] = useState(false);
  const [wd, setwd] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setsd(true);
      setwd(190);
    } else {
      setsd(false);
      setwd(190);
    }
  }, []);

  const useStyles = makeStyles((theme) => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selectcss: {
      height: "40px",
      width: "200px",
    },
    inputcss: {
      // marginTop: "-10px",
    },
  }));

  const classes = useStyles();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ width: "200px" }}>
      {/* <FormControl variant="outlined" className={classes.formControl}> */}
      <InputLabel
        id="demo-simple-select-outlined-label"
        className={classes.inputcss}
      >
        Select Category
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={age}
        onChange={handleChange}
        label="Select Category"
        className={classes.selectcss}
      >
        <MenuItem value="Select">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {/* </FormControl> */}
    </div>
  );
}

export default Selectx;
