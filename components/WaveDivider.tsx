interface WaveDividerProps {
  /** Colour the wave shape is filled with (should match the section above/below it) */
  fill: string;
  flip?: boolean;
}

/**
 * A soft, drippy wave used between sections instead of a hard straight edge —
 * a nod to a melting scoop rather than the usual generic diagonal cut.
 */
export default function WaveDivider({ fill, flip = false }: WaveDividerProps) {
  return (
    <div className={`wave-divider ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0,40 C120,80 240,0 360,20 C480,40 600,80 720,60 C840,40 960,0 1080,10 C1200,20 1320,60 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
