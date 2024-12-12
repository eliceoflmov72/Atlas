export interface CommentInterface {
    id: bigint;
    post_id: bigint;
    user_id: bigint;
    content: string;
    creation_date: Date;
}
