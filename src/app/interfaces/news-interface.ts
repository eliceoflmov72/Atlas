export interface NewsInterface {
    id: bigint;
    title: string;
    content: string;
    publication_date: Date;
    category: string;
    image: string;
    author_id: bigint;
}
