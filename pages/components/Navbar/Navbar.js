import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

function index() {
  return (
    <div className={styles.nav_nav}>
      <div className={styles.nav_logo}>
        Blog<span className={styles.nav_next}>Next</span>
      </div>
      <div className={styles.nav_menu1}>
        <div className={styles.nav_menu2}>
          <Link href="/signin"> Sign in </Link>
        </div>
        <div className={styles.nav_menu2}>
          <Link href="/help"> Help? </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
