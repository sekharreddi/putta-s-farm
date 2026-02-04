'use client';

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        {/* Left big text */}
        <div className={styles.brand}>
          <p className={styles.tagline}></p>
          <h1 className={styles.logo}>Putta's Farms</h1>
        </div>

        {/* Right links */}
        <div className={styles.links}>

          <div className={styles.column}>
            <h4>Product</h4>
            <ul>
              <li>Product</li>
              <li>About</li>
            </ul>
          </div>


        </div>
      </div>
    </footer>
  );
}


