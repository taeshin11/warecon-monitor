"use client";

import { useT } from "@/lib/i18n";

export default function AboutContent() {
  const t = useT();

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose-custom">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-6 font-heading">
          {t("about.title")}
        </h1>
        <p className="text-[var(--text-secondary)] mb-8">{t("about.subtitle")}</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            {t("about.problemTitle")}
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {t("about.problemText")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            {t("about.solutionTitle")}
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {t("about.solutionText")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            {t("about.whoTitle")}
          </h2>
          <div className="space-y-3">
            {["about.who1", "about.who2", "about.who3", "about.who4"].map((key) => (
              <div key={key} className="bg-[var(--bg-secondary)] rounded-[var(--radius-md)] p-4">
                <p className="text-sm text-[var(--text-secondary)]">{t(key)}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 font-heading">
            {t("about.dataTitle")}
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {t("about.dataText")}
          </p>
        </section>
      </article>
    </div>
  );
}
