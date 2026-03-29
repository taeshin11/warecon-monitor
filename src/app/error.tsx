"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-16 text-center">
      <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-8 shadow-[var(--shadow-card)] max-w-md mx-auto">
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-heading">
          Something went wrong
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          {error.message || "An unexpected error occurred while loading the dashboard."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2.5 bg-[var(--accent-primary)] text-white rounded-[var(--radius-sm)] text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
