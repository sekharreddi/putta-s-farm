'use client';

import styles from './ShippingPolicy.module.css';

export default function TermsOfService() {
  return (
    <main className={styles.container}>
      <h1>Shipping Policy</h1>

      <p>
        Please read the following Terms of Service carefully before placing an
        order on our website. By placing an order, you agree to be bound by
        these terms.
      </p>

      <ul>
        <li>
          Once an order is placed, it is processed immediately and cannot be
          modified.
        </li>

        <li>
          Payment confirmation may take up to <strong>48 hours</strong> as per
          bank processing timelines.
        </li>

        <li>
          After successful payment confirmation, the order will be packed and
          shipped.
        </li>

        <li>
          Once the order is shipped, an automated email containing the tracking
          details will be sent to your registered email address.
        </li>

        <li>
          Complaints related to replacement of damaged or broken products will
          be accepted only if reported within <strong>48 hours</strong> of
          delivery.
        </li>

        <li>
          For any queries or support, customers may contact us via email at{' '}
          <strong>care@puttasfarm.com</strong>.
        </li>

        <li>
          ORGANIC INDIA may send emails, SMS, WhatsApp, or RCS communications
          related to product information, promotional activities, or special
          offers using your registered contact details. If you wish to stop
          receiving such communications, you may email us at{' '}
          <strong>care@puttasform.com</strong> with a request to unsubscribe.
        </li>
      </ul>
    </main>
  );
}
