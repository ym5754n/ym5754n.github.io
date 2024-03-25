import Link from "next/link";
import { client } from "@/lib/client";
import { Blog } from "@/types/blog";

export default async function Blog() {
  const posts: Blog[] = await getData();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

async function getData() {
  const data = await client.get({ endpoint: "blog" });
 
  if (!data.contents) {
    throw new Error('Failed to fetch data')
  }
 
  return data.contents;
}