'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Reviews.module.css';

const images = [
  '/reviews/review-pic-1.png',
  '/review-2.jpg',
  '/review-3.jpg',
];

const reviews = [
  {
    text: `Fresh, crunchy raw groundnuts with a rich, natural flavor — perfect for snacking!`,
    author: 'Megha, Indore',
    product: 'Raw groundnuts',
  },
  {
    text: `High-quality groundnuts that taste great and are wonderfully fresh.`,
    author: 'Aarav, Bengaluru',
    product: 'Raw groundnuts',
  },
  {
    text: `Crunchy and fresh, these raw groundnuts are a snack staple!`,
    author: 'Rajat, Delhi',
    product: 'Raw groundnuts',
  },
  {
    text: `Awesome raw groundnuts — deliciously natural and perfect in every bite.`,
    author: 'Shreya, Chandigarh',
    product: 'Raw groundnuts',
  },
  {
    text: `High-quality groundnuts that taste great and are wonderfully fresh.`,
    author: 'Aarav, Bengaluru',
    product: 'Raw groundnuts',
  },{
    text: `High-quality groundnuts that taste great and are wonderfully fresh.`,
    author: 'Aarav, Bengaluru',
    product: 'Raw groundnuts',
  }
];

export default function ReviewsAside() {
  const [index, setIndex] = useState(0);

  return (
    <section className={styles.wrapper}>
      <h1>Happy Customers</h1>
      <div className={styles.inner}>
        {/* LEFT – IMAGE SLIDER */}
        <div className={styles.imageSection}>
          <div
            className={styles.imageSlider}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div className={styles.imageSlide} key={i}>
                <Image
                  src={img}
                  alt="Customer review"
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>

          {/* arrows */}
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={() =>
              setIndex(index === 0 ? images.length - 1 : index - 1)
            }
          >
            ←
          </button>
          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={() =>
              setIndex(index === images.length - 1 ? 0 : index + 1)
            }
          >
            →
          </button>
        </div>

        {/* RIGHT – REVIEWS GRID */}
        <div className={styles.reviews}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.reviewCard}>
              <p>{r.text}</p>
              <strong>
                {r.author} – {r.product}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
