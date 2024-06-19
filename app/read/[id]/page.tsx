import { client } from "@/lib/client";
import { Book } from "@/types/book";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function generateStaticParams() {
  const books = await client.get({ endpoint: "book" });
 
  return books.contents.map((book: Book) => ({
    id: book.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const book: Book = await getData(params.id);
  const comment = book.comment;

  return (
    <main>
      <Card>
        <CardHeader>
          <CardDescription>{`読了日：${new Date(book.date).toLocaleDateString()}`}</CardDescription>
          <CardTitle>{book.book.volumeInfo.title}</CardTitle>                  
        </CardHeader>
      </Card>
      <div className="p-6 grid grid-flow-row gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src={book.book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.book.volumeInfo.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "200px" }}
          />
        </div>
        <div>
          <p className="pb-2">書籍情報</p>
          <dl className="flex flex-wrap w-full">
            <dt className="w-2/5">タイトル：</dt>
            <dd className="w-3/5">{book.book.volumeInfo.title}</dd>
            <dt className="w-2/5">著者：</dt>
            <dd className="w-3/5">
              {book.book.volumeInfo.authors.map((author) => (
                `${author} `
              ))}
            </dd>
            <dt className="w-2/5">発行年月日：</dt>
            <dd className="w-3/5">{book.book.volumeInfo.publishedDate}</dd>
          </dl>
        </div>
        <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
            {/* TODO: markdownで入稿して表示できるようにする */}
            <p>{book.comment}</p>
        </div>
      </div>
    </main>
  );

}

async function getData(id: string) {
  const data = await client.get({ endpoint: "book", contentId: id });

  return data;
}