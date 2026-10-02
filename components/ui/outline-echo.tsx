type OutlineEchoProps = { text: string; count?: number; className?: string };

const echoOpacity = ["opacity-90", "opacity-50", "opacity-25"] as const;

/** Decorative outlined repeats of a headline; the real text lives in the heading above. */
export const OutlineEcho = ({ text, count = 2, className = "" }: OutlineEchoProps) => (
  <div aria-hidden className={`select-none ${className}`}>
    {echoOpacity.slice(0, count).map((opacity) => (
      <p key={opacity} className={`text-outline ${opacity}`}>
        {text}
      </p>
    ))}
  </div>
);
