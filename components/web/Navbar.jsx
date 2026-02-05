'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/web/Cart";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { cartCount } = useCart();

  const [open, setOpen] = useState(false);     // ✅ cart drawer
  const [fixed, setFixed] = useState(false);   // ✅ sticky state
  
  const { user, loading, logout } = useAuth();



  useEffect(() => {
    const offersEl = document.querySelector(".top-offers");
    const offersHeight = offersEl ? offersEl.offsetHeight : 0;

    const onScroll = () => {
      const shouldFix = window.scrollY > offersHeight;

      setFixed(shouldFix);
      document.body.classList.toggle("nav-fixed", shouldFix);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${fixed ? styles.fixed : ""}`}>
        <div className={styles.left}>

          <div className={styles.logo}>
            <Link href="/" >
            <Image
              src="/logo.jpg"
              alt="Puttaparthi Farms Logo"
              width={120}
              height={40}
              priority
            />
            
            </Link>
          </div>
          <span className={styles.title}>Putta's Farms</span>
        </div>

        <div className={styles.menu}>
            <span className={styles.link}>
            <Link href="/products">Products</Link>
            </span>

            <span className={styles.link}>
            <Link href="/products">About</Link>
            </span>

            
          </div>


        <div className={styles.cart} onClick={() => setOpen(true)}>
          <img src="/cart.png" alt="Cart" className={styles.cartIcon} />
          {cartCount > 0 && (
            <span className={styles.cartCount}>{cartCount}</span>
          )}
        </div>
      </nav>

      {/* CART DRAWER (UNCHANGED, SAFE) */}
      {open && <Cart onClose={() => setOpen(false)} />}

    </>
  );
}
