import { Book } from "@/types/book";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type Props = {
  book: Book
  key: number
};

export default function BookCard(props: Props) {
  const book = props.book;
  return (
    <li key={props.key} className="min-w-0">
      <Card className="min-h-full">
        <CardHeader>
          <CardDescription>読了日：{new Date(book.date).toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <Image
            src={book.book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.book.volumeInfo.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "200px" }}
            />
          </div>
          <div className="pt-6 line-clamp-1">{book.book.volumeInfo.title}</div>
        </CardContent>
        <CardFooter>
          <CardDescription className="line-clamp-1">
            {book.book.volumeInfo.authors.map((author) => (
              `${author} `
            ))}
          </CardDescription>
        </CardFooter>
      </Card>
    </li>
  );
}