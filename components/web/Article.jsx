"use client";

import Image from "next/image";
import styles from "./Article.module.css";
import { products } from "@/data/products";
import ProductCard from "@/components/web/ProductCard";

export default function Article() {
  const bestSeller = products.find((p) => p.bestSeller);

  const features = [
    {
      title: "Sourced directly from Puttaparthi farmers",
      img: "/article/first.avif",
    },
    {
      title: "Cleaned and hygienically packed in licensed facilities",
      img: "/article/second.avif",
    },
    {
      title: "No middlemen, fair sourcing practices",
      img: "/article/third.avif",
    },
    {
      title: "FSSAI compliant food-grade processing",
      img: "/article/fourth.avif",
    },
  ];

  return (
    <div>
      {/* FEATURES */}
      <div className={styles.features}>
        {features.map((item, index) => (
          <div className={styles.featureItem} key={index}>
            <Image src={item.img} alt={item.title} width={60} height={60} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* BEST SELLER */}
      <div className={styles.productWrapper}>
        <h1>Our Best Sellers</h1>

        {bestSeller && <ProductCard product={bestSeller} />}
      </div>
    </div>
  );
}

