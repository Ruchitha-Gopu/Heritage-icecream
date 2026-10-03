interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "cocoa" | "cream";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  tone = "cocoa",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "cream" ? "text-cream" : "text-cocoa";
  const subtitleColor = tone === "cream" ? "text-cream/80" : "text-cocoa/70";

  return (
    <div className={`max-w-2xl ${alignClass} mb-10 md:mb-14`}>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
