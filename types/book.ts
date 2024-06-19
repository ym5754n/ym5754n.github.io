export type Book = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    date: string,
    comment: string,
    book: {
        volumeInfo: {
            title: string,
            imageLinks: {
                smallThumbnail: string,
            },
            authors: string[],
        },
    }
}