export interface UserProgressInterface {
    id: number;
    user_id: number;
    course_id: number;
    module_id: number;
    lesson_id: number;
    completed: boolean;
    completed_at: Date;
}
