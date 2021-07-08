import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer_main}>
      <div className={styles.footer_text}>
        ©{new Date().getFullYear()} Boolean
      </div>
    </div>
  );
}

export default Footer;
