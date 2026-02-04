'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [imageSet, setImageSet] = useState("desktop");

  const startX = useRef(0);
  const isDragging = useRef(false);

  const desktopSlides = [
    {
      bg: "/hero/hero-desktop.png",
      title: "Raw Groundnuts",
      desc: "Fresh, hygienically packed peanuts for everyday cooking",
    },
    {
      bg: "/hero/hero-desktop.png",
      title: "Premium Peanuts",
      desc: "Sourced directly from trusted farmers",
    },
    {
      bg: "/hero/hero-desktop.png",
      title: "Healthy & Natural",
      desc: "No preservatives. No chemicals.",
    },
  ];

  const mobileSlides = [
    {
      bg: "/hero/hero-mobile.png",
      title: "Raw Groundnuts",
      desc: "Fresh, hygienically packed peanuts",
    },
    {
      bg: "/hero/hero-mobile.png",
      title: "Premium Peanuts",
      desc: "Direct from farmers",
    },
    {
      bg: "/hero/hero-mobile.png",
      title: "Healthy & Natural",
      desc: "Pure & chemical free",
    },
  ];

  // Detect device
  useEffect(() => {
    const detect = () => {
      setImageSet(window.innerWidth <= 1024 ? "mobile" : "desktop");
    };

    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  const slides = imageSet === "mobile" ? mobileSlides : desktopSlides;

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Touch swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;

    setActive((prev) =>
      diff > 0 ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
    );
  };

  // Mouse drag
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = startX.current - e.clientX;
    if (Math.abs(diff) < 50) return;

    setActive((prev) =>
      diff > 0 ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${slides[active].bg})` }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* TEXT CONTENT */}
      <div className={styles.content}>
        <h1>{slides[active].title}</h1>
        <p>{slides[active].desc}</p>

      </div>

      {/* DOTS */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${active === index ? styles.active : ""}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
