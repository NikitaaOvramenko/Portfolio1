import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { MermaidDiagram } from "@lightenna/react-mermaid-diagram";
import Background from "../components/Background";

export default function ProjectPage() {
  const { slug } = useParams();
  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    async function fetchReadme() {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(
          `https://api.github.com/repos/NikitaaOvramenko/${slug}/readme`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        );

        const binary = window.atob(res.data.content);
        const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        const decoded = new TextDecoder("utf-8").decode(bytes);
        setReadme(decoded);
      } catch (err) {
        setError("Failed to load README");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchReadme();
  }, [slug]);

  function CodeBlock({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) {
    if (className === "language-mermaid") {
      return (
        <MermaidDiagram>{String(children).replace(/\n$/, "")}</MermaidDiagram>
      );
    }
    return <code className={className}>{children}</code>;
  }

  function ImageRenderer({ src, alt }: { src?: string; alt?: string }) {
    const resolvedSrc =
      src && !src.startsWith("http")
        ? `https://raw.githubusercontent.com/NikitaaOvramenko/${slug}/main/${src}`
        : src;

    return <img src={resolvedSrc} alt={alt || ""} className="rounded-lg" />;
  }

  function MarkdownWithMermaid({ content }: { content: string }) {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: CodeBlock as never,
          img: ImageRenderer as never,
        }}
      >
        {content}
      </ReactMarkdown>
    );
  }

  return (
    <Background>
      {/* Header */}
      <div className="border-b border-white/10 p-6 w-[85%] mt-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 font-body"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </Link>
          <a
            href={`https://github.com/NikitaaOvramenko/${slug}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-white/20 rounded-lg text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-body"
          >
            View on GitHub →
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 pb-16 w-full">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-20">
            <p className="text-white/50 font-body text-lg mb-4">{error}</p>
            <Link
              to="/"
              className="inline-block px-6 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-300 font-body"
            >
              ← Go Back
            </Link>
          </div>
        )}

        {!loading && !error && readme && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <article className="prose prose-invert prose-lg max-w-none font-body prose-headings:font-heading prose-headings:text-white prose-headings:font-bold prose-p:text-white/80 prose-p:leading-relaxed prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:bg-white/10 prose-code:text-purple-300 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-li:text-white/80 prose-li:marker:text-purple-400 prose-hr:border-white/10 prose-blockquote:border-purple-400 prose-blockquote:text-white/70 prose-img:rounded-lg">
              <MarkdownWithMermaid content={readme} />
            </article>
          </div>
        )}

        {!loading && !error && !readme && (
          <div className="text-center py-20">
            <p className="text-white/50 font-body text-lg">
              No README found for this project.
            </p>
          </div>
        )}
      </div>
    </Background>
  );
}
