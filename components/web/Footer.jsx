'use client';

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        {/* Left brand */}
        <div className={styles.brand}>
          <p className={styles.tagline}>
            From local farmers to your kitchen
          </p>
          <h1 className={styles.logo}>Putta's Farms</h1>
        </div>

        {/* Right links */}
        <div className={styles.links}>

          <div className={styles.column}>
            <h4>Product</h4>
            <ul>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Policies</h4>
            <ul>
              <li>
                <Link href="/policies/Privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/Terms-and-Conditions">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/policies/Shipping-policy">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/Cancellation-and-return-policy">
                  Cancellation & Return
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}


