import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Buttonx from "../utils/Button/Buttonx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Newpost.module.css";
import Selectx from "../utils/Select/Selectx";
import Selecty from "../utils/Select/Selecty";
import dynamic from "next/dynamic";

// import JoditEditor from "jodit-react";

const importJodit = () => import("jodit-react");
const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  textf: {
    minWidth: "100%",
  },
}));

function Newpost() {
  const classes = useStyles();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [sd, setsd] = useState(false);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    toolbar: true,
    height: 500,
    toolbarAdaptive: false,
    buttons:
      "|,bold,italic, underline,|,superscript,subscript,,ul,ol,,|,|,indent,outdent, ,align,undo,redo,|,table,link,|,font, fontsize, paragraph,| ,brush,|,print",
  };

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setsd(true);
    } else {
      setsd(false);
    }
  }, []);
  return (
    <div>
      <Head>
        <title> Publish a new post</title>
      </Head>
      <Navbar />
      <div className={styles.main}>
        <div>
          <Buttonx text="Back" />
        </div>
        <div className={sd ? styles.newpost_first1 : styles.newpost_first}>
          <div className={sd ? styles.newpost_form1 : styles.newpost_form}>
            <form noValidate autoComplete="off">
              <div
                className={sd ? styles.newpost_topic1 : styles.newpost_topic}
              >
                {" "}
                Title:{" "}
              </div>
              <input
                type="text"
                className={sd ? styles.newpost_title1 : styles.newpost_title}
              />
            </form>
          </div>
          <div>
            <div className={sd ? styles.newpost_topic1 : styles.newpost_topic}>
              {" "}
              Category:{" "}
            </div>
            <div
              className={sd ? styles.newpost_select1 : styles.newpost_select}
            >
              <Selecty width="250px" />
            </div>
          </div>
        </div>
        <div>
          <div className={sd ? styles.newpost_topic1 : styles.newpost_topic}>
            {" "}
            Image:{" "}
          </div>
          <input
            type="file"
            className={sd ? styles.newpost_title1 : styles.newpost_title}
          />
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
            height={400}
          />
          <div className={styles.newpost_publish}>
            <Buttonx text="Publish Post" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newpost;
