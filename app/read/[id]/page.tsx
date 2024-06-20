import { client } from "@/lib/client";
import { Book } from "@/types/book";
import Image from "next/image";
import markdownHtml from "zenn-markdown-html";
import 'zenn-content-css';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  const books = await client.get({ endpoint: "book" });
 
  return books.contents.map((book: Book) => ({
    id: book.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const book: Book = await getData(params.id);

  let comment = markdownHtml(book.comment);

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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>項目</TableHead>
              <TableHead>内容</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell>{book.book.volumeInfo.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>著者</TableCell>
              <TableCell>
                {book.book.volumeInfo.authors.map((author) => (
                  `${author} `
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>発行年月日</TableCell>
              <TableCell>{book.book.volumeInfo.publishedDate}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
          <Separator className="mt-6 mb-6" />
          <div
            className="znc"
            dangerouslySetInnerHTML={{
              __html: comment,
            }}
          />
        </div>
      </div>
    </main>
  );

}

async function getData(id: string) {
  const data = await client.get({ endpoint: "book", contentId: id });

  return data;
}