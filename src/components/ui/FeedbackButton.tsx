"use client";

import { useState } from "react";

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {isOpen && (
        <div className="mb-2 bg-[var(--bg-card)] border border-[var(--border-light)] rounded-[var(--radius-md)] shadow-lg p-4 w-72 animate-fadeIn">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">
              Send Feedback
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-lg leading-none"
              aria-label="Close feedback"
            >
              &times;
            </button>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">
            Have a suggestion or found an issue? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:taeshinkim11@gmail.com?subject=WarEcon Monitor Feedback"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] text-white text-xs font-medium rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity w-full justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Email Us
          </a>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-[var(--accent-primary)] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        aria-label="Send feedback"
        title="Send feedback"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
  );
}
