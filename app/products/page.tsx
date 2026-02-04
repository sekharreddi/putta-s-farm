"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import styles from "@/components/web/Article.module.css";

export function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart() as any;
  const [quantity, setQuantity] = useState<number>(1);
  const [weight, setWeight] = useState<string>(product.weights[0]);
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
      {/* IMAGE CONTAINER - Made clickable */}
      <Link href={`/products/${product.id}`} className={styles.productImage}>
        {/* Primary Image */}
        <Image
          src={product.images.primary}
          alt={product.name}
          fill
          className={`${styles.img} ${styles.imgPrimary}`}
          style={{ opacity: isHovered ? 0 : 1 }}
          sizes="(max-width: 768px) 100vw, 300px"
        />
        {/* Hover Image */}
        <Image
          src={product.images.hover}
          alt={product.name}
          fill
          className={`${styles.img} ${styles.imgHover}`}
          style={{ opacity: isHovered ? 1 : 0 }}
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </Link>

      {/* CONTENT */}
      <div className={styles.cardContent}>
        <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className={styles.productTitle}>{product.name}</h2>
        </Link>

        <div className={styles.rating}>
          <span className={styles.stars}>★★★★☆</span>
          <span className={styles.ratingValue}>({product.rating})</span>
        </div>

        <select
          className={styles.weightSelect}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        >
          {product.weights.map((w: string) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
        <div className={styles.price}>
          ₹{price}
        </div>

        <div className={styles.actionRow}>
          <div className={styles.stepper}>
            <button className={styles.stepperBtn} onClick={decrement} type="button">−</button>
            <span className={styles.stepperValue}>
            {quantity.toString().padStart(2, "0")}
            </span>
            <button className={styles.stepperBtn} onClick={increment} type="button">+</button>
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

export default function ProductsPage() {
  return (
    <div style={{ padding: "60px", background: "#f7f4f3", minHeight: "100vh" }}>
      <h1 style={{ color:" #5B2333", textAlign: "center", marginBottom: "40px" }}>All Products</h1>

      <div className={styles.productsGrid}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}