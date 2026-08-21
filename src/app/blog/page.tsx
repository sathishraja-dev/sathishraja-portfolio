import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../../data/blogPosts";

export const metadata: Metadata = {
  title: "Blog — Sathish Raja | Full-Stack & AI Engineering Insights",
  description:
    "Practical writing on web development costs, startup tech stacks, AI applications for small businesses, and more from Sathish Raja.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-[#F3F4F6] font-sans antialiased">
      <header className="sticky top-0 z-50 w-full bg-[#0B0F19]/70 backdrop-blur-xl border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#06B6D4] animate-pulse"></div>
            <span className="text-lg font-bold tracking-tight text-white font-mono">
              sathish<span className="text-[#6366F1]">raja</span>.com
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs font-mono bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Blog
          </h1>
          <p className="text-sm text-gray-400 max-w-xl">
            Practical notes on web development, startups, and AI — written from
            actual project experience, not theory.
          </p>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#0B0F19] border border-gray-900 rounded-2xl p-5 sm:p-6 hover:border-[#6366F1]/40 transition-colors"
            >
              <div className="flex items-center gap-3 text-[11px] text-gray-500 font-mono mb-2">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-1.5">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
