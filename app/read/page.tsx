import { client } from "@/lib/client";
import { Book } from "@/types/book";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Read() {
  const books: Book[] = await getData();

  return (
    <div>
      <ul className="grid grid-flow-row gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book, key) => (
          <li key={key} className="min-w-0">
            <Card className="min-h-full">
              <CardHeader>
                <CardDescription>読了日：{new Date(book.date).toLocaleDateString()}</CardDescription>
                <CardTitle>{book.book.volumeInfo.title}</CardTitle>
              </CardHeader>
              <CardContent>
              <div style={{ display: "flex", justifyContent: "center"}}>
                <Image
                  src={book.book.volumeInfo.imageLinks.smallThumbnail}
                  alt={book.book.volumeInfo.title}
                  width={150}
                  height={100}
                />
              </div>
              </CardContent>
              <CardFooter>
                <p>{book.comment}</p>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

async function getData() {
  const data = await client.get({
    endpoint: "book",
    queries: { orders: '-date' },
  });

  if (!data.contents) {
    throw new Error('Failed to fetch data');
  }

  return data.contents;
}