export interface ProjectInterface {
  id: bigint;
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  image: string;
  technologies: string[];
  github_link: string;
  website_link: string;
  subtitle: string;
}
