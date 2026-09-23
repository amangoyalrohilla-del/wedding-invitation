export default function Monogram({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "ivory";
}) {
  const stroke = tone === "gold" ? "#C6A15B" : "#F7F1E8";
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="A and P monogram"
    >
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.55"
      />
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="40"
        fill={stroke}
      >
        A&amp;P
      </text>
    </svg>
  );
}
