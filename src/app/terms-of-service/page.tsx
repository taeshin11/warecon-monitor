import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — WarEcon Monitor",
  description:
    "Terms of Service for WarEcon Monitor. Understand the conditions for using our free war-impact commodity price dashboard.",
  openGraph: {
    title: "Terms of Service — WarEcon Monitor",
    description: "Terms of Service for the WarEcon Monitor commodity price dashboard.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://warecon-monitor.vercel.app"}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose-custom">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2 font-heading">
          Terms of Service
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-8">Last updated: March 29, 2025</p>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Welcome to WarEcon Monitor. By accessing or using our website at
          warecon-monitor.vercel.app (the &quot;Service&quot;), you agree to be bound by these
          Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not
          use the Service.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            1. Description of Service
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            WarEcon Monitor is a free, publicly accessible web dashboard that displays commodity
            price data influenced by geopolitical events and armed conflicts. The Service provides
            real-time and historical commodity prices, interactive charts with war-event annotations,
            an impact calculator tool, and a price alert subscription feature. The Service is
            provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            2. Acceptable Use
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            You agree to use the Service only for lawful purposes and in accordance with these
            Terms. You agree NOT to:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
            <li>
              Use automated systems, bots, scrapers, or similar tools to access the Service in a
              manner that sends more requests than a human could reasonably produce in the same
              period
            </li>
            <li>
              Attempt to interfere with, disrupt, or overload the Service&apos;s infrastructure,
              servers, or connected networks
            </li>
            <li>
              Reproduce, duplicate, copy, sell, or exploit any portion of the Service for commercial
              purposes without explicit written permission
            </li>
            <li>
              Remove, alter, or obscure any copyright, trademark, or other proprietary notices
              displayed on the Service
            </li>
            <li>
              Use the Service to engage in any activity that violates applicable local, national, or
              international law
            </li>
            <li>
              Submit false, misleading, or fraudulent information through any forms on the Service
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            3. Financial Disclaimer
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            <strong>
              WarEcon Monitor is an informational tool only. Nothing on this Service constitutes
              financial advice, investment recommendation, or solicitation to buy or sell any
              financial instrument.
            </strong>
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            Commodity prices displayed on the Service are sourced from third-party data providers
            (including Yahoo Finance) and may be delayed, inaccurate, or incomplete. We do not
            guarantee the accuracy, completeness, or timeliness of any data presented on the
            Service.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Trading and investing in commodities involves substantial risk of loss and is not
            suitable for all investors. Past performance is not indicative of future results. You
            should consult with a qualified financial advisor before making any investment decisions.
            WarEcon Monitor, its creators, and affiliates are not responsible for any financial
            losses incurred as a result of using information from this Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            4. Intellectual Property
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            The Service, including its design, layout, graphics, text, and software, is the property
            of WarEcon Monitor and is protected by intellectual property laws. The underlying source
            code is available under the MIT License on GitHub.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Commodity price data displayed on the Service is sourced from third-party providers and
            is subject to their respective terms of use and licensing agreements. War event
            annotations are curated by WarEcon Monitor from publicly available news sources.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            5. Third-Party Services and Links
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            The Service integrates with third-party services including Yahoo Finance (data provider),
            Google Sheets (data collection), and advertising networks (Adsterra, Google AdSense).
            These third-party services are governed by their own terms of service and privacy
            policies. We are not responsible for the content, accuracy, or practices of any
            third-party service. The inclusion of third-party advertisements does not imply
            endorsement of the advertised products or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            6. Limitation of Liability
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
            To the fullest extent permitted by applicable law, WarEcon Monitor and its creators
            shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-1 mb-3">
            <li>Loss of profits, revenue, or anticipated savings</li>
            <li>Loss of data or business interruption</li>
            <li>Financial losses from investment decisions informed by the Service</li>
            <li>Damages arising from Service unavailability, errors, or inaccuracies in data</li>
            <li>Damages arising from unauthorized access to or alteration of your data</li>
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Our total liability for any claim arising out of or relating to these Terms or the
            Service shall not exceed the amount you paid to us (which is $0, as the Service is
            free).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            7. Disclaimer of Warranties
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, OR ACCURACY. WE DO NOT WARRANT THAT THE SERVICE WILL BE
            UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS WILL BE CORRECTED. WE DO NOT
            WARRANT THE ACCURACY OR COMPLETENESS OF ANY COMMODITY PRICE DATA OR WAR EVENT
            ANNOTATIONS DISPLAYED ON THE SERVICE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            8. Indemnification
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            You agree to indemnify, defend, and hold harmless WarEcon Monitor and its creators from
            any claims, damages, losses, liabilities, costs, or expenses (including reasonable
            attorney&apos;s fees) arising out of or related to your use of the Service, your
            violation of these Terms, or your violation of any rights of a third party.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            9. Service Availability and Modifications
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We reserve the right to modify, suspend, or discontinue the Service (or any part of it)
            at any time without prior notice. We may also update these Terms from time to time.
            Continued use of the Service after changes to these Terms constitutes acceptance of the
            revised Terms. We are under no obligation to maintain or update the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            10. Governing Law
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            These Terms shall be governed by and construed in accordance with applicable laws,
            without regard to conflict of law principles. Any disputes arising from these Terms or
            the Service shall be resolved through good-faith negotiation before pursuing any legal
            remedy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            11. Contact
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            If you have questions about these Terms of Service, please reach out through the Contact
            section on our website.
          </p>
        </section>
      </article>
    </div>
  );
}
