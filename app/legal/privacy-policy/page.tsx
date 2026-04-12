import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Kanzen Technologies',
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="not-prose mb-12 border-b border-border-light pb-12">
        <h1 className="text-4xl md:text-5xl font-display font-black text-text-primary tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-text-secondary text-lg">Last updated: March 11, 2026</p>
      </div>

      <h2>Introduction</h2>
      <h3>Purpose of the Policy</h3>
      <p>
        This Privacy Policy outlines how Kanzen Technologies collects, uses, discloses, and protects your information when you visit our website or interact with our services.
      </p>
      <p>
        It is designed to help you understand the types of data we collect, why we collect it, and how we use and manage that information. By making our data practices transparent, we aim to foster trust and ensure compliance with applicable data protection laws.
      </p>

      <h3>Scope of Coverage</h3>
      <p>
        This policy applies to all visitors, users, and others who access our website or use our services, regardless of their physical location or device used. It covers all data interactions across our platforms, including:
      </p>
      <ul>
        <li>Our primary website</li>
        <li>Contact forms</li>
        <li>Email communications</li>
        <li>Third-party service integrations that collect or process data on our behalf</li>
      </ul>

      <h3>Consent</h3>
      <p>
        By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with the practices outlined here, we recommend discontinuing use of our services.
      </p>
      <p>
        Continued use of our website following the publication of updates constitutes your acceptance of those changes.
      </p>

      <h2>Information We Collect</h2>
      <h3>Personal Information</h3>
      <p>
        We may collect personally identifiable information when you submit inquiries, request quotes, subscribe to newsletters, or engage in any other form of communication with us. This information includes:
      </p>
      <ul>
        <li>Your full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Job title and company name</li>
        <li>Any other details you provide voluntarily</li>
      </ul>

      <h3>Non-Personal Information</h3>
      <p>
        Non-personal information includes data that does not directly identify you but provides insights into your usage of our website. This data helps us analyze trends, administer the site, and improve user experience. It may include:
      </p>
      <ul>
        <li>Browser type and operating system</li>
        <li>Language preferences</li>
        <li>Referring URLs</li>
        <li>Device information</li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <p>
        We use cookies, tracking pixels, and third-party analytics tools to collect information about your interaction with our site. These tools help us understand visitor behavior and optimize our site accordingly by tracking:
      </p>
      <ul>
        <li>Pages visited</li>
        <li>Time spent on each page</li>
        <li>User flow</li>
        <li>Interactions with site features</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <h3>To Provide and Maintain Our Services</h3>
      <p>
        Your information is essential for us to deliver the services you request. Without this information, we may be unable to provide personalized service or maintain consistent communication. We use it to:
      </p>
      <ul>
        <li>Process your inquiries</li>
        <li>Manage project communications</li>
        <li>Create client accounts</li>
        <li>Fulfill our contractual obligations</li>
      </ul>

      <h3>To Communicate with You</h3>
      <p>
        We may use your contact information to send you service-related messages, respond to questions, deliver project updates, or provide administrative notices.
      </p>
      <p>
        With your consent, we may also send promotional materials, newsletters, and information about new offerings or features that may interest you.
      </p>

      <h3>To Improve User Experience</h3>
      <p>
        We use the data we collect to analyze how our website is being used and to identify areas for improvement. By understanding user behavior, we can refine our content, streamline navigation, and ensure the website functions seamlessly across devices.
      </p>
      <p>
        Your feedback and behavioral data inform design and development decisions that enhance overall usability.
      </p>

      <h2>Sharing and Disclosure</h2>
      <h3>Service Providers and Partners</h3>
      <p>
        We may share your information with third-party service providers who assist us in hosting, maintaining, and analyzing our website and communications. These partners are contractually obligated to safeguard your information and only use it for the purposes specified by us.
      </p>

      <h3>For Legal Requirements</h3>
      <p>
        We may disclose your personal information if required to do so by law or in response to valid legal processes such as subpoenas, court orders, or government requests.
      </p>
      <p>
        We also reserve the right to disclose information to protect our legal rights, prevent fraud, and ensure the security of our users and the public.
      </p>

      <h3>In Business Transfers</h3>
      <p>
        In the event that Kanzen Technologies is involved in a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the business transaction. We will ensure that any new entity handling your data is bound by privacy obligations consistent with this policy.
      </p>

      <h2>Data Security</h2>
      <h3>How We Protect Your Data</h3>
      <p>
        We implement industry-standard security measures, including encryption, firewalls, and secure access controls, to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
      </p>
      <p>
        Our internal processes are designed to minimize data exposure and mitigate potential security risks.
      </p>

      <h2>Third-Party Links and Services</h2>
      <h3>External Websites</h3>
      <p>
        Our website may contain links to other websites not operated by Kanzen Technologies. We are not responsible for the privacy practices or the content of these external sites. We encourage users to review the privacy policies of any third-party sites they visit.
      </p>

      <h3>Embedded Content</h3>
      <p>
        Articles or pages on our website may include embedded content (e.g., videos, images, articles) from other websites. This content behaves in the same way as if the visitor had visited the original website, which may collect data or use cookies independently.
      </p>
    </>
  );
}
