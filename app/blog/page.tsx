export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import { Post } from "@/types/post";

export const metadata = {
  title: "Blog | InnPro",
  description:
    "Explore insights and trends in plant-based protein innovation, functional beverages, and retail-ready food concepts.",
};

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  return (
    <main className="py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="h-full"
            >
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition h-full flex flex-col">
                {/* IMAGE */}
                <div className="relative h-60 flex-shrink-0">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  {/* DATE */}
                  {/* DATE */}
                  <p className="text-sm text-muted-foreground">
                    {post._createdAt
                      ? new Date(post._createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : ""}
                  </p>

                  {/* TITLE - luôn cùng chiều cao */}
                  <h2 className="text-xl font-semibold mt-2 min-h-[64px]">
                    {post.title}
                  </h2>

                  {/* EXCERPT - luôn cùng chiều cao */}
                  <p className="mt-2 text-muted-foreground min-h-[72px]">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto rounded-2xl bg-gray-50 p-10">
            <h2 className="text-3xl font-bold">Looking for product ideas?</h2>

            <p className="mt-4 text-muted-foreground">
              Explore our retail-ready product concepts and innovation ideas.
            </p>

            <Link
              href="/applications/concepts"
              className="inline-block mt-6 rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90"
            >
              Explore Concepts →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
