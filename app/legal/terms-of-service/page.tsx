import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Kanzen Technologies',
};

export default function TermsOfService() {
  return (
    <>
      <div className="not-prose mb-12 border-b border-border-light pb-12">
        <h1 className="text-4xl md:text-5xl font-display font-black text-text-primary tracking-tight mb-4">Terms of Service</h1>
        <p className="text-text-secondary text-lg">Last updated: March 11, 2026</p>
      </div>

      <h2>1. Agreement to Terms</h2>
      <p>
        By accessing or using the website and services provided by Kanzen Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service.
      </p>
      <p>
        If you disagree with any part of the terms, you may not access our services.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The service and its original content, features, and functionality are and will remain the exclusive property of Kanzen Technologies and its licensors.
      </p>
      <p>
        The service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Kanzen Technologies.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>
        When you create an account or interact with our services, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
      </p>
      <p>
        You are responsible for:
      </p>
      <ul>
        <li>Safeguarding the password that you use to access the service.</li>
        <li>Any activities or actions under your password, whether your password is with our service or a third-party service.</li>
      </ul>

      <h2>4. Links to Other Web Sites</h2>
      <p>
        Our service may contain links to third-party web sites or services that are not owned or controlled by Kanzen Technologies.
      </p>
      <p>
        Kanzen Technologies has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Kanzen Technologies shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.
      </p>

      <h2>5. Termination</h2>
      <p>
        We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
      </p>
      <p>
        Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        In no event shall Kanzen Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      </p>
      <p>
        This limitation of liability applies to damages resulting from:
      </p>
      <ul>
        <li>Your access to or use of or inability to access or use the service.</li>
        <li>Any conduct or content of any third party on the service.</li>
        <li>Any content obtained from the service.</li>
        <li>Unauthorized access, use or alteration of your transmissions or content.</li>
      </ul>
      <p>
        This applies whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
      </p>

      <h2>7. Disclaimer</h2>
      <p>
        Your use of the service is at your sole risk. The service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
      </p>
      <p>
        The service is provided without warranties of any kind, whether express or implied, including, but not limited to:
      </p>
      <ul>
        <li>Implied warranties of merchantability</li>
        <li>Fitness for a particular purpose</li>
        <li>Non-infringement</li>
        <li>Course of performance</li>
      </ul>

      <h2>8. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Kanzen Technologies is registered, without regard to its conflict of law provisions.
      </p>
      <p>
        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
      </p>

      <h2>9. Changes to Terms</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </p>
      <p>
        By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at <a href="mailto:kanzen.technology@gmail.com">kanzen.technology@gmail.com</a>.
      </p>
    </>
  );
}
