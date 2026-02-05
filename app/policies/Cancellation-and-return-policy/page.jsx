'use client';

import styles from './CancellationReturnPolicy.module.css';

export default function CancellationReturnPolicy() {
  return (
    <main className={styles.container}>
      <h1>Cancellation & Return Policy</h1>

      <p>
        Mehrotra Consumer Products Pvt. Ltd endeavors to provide the highest
        quality products to its customers. However, if you are dissatisfied
        with your purchase or have concerns regarding the delivered products,
        the following policy outlines the process for order cancellation and
        product returns.
      </p>

      <h2>Cancellation Policy</h2>

      <ul>
        <li>
          Customers may cancel their order at any time before the order is
          marked as <strong>out for delivery</strong>.
        </li>
        <li>
          Upon successful cancellation, the refund will be initiated instantly
          to the original mode of payment.
        </li>
        <li>
          The refunded amount will be credited within
          <strong> 5–7 business days</strong>, depending on the bank or payment
          provider.
        </li>
        <li>
          Once an order is out for delivery, it cannot be cancelled or refunded.
        </li>
      </ul>

      <h2>Return Policy</h2>

      <ul>
        <li>
          Returns will be considered only in cases where the product delivered
          is damaged, defective, or has quality issues attributable to the
          company.
        </li>
        <li>
          Mehrotra Consumer Products Pvt. Ltd reserves the right to investigate
          the issue and take appropriate action after verification.
        </li>
        <li>
          Return requests must be initiated within
          <strong> 36 hours</strong> of successful delivery of the order.
        </li>
        <li>
          Customers must raise the return request by emailing
          <strong> customercare@puttasfarm.com</strong>.
        </li>
        <li>
          Providing clear product images is mandatory while raising a return
          request for damaged products.
        </li>
        <li>
          All return requests are subject to approval by the company after due
          verification.
        </li>
        <li>
          Returned items must be unused, unopened, and in their original
          packaging along with the original receipt.
        </li>
      </ul>

      <p>
        For any queries or assistance regarding cancellation or returns,
        customers may contact us at <strong>(120) 426 0545</strong> or email us
        at <strong>customercare@puttasfarm.com</strong>.
      </p>

      <p>
        All product return requests remain subject to final approval by the
        company.
      </p>
    </main>
  );
}
