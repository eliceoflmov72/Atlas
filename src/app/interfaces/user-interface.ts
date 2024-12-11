export interface UserInterface {
    id: number;
    name: string;
    email: string;
    password: string;
    aboutMe?: string;
    role: 'user' | 'author' | 'admin';
    registrationDate: Date;
}
