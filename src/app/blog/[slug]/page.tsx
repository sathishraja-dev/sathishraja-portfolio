import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Sathish Raja`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F3F4F6] font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Sathish Raja",
            },
          }),
        }}
      />
      <header className="sticky top-0 z-50 w-full bg-[#0B0F19]/70 backdrop-blur-xl border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#06B6D4] animate-pulse"></div>
            <span className="text-lg font-bold tracking-tight text-white font-mono">
              sathish<span className="text-[#6366F1]">raja</span>.com
            </span>
          </Link>
          <Link
            href="/blog"
            className="text-xs font-mono bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            ← Back to Blog
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <article className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[11px] text-gray-500 font-mono">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="text-sm text-gray-400">{post.description}</p>
          </div>
          <div className="space-y-4 pt-4 border-t border-gray-900">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-sm text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
