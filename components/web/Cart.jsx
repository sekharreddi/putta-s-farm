"use client";

import { useCart } from "@/context/CartContext";
import styles from "./Cart.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cart({ onClose }) {
  const router = useRouter();

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    setQty,
    removeItem,
    cartTotal,
    hydrated,
  } = useCart();


if (!hydrated) return null; // ⛔ prevents flicker & empty render


  return (
    <div className={styles.cartWrapper} onClick={onClose}>
      <div
        className={`${styles.cart} ${styles.cartOpen}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className={styles.cartHeader}>
          <h3>My Cart</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {!hydrated ? (
          <div className={styles.loading}>Loading cart…</div>
        ) : cartItems.length === 0 ? (
          <p className={styles.empty}>Your cart is empty 🛒</p>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <div key={item.variantId} className={styles.cartItem}>
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <p>{item.weight}</p>
                    <span>₹{item.price}</span>
                  </div>

                  <div className={styles.qtyControls}>
                    <button onClick={() => decreaseQty(item.variantId)}>−</button>
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) =>
                        setQty(item.variantId, Number(e.target.value))
                      }
                    />
                    <button onClick={() => increaseQty(item.variantId)}>+</button>
                  </div>

                  <div>₹{item.price * item.qty}</div>

                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.variantId)}
                  >
                    <Image src="/recycle-bin.png" alt="Remove" width={22} height={22} />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.cartFooter}>
              <div className={styles.cartTotal}>
                <span>Total</span>
                <strong>₹{cartTotal}</strong>
              </div>

              <button
                className={styles.checkoutBtn}
                onClick={() => {
                  onClose();
                  router.push("/checkout");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


