"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabaseClient";
import styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    address_line1: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
  });

  // ✅ JSX version (no TypeScript types)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    if (!form.full_name || !form.phone || !form.address_line1) {
      alert("Please fill all required fields");
      return;
    }

    const { error } = await supabase.from("orders").insert([
      {
        user_id: user?.id || null,
        guest_email: user ? null : form.email,
        full_name: form.full_name,
        phone: form.phone,
        address_line1: form.address_line1,
        city: form.city,
        state: form.state,
        pincode: form.pincode,
        items: cartItems,
        total_amount: cartTotal,
        status: "pending",
      },
    ]);

    if (error) {
      alert("Order failed: " + error.message);
      return;
    }

    alert("Order placed successfully!");

    clearCart();
    router.push("/thank-you");
  };

  return (
    <div className={styles.checkout}>
      <h1 className={styles.title}>Checkout</h1>

      {!user && (
        <input
          className={styles.input}
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
      )}

      <input
        className={styles.input}
        name="full_name"
        placeholder="Full Name"
        value={form.full_name}
        onChange={handleChange}
      />

      <input
        className={styles.input}
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        className={styles.input}
        name="address_line1"
        placeholder="Address"
        value={form.address_line1}
        onChange={handleChange}
      />

      <input
        className={styles.input}
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />

      <input
        className={styles.input}
        name="state"
        placeholder="State"
        value={form.state}
        onChange={handleChange}
      />

      <input
        className={styles.input}
        name="pincode"
        placeholder="Pincode"
        value={form.pincode}
        onChange={handleChange}
      />

      <button className={styles.payButton} onClick={placeOrder}>
        Place Order ₹{cartTotal}
      </button>
    </div>
  );
}



