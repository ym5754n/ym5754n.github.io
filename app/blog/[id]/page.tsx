import { client } from "@/lib/client";
import { Blog } from "@/types/blog";
import markdownHtml from "zenn-markdown-html";
import 'zenn-content-css';

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
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      <div
        className="znc"
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