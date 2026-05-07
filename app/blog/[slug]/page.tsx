// app/blog/[slug]/page.tsx

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import type { Post } from "@/types/post";

import { ArrowLeft } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const postQuery = `
  *[_type == "post" && slug.current == $slug][0]
`;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const post: Post = await client.fetch(postQuery, { slug });

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${post.title} | InnPro`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const post: Post = await client.fetch(postQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[55vh] overflow-hidden">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 container flex h-full items-end pb-12 text-white">
          <div className="max-w-3xl">
            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="pt-8 pb-16 md:pt-14 md:pb-20">
        <div className="container max-w-3xl">
          <p className="text-lg leading-8 text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-10 space-y-6">
            {post.body?.map((block) => (
              <p
                key={block._key}
                className="text-lg leading-8 text-muted-foreground"
              >
                {block.children?.map((child) => child.text).join("")}
              </p>
            ))}
          </div>

          {/* BACK */}
          <div className="mt-12 flex justify-start">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border bg-gray-50 p-8">
            <h2 className="text-2xl font-bold">Looking for product ideas?</h2>

            <p className="mt-3 text-muted-foreground">
              Explore our concept development and retail-ready protein
              innovations.
            </p>

            <Link
              href="/applications/concepts"
              className="inline-block mt-6 rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90"
            >
              Explore Concepts →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
