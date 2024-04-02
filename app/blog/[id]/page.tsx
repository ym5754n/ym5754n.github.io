import { client } from "@/lib/client";
import { Blog } from "@/types/blog";
import markdownHtml from "zenn-markdown-html";
import 'zenn-content-css';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function generateStaticParams() {
  const posts = await client.get({ endpoint: "blog" });
 
  return posts.contents.map((post: Blog) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const post: Blog = await getData(params.id);

  let html = markdownHtml(post.content);

  return (
    <main>
      <Card>
        <CardHeader>
          <CardDescription>{ new Date(post.publishedAt).toLocaleDateString() }</CardDescription>
          <CardTitle>{post.title}</CardTitle>                  
        </CardHeader>
      </Card>
      <div
        className="znc p-6"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </main>
  );

}

async function getData(id: string) {
  const data = await client.get({ endpoint: "blog", contentId: id });

  return data;
}