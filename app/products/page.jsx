"use client";

import ProductCard from "@/components/web/ProductCard";
import { products } from "@/data/products";
import styles from "@/components/web/Article.module.css";

export default function ProductsPage() {
  return (
    <div style={{ padding: "60px", background: "#f7f4f3" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        All Products
      </h1>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

