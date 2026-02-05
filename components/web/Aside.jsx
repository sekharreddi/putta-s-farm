'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Aside.module.css';

const slides = [
  {
    img: '/one.jpg',
    text: `We work closely with local farmers in Puttaparthi to bring clean,
    honest groundnuts directly to urban kitchens. Raw groundnuts are rich
    in plant-based protein and healthy fats.`,
  },
  {
    img: '/two.jpg',
    text: `Our groundnuts are carefully sorted and hygienically packed.
    They support heart health, energy levels, and everyday cooking needs.`,
  },
];

export default function Aside() {
  const [index, setIndex] = useState(0);

  return (
    <section className={styles.wrapper}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className={styles.slide} key={i}>
            <div className={styles.inner}>

              {/* LEFT ARROW */}
              <button
                className={`${styles.arrow} ${styles.left}`}
                onClick={() =>
                  setIndex(index === 0 ? slides.length - 1 : index - 1)
                }
              >
                ←
              </button>

              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.img}
                  alt="Raw groundnuts"
                  fill
                  className={styles.image}
                  priority
                />
              </div>

              {/* TEXT */}
              <div className={styles.text}>
                <p>{slide.text}</p>
              </div>

              {/* RIGHT ARROW */}
              <button
                className={`${styles.arrow} ${styles.right}`}
                onClick={() =>
                  setIndex(index === slides.length - 1 ? 0 : index + 1)
                }
              >
                →
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

