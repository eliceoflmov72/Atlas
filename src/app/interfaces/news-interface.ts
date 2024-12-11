export interface NewsInterface {
    id: number;
    title: string;
    content: string;
    publicationDate: Date;
    category?: string;
    image?: string;
    authorId?: number;
}
