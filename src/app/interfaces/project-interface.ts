export interface ProjectInterface {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    image?: string;
    technologies?: string[];
    githubLink?: string;
    websiteLink?: string;
    subtitle?: string;
}
