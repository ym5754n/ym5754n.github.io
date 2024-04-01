import Link from "next/link";
import { Blog } from "@/types/blog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogCard(post: Blog) {
  return (
    <li key={post.id}>
      <Link href={`/blog/${post.id}`}>
        <Card>
          <CardHeader>
            <CardDescription>{ new Date(post.publishedAt).toLocaleDateString() }</CardDescription>
            <CardTitle>{post.title}</CardTitle>                  
          </CardHeader>
          <CardContent>
            <p className="truncate">{post.content}</p>
          </CardContent>
          <CardFooter>
            <p>Read more</p>
          </CardFooter>
        </Card>
      </Link>
    </li>
  );
}