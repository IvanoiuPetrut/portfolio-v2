import type { MDXComponents } from "mdx/types";
import { Sparkle } from "@/components/ui/sparkle";

const components = {
  h2: ({ children }) => (
    <h2 className="font-display mt-16 mb-5 flex items-center gap-3 text-3xl font-bold md:text-4xl">
      <Sparkle className="size-5 text-accent-2" />
      {children}
    </h2>
  ),
  h3: ({ children }) => <h3 className="font-display mt-10 mb-3 text-2xl font-bold">{children}</h3>,
  p: ({ children }) => <p className="my-5 max-w-prose text-lg leading-prose">{children}</p>,
  a: ({ href = "", children }) => (
    <a
      href={href}
      {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
      className="font-medium text-accent-ink underline decoration-2 underline-offset-4"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  ul: ({ children }) => (
    <ul className="my-6 list-disc max-w-prose space-y-3 pl-6 text-lg leading-prose marker:text-accent-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-6 list-decimal max-w-prose space-y-3 pl-6 text-lg leading-prose marker:font-mono marker:text-accent-ink">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-12 rounded-3xl border-l-4 border-accent bg-surface px-8 py-6 [&_p:first-child]:font-display [&_p:first-child]:text-2xl [&_p:first-child]:leading-snug [&_p:last-child]:text-base [&_p:last-child]:text-ink-muted">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-md border-collapse text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-line bg-surface px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
      {children}
    </th>
  ),
  td: ({ children }) => <td className="border-b border-line px-5 py-3 last:font-medium">{children}</td>,
  hr: () => <hr className="my-12 border-line" />,
} satisfies MDXComponents;

export const useMDXComponents = (): MDXComponents => components;
