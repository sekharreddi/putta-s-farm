"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "@/components/web/Article.module.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(product.weights[0]);
  const [isHovered, setIsHovered] = useState(false);

  const price = product.prices[weight];

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const cartProduct = {
    id: product.id,
    name: product.name,
    weight,
    image: product.images.primary,
    variantId: `${product.id}-${weight}`,
    price,
  };

  return (
    <div
      className={styles.productCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE */}
      <Link href={`/products/${product.id}`} className={styles.productImage}>
        <Image
          src={product.images.primary}
          alt={product.name}
          fill
          className={`${styles.img} ${styles.imgPrimary}`}
          style={{ opacity: isHovered ? 0 : 1 }}
        />

        <Image
          src={product.images.hover}
          alt={product.name}
          fill
          className={`${styles.img} ${styles.imgHover}`}
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </Link>

      {/* CONTENT */}
      <div className={styles.cardContent}>
        <h2 className={styles.productTitle}>{product.name}</h2>

        <div className={styles.rating}>
          <span className={styles.stars}>★★★★☆</span>
          <span className={styles.ratingValue}>({product.rating})</span>
        </div>

        {/* WEIGHT */}
        <select
          className={styles.weightSelect}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        >
          {product.weights.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>

        {/* PRICE */}
        <div className={styles.price}>₹{price}</div>

        {/* ACTION */}
        <div className={styles.actionRow}>
          <div className={styles.stepper}>
            <button onClick={decrement} type="button">
              −
            </button>

            <span>{quantity.toString().padStart(2, "0")}</span>

            <button onClick={increment} type="button">
              +
            </button>
          </div>

          <button
            className={styles.addToCart}
            onClick={() => addToCart(cartProduct, quantity)}
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
