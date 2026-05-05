// app/blog/[slug]/page.tsx
import { blogPosts } from "@/lib/data/blogData";
import Image from "next/image";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return <div>Not found</div>;

  return (
    <main className="py-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-muted-foreground mt-2">{post.date}</p>

        <div className="relative h-80 my-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <p className="leading-relaxed whitespace-pre-line">{post.content}</p>
      </div>
    </main>
  );
}
