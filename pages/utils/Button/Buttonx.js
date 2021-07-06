import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Index({ color, text, size }) {
  const [colorx, setcolorx] = useState("#fca311");
  const [textx, settextx] = useState("Empty Button");
  const [sizex, setsizex] = useState("12px");

  useEffect(() => {
    setcolorx(color || "#fca311");
    settextx(text || "Empty Button");
    setsizex(size || "12px");
  }, [color, text]);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    btnc: {
      backgroundColor: `${colorx}`,
      borderRadius: "8px",
      fontSize: `${sizex}`,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.btnc}>
        {text}
      </Button>
    </div>
  );
}

export default Index;
