interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "danger" | "warning" | "neutral";
  className?: string;
}

const variantStyles = {
  success: "bg-[#ECFDF5] text-[var(--accent-success)]",
  danger: "bg-[#FEF2F2] text-[var(--accent-danger)]",
  warning: "bg-[#FFFBEB] text-[var(--accent-warning)]",
  neutral: "bg-[var(--bg-secondary)] text-[var(--text-secondary)]",
};

export default function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
