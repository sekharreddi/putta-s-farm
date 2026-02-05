'use client';

import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.container}>

      <h1>Privacy Policy</h1>

      <p>
        Welcome to our website. Your privacy is important to us, and this Privacy
        Policy explains how we collect, use, protect, and share your personal
        information when you visit or use our website.
      </p>

      <p>
        By accessing or using this website, you agree to the terms of this
        Privacy Policy. If you do not agree, please do not use the website. This
        policy may be updated from time to time, and any changes will be posted
        on this page. Changes will apply only to information collected after the
        update.
      </p>

      <h2>Information We Collect</h2>

      <p>
        We may collect personal information that you voluntarily provide to us,
        including but not limited to:
      </p>

      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>Name</li>
        <li>Email address</li>
        <li>Contact details</li>
        <li>Postal address (if required)</li>
      </ul>

      <p>
        This information is collected when you fill out forms, subscribe to
        newsletters, contact us, or use certain features of the website. By
        submitting your email address, you consent to receiving communications
        such as newsletters or updates. You may unsubscribe at any time.
      </p>

      <h2>Cookies and Tracking</h2>

      <p>
        Our website may use cookies and similar tracking technologies to enhance
        user experience and analyze website performance. These technologies help
        us understand:
      </p>

      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>Browser type and device information</li>
        <li>Pages visited and time spent on the site</li>
        <li>Number of visitors and usage patterns</li>
      </ul>

      <p>
        Cookies do not collect personal information by themselves. However, if
        you have previously provided personal information, cookies may be linked
        to that data. Aggregated and anonymous data may be shared with third
        parties for analytics and performance improvement purposes.
      </p>

      <p>
        You can choose to disable cookies through your browser settings, though
        some features of the website may not function properly.
      </p>

      <h2>Use of Information</h2>

      <p>
        We do not sell, rent, or trade your personal information for marketing
        purposes. We may share your information only in the following situations:
      </p>

      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>When required or permitted by law</li>
        <li>To comply with legal processes or government requests</li>
        <li>
          To prevent or investigate fraud, security issues, or unauthorized
          transactions
        </li>
        <li>
          To protect our rights, property, or safety, and that of our users
        </li>
      </ul>

      <p>
        Any third parties involved are obligated to keep your information secure
        and confidential.
      </p>

      <h2>Data Security</h2>

      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, misuse, or disclosure. Access to personal data is
        limited to authorized employees, agents, or contractors who are required
        to maintain confidentiality.
      </p>

      <p>
        All email communications from us include an option to opt out of future
        messages.
      </p>

      <h2>Third-Party Sharing</h2>

      <p>
        We may share information only when required by law or to prevent fraud or
        unauthorized activities.
      </p>

      <h2>Policy Updates</h2>

      <p>
        We reserve the right to update this Privacy Policy at any time. Changes
        will be posted on this page.
      </p>
    </main>
  );
}
