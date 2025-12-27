import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { MermaidDiagram } from "@lightenna/react-mermaid-diagram";
import Background from "../components/Background";
import { useTheme } from "../context/ThemeContext.tsx";

export default function ProjectPage() {
  const { slug } = useParams();
  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

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

  // Prose classes for dark and light themes
  const darkProseClasses =
    "prose-invert prose-headings:text-white prose-p:text-white/80 prose-a:text-purple-400 prose-strong:text-white prose-code:bg-white/10 prose-code:text-purple-300 prose-pre:bg-white/5 prose-pre:border-white/10 prose-li:text-white/80 prose-li:marker:text-purple-400 prose-hr:border-white/10 prose-blockquote:border-purple-400 prose-blockquote:text-white/70";

  const lightProseClasses =
    "prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-purple-600 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:text-purple-600 prose-pre:bg-gray-50 prose-pre:border-gray-200 prose-li:text-gray-700 prose-li:marker:text-purple-600 prose-hr:border-gray-200 prose-blockquote:border-purple-600 prose-blockquote:text-gray-600";

  return (
    <Background>
      {/* Header */}
      <div
        className={`border-b p-6 w-[85%] mt-16 ${
          isDark ? "border-white/10" : "border-gray-200"
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className={`transition-colors duration-300 flex items-center gap-2 font-body ${
              isDark
                ? "text-white/70 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </Link>
          <a
            href={`https://github.com/NikitaaOvramenko/${slug}`}
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-2 border rounded-lg transition-all duration-300 font-body ${
              isDark
                ? "border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5"
                : "border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50"
            }`}
          >
            View on GitHub →
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pb-16 w-[88%]">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div
              className={`w-10 h-10 border-2 rounded-full animate-spin ${
                isDark
                  ? "border-white/20 border-t-white"
                  : "border-gray-200 border-t-gray-900"
              }`}
            ></div>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-20">
            <p
              className={`font-body text-lg mb-4 ${
                isDark ? "text-white/50" : "text-gray-500"
              }`}
            >
              {error}
            </p>
            <Link
              to="/"
              className={`inline-block px-6 py-2 border rounded-lg transition-all duration-300 font-body ${
                isDark
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
            >
              ← Go Back
            </Link>
          </div>
        )}

        {!loading && !error && readme && (
          <div
            className={`backdrop-blur-lg border rounded-xl p-6 md:p-8 ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-gray-50/50 border-gray-200"
            }`}
          >
            <article
              className={`prose prose-lg max-w-none font-body prose-headings:font-heading prose-headings:font-bold prose-p:leading-relaxed prose-a:no-underline hover:prose-a:underline prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:rounded-lg prose-img:rounded-lg ${
                isDark ? darkProseClasses : lightProseClasses
              }`}
            >
              <MarkdownWithMermaid content={readme} />
            </article>
          </div>
        )}

        {!loading && !error && !readme && (
          <div className="text-center py-20">
            <p
              className={`font-body text-lg ${
                isDark ? "text-white/50" : "text-gray-500"
              }`}
            >
              No README found for this project.
            </p>
          </div>
        )}
      </div>
    </Background>
  );
}
