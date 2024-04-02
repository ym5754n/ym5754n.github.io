import Link from "next/link";
import { client } from "@/lib/client";
import { Blog } from "@/types/blog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlogCard from "@/components/blog-card";

export default async function Blog() {
  const posts: Blog[] = await getData();

  return (
    <div>
      <ul className="grid grid-flow-row gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <BlogCard post={post}/>
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