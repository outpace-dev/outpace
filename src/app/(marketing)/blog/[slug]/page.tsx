import { notFound } from "next/navigation";
import { BLOG_POSTS, BLOG_CATEGORIES, getRelatedPosts } from "@/lib/blog-configs";
import BlogPostContent from "./BlogPostContent";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

/* ───── Static generation ───── */
export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

/* ───── SEO metadata ───── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
  };
}

/* ───── Page ───── */
export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  const category = BLOG_CATEGORIES[post.category];
  const related = getRelatedPosts(post);

  /* ── Article structured data for rich results ── */
  const canonicalUrl = `https://outpace-murex.vercel.app/blog/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    url: canonicalUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: "https://outpace-murex.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Outpace",
      url: "https://outpace-murex.vercel.app",
    },
    articleSection: category.label,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostContent post={post} category={category} relatedPosts={related} />
    </>
  );
}
