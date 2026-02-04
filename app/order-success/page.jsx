"use client";

import { useSearchParams } from "next/navigation";

export default function OrderSuccess() {
  const params = useSearchParams();
  const orderId = params.get("id");

  return (
    <div style={{ padding: 40 }}>
      <h1>🎉 Order Placed Successfully</h1>
      <p>Order ID: {orderId}</p>
      <p>Thank you for shopping with us ❤️</p>
    </div>
  );
}
