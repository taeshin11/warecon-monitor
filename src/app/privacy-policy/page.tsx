import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — WarEcon Monitor",
  description:
    "WarEcon Monitor privacy policy. Learn how we handle your data, cookies, and third-party services on our free commodity price dashboard.",
  openGraph: {
    title: "Privacy Policy — WarEcon Monitor",
    description: "Privacy policy for WarEcon Monitor commodity price dashboard.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app"}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose-custom">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2 font-heading">
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-8">Last updated: March 29, 2025</p>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          WarEcon Monitor (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website
          at warecon-monitor.vercel.app (the &quot;Service&quot;). This Privacy Policy explains how
          we collect, use, and protect information when you use our Service.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            1. Information We Collect
          </h2>
          <h3 className="font-bold text-[var(--text-primary)] mb-2 mt-4">
            1.1 Information You Provide Voluntarily
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            When you use our Price Alert signup form, you may voluntarily provide your email address
            and commodity preferences. When you use the Impact Calculator, the calculation parameters
            (commodity, date range) may be recorded for analytics purposes.
          </p>
          <h3 className="font-bold text-[var(--text-primary)] mb-2 mt-4">
            1.2 Information Collected Automatically
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            When you visit our Service, we may automatically collect certain information, including:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1 mb-3">
            <li>Browser type and version</li>
            <li>Referring URL</li>
            <li>Pages visited and time spent on each page</li>
            <li>Aggregate visitor count data (daily and total visits)</li>
            <li>Device type and screen resolution</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We do not collect personally identifiable information (PII) through automatic means. Our
            visitor counter tracks aggregate numbers only, not individual user identities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            2. How We Use Your Information
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
            <li>To provide and maintain the Service</li>
            <li>To send price alert notifications to subscribers (email address required)</li>
            <li>To analyze usage patterns and improve the Service</li>
            <li>To monitor aggregate traffic for capacity planning</li>
            <li>To detect and prevent technical issues or abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            WarEcon Monitor uses the following tracking technologies:
          </p>
          <h3 className="font-bold text-[var(--text-primary)] mb-2 mt-4">3.1 Local Storage</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            We use browser localStorage to cache commodity data locally (improving performance and
            reducing API calls) and to store aggregate visitor count data. This data is stored only
            on your device and is not transmitted to our servers.
          </p>
          <h3 className="font-bold text-[var(--text-primary)] mb-2 mt-4">3.2 Session Storage</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            We use sessionStorage to ensure that certain ad formats (such as popunder
            advertisements) are only displayed once per browser session, improving your browsing
            experience.
          </p>
          <h3 className="font-bold text-[var(--text-primary)] mb-2 mt-4">
            3.3 Third-Party Cookies (Advertising)
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            Our advertising partners, including Adsterra and potentially Google AdSense, may use
            cookies and similar technologies to serve relevant advertisements. These third-party
            cookies are governed by the respective privacy policies of those advertising networks:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1 mb-3">
            <li>Adsterra Privacy Policy: https://adsterra.com/privacy-policy/</li>
            <li>Google AdSense Privacy Policy: https://policies.google.com/privacy</li>
          </ul>
          <h3 className="font-bold text-[var(--text-primary)] mb-2 mt-4">
            3.4 Google Analytics (if enabled)
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We may use Google Analytics to understand how visitors interact with our Service. Google
            Analytics uses cookies to collect anonymous traffic data. You can opt out of Google
            Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            4. Third-Party Services
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            Our Service integrates with the following third-party services:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
            <li><strong>Yahoo Finance</strong> — provides commodity price data (subject to Yahoo&apos;s Terms of Service)</li>
            <li><strong>Vercel</strong> — hosts our website (subject to Vercel&apos;s Privacy Policy)</li>
            <li><strong>Google Sheets / Apps Script</strong> — processes form submissions (subject to Google&apos;s Privacy Policy)</li>
            <li><strong>Adsterra / Google AdSense</strong> — serves advertisements (subject to their respective privacy policies)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            5. Data Retention
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Email addresses provided through the Price Alert form are stored in Google Sheets and
            retained until you request removal. Automatically collected usage data is retained in
            aggregate form and does not contain personally identifiable information. You may request
            deletion of your email address at any time by contacting us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            6. Your Rights
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            Depending on your jurisdiction, you may have the following rights regarding your personal
            data:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1">
            <li><strong>Right of Access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Right to Rectification</strong> — request correction of inaccurate data</li>
            <li><strong>Right to Erasure</strong> — request deletion of your personal data</li>
            <li><strong>Right to Object</strong> — object to processing of your data for advertising purposes</li>
            <li><strong>Right to Data Portability</strong> — request your data in a portable format</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            7. Children&apos;s Privacy
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Our Service is not directed to individuals under the age of 13. We do not knowingly
            collect personal information from children under 13. If you become aware that a child has
            provided us with personal data, please contact us and we will take steps to delete such
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            8. Changes to This Policy
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated &quot;Last updated&quot; date. Your continued use of the Service after
            any changes constitutes acceptance of the new Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            9. Contact Us
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            If you have any questions about this Privacy Policy or wish to exercise your data rights,
            please contact us through the Contact section on our website.
          </p>
        </section>
      </article>
    </div>
  );
}
