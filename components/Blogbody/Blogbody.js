import React, { useState, useEffect } from "react";
import styles from "./Blogbody.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Buttonx from "../../utils/Button/Buttonx";
import CreateIcon from "@material-ui/icons/Create";
import LowPriorityIcon from "@material-ui/icons/LowPriority";
import ListIcon from "@material-ui/icons/List";
import Selectx from "../../utils/Select/Selectx";
import Selecty from "../../utils/Select/Selecty";
import Link from "next/link";
import Cardsx from "../../utils/Cards/Cardsx";
import data from "../../dummydata/data.json";
import { converttoarr } from "../../functions/converttoarr";

const useStyles = makeStyles((theme) => ({
  bbs: {
    fontSize: "7px",
  },
}));

export default function Blogbody({ db }) {
  const classes = useStyles();
  const [sd, setsd] = useState(false);
  const [dd, setdd] = useState(db);

  useEffect(() => {
    console.log(db);
    // setdd(converttoarr(db));
    if (window.innerWidth <= 500) {
      setsd(true);
    } else {
      setsd(false);
    }
  }, []);

  const newp = () => {
    location.href = "/newpost";
  };
  return (
    <div className={styles.bb_main}>
      <div className={sd ? styles.bb_sdfirstpane : styles.bb_firstpane}>
        {sd ? null : (
          <div>
            {" "}
            <Selecty />{" "}
          </div>
        )}

        <div className={styles.bb_btns}>
          <div className={styles.bb_indbtns}>
            <Buttonx
              text={sd ? <CreateIcon fontSize="small" /> : "New post"}
              onClick={newp}
            />
          </div>
          <div className={styles.bb_indbtns}>
            <Buttonx
              text={sd ? <LowPriorityIcon fontSize="small" /> : "My post"}
            />{" "}
          </div>
          <div className={styles.bb_indbtns}>
            {" "}
            <Buttonx
              text={sd ? <ListIcon fontSize="small" /> : "All post"}
            />{" "}
          </div>
        </div>
      </div>
      {sd && (
        <div className={styles.selectsd}>
          {" "}
          <Selecty />{" "}
        </div>
      )}
      <div className={styles.bb_body}>
        {/* <Cardsx /> */}
        {db.map((res, index) => {
          return <Cardsx key={index} data={res} />;
        })}
      </div>
    </div>
  );
}
