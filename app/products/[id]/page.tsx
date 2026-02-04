"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import styles from "./ProductDetail.module.css";
type Product = {
  id: string;
  name: string;
  images: {
    primary: string;
    hover: string;
  };
  rating: number;
  weights: string[];
  prices: Record<string, number>;
  bestSeller: boolean;
};


export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart() as any;

  const productId = params?.id as string;
  const product = products.find(
  (p) => p.id === productId) as Product | undefined;


  const [selectedWeight, setSelectedWeight] = useState<string>(
    product?.weights?.[0] || ""
  );
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h1>Product not found</h1>
        <a href="/products" style={{ color: "#4a7c59" }}>
          Go back to products
        </a>
      </div>
    );
  }

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // ✅ Price directly from product data
  const currentPrice = product.prices[selectedWeight];

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        weight: selectedWeight,
        image: product.images.primary,
        variantId: `${product.id}-${selectedWeight}`,
        price: currentPrice,
      },
      quantity
    );
  };

  return (
    <div>
    <div className={styles.container}>
      <div className={styles.productGrid}>
        {/* LEFT - IMAGE */}
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrapper}>
            <Image
              src={product.images.primary}
              alt={product.name}
              fill
              className={styles.mainImage}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div className={styles.detailsSection}>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.rating}>
            <span className={styles.stars}>★★★★☆</span>
            <span className={styles.ratingText}>
              {product.rating} (201 Reviews)
            </span>
          </div>

          {/* PRICE */}
          <div className={styles.price}>
            ₹{currentPrice.toLocaleString()}.00
            <span className={styles.taxText}>(Inc. of all taxes)</span>
          </div>

          {/* SIZE SELECTION */}
          <div className={styles.sections}>
            <label className={styles.label}>Size</label>
            <div className={styles.weightOptions}>
              {product.weights.map((w: string) => {
                const price = product.prices[w];
                const isActive = selectedWeight === w;

                return (
                  <button
                    key={w}
                    className={`${styles.weightBtn} ${
                      isActive ? styles.weightBtnActive : ""
                    }`}
                    onClick={() => setSelectedWeight(w)}
                    type="button"
                  >
                    <div className={styles.weightSize}>{w}</div>
                    <div className={styles.weightPrice}>
                      ₹{price.toLocaleString()}.00
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* QUANTITY */}
          <div className={styles.sections}>
            <label className={styles.label}>Quantity</label>
            <div className={styles.quantityStepper}>
              <button
                className={styles.stepperBtn}
                onClick={decrement}
                type="button"
              >
                −
              </button>
              <span className={styles.quantityValue}>
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                className={styles.stepperBtn}
                onClick={increment}
                type="button"
              >
                +
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className={styles.actionButtons}>
            <button
              className={styles.addToCartBtn}
              onClick={handleAddToCart}
              type="button"
            >
              Add to cart
            </button>

            <button
              className={styles.buyNowBtn}
              type="button"
              onClick={() => {
                handleAddToCart();
                window.location.href = "/checkout";
              }}
            >
              Buy it now
            </button>
          </div>

          {/* DESCRIPTION */}
          <div className={styles.description}>
            <h3>Product Details</h3>
            <p>
              Premium quality {product.name.toLowerCase()} sourced directly from
              organic farms. Rich in nutrients and naturally processed to retain
              maximum health benefits. Perfect for daily consumption.
            </p>
          </div>
        </div>
      </div>
      </div>
      <section className={styles.section}>
      <div className={styles.containers}>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/Farmers.webp"   // put image inside /public
            alt="Our Farmer"
            width={500}
            height={600}
            className={styles.image}
            priority
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h2>Our Farmers Are the Heart of Our Purpose</h2>

          <p>
            At Organic India, farmers are the heart of our story. We nurture
            their growth through training, opportunity and care, especially
            for those from marginalized communities.
          </p>

          <p>
            With fair wages, healthcare, empowerment and gender equality
            support, and community infrastructure, we help families thrive.
            When farmers feel uplifted, entire communities flourish,
            creating lasting and collective wellbeing.
          </p>

          <button className={styles.button}>Learn More</button>
        </div>

      </div>
    </section>
    </div>
  );
}
