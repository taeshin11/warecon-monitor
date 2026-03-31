"use client";

import { useT } from "@/lib/i18n";

export default function HowToUseContent() {
  const t = useT();

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-3 font-heading">
        {t("howToUse.title")}
      </h1>
      <p className="text-[var(--text-secondary)] mb-8">{t("howToUse.subtitle")}</p>

      <div className="space-y-6 mb-12">
        {[
          { title: "howToUse.step1Title", text: "howToUse.step1Text" },
          { title: "howToUse.step2Title", text: "howToUse.step2Text" },
          { title: "howToUse.step3Title", text: "howToUse.step3Text" },
        ].map((step, i) => (
          <div key={i} className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">{i + 1}</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-heading">
                  {t(step.title)}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(step.text)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
