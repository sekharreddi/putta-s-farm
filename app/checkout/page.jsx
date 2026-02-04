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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    const { data, error } = await supabase
      .from("orders")
      .insert({
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
      })
      .select()
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    startRazorpay(data);
  };

  const startRazorpay = (order) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.total_amount * 100,
      currency: "INR",
      name: "Puttaparthi Farms",
      description: "Order Payment",
      handler: async (response) => {
        await supabase
          .from("orders")
          .update({
            payment_status: "paid",
            razorpay_payment_id: response.razorpay_payment_id,
          })
          .eq("id", order.id);

        clearCart();
        router.push(`/order-success?id=${order.id}`);
      },
      prefill: {
        name: form.full_name,
        email: form.email,
        contact: form.phone,
      },
    };

    new window.Razorpay(options).open();
  };

  return (
    <div style={{ padding: 30 }}>
    <div className={styles.checkout}>
  <h1 className={styles.title}>Checkout</h1>

  {!user && (
    <input
      className={styles.input}
      name="email"
      placeholder="Email"
      onChange={handleChange}
    />
  )}

  <input className={styles.input} name="full_name" placeholder="Full Name" onChange={handleChange} />
  <input className={styles.input} name="phone" placeholder="Phone" onChange={handleChange} />
  <input className={styles.input} name="address_line1" placeholder="Address" onChange={handleChange} />
  <input className={styles.input} name="city" placeholder="City" onChange={handleChange} />
  <input className={styles.input} name="state" placeholder="State" onChange={handleChange} />
  <input className={styles.input} name="pincode" placeholder="Pincode" onChange={handleChange} />

  <button className={styles.payButton} onClick={placeOrder}>
    Pay ₹{cartTotal}
  </button>
   </div>
   </div>

);
}


