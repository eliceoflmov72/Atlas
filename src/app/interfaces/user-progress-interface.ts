export interface UserProgressInterface {
    id: bigint;
    user_id: bigint;
    course_id: bigint;
    module_id: bigint;
    lesson_id: bigint;
    completed: boolean;
    completed_at: Date;
}
