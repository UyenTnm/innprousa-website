// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data/blogData";

export default function BlogPage() {
  return (
    <main className="py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="relative h-60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
