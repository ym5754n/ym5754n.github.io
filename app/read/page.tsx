import { client } from "@/lib/client";
import { Book } from "@/types/book";
import BookCard from "@/components/book-card";

export default async function Read() {
  const books: Book[] = await getData();

  return (
    <div>
      <ul className="grid grid-flow-row gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book, key) => (
          <BookCard book={book} key={key} />
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