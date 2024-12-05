import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { TechComponent } from './pages/news/tech/tech.component';
import { JobsComponent } from './pages/news/jobs/jobs.component';
import { LearningComponent } from './pages/learning/learning.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { PostComponent } from './pages/explore/post/post.component';
import { ArticleComponent } from './pages/news/article/article.component';
import { CourseComponent } from './pages/learning/course/course.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { HelpComponent } from './pages/help/help.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', component: MaintenanceComponent },
    { path: 'News', component: NewsComponent },
        { path: 'Article', component: ArticleComponent },
    // { path: 'Tech-news', component: TechComponent },
    // { path: 'Job-news', component: JobsComponent },
    { path: 'Learning', component: LearningComponent },
        { path: 'Course', component: CourseComponent },
    { path: 'Projects', component: ProjectsComponent },
        { path: 'Project', component: ProjectComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'Explore', component: ExploreComponent },
        { path: 'Post', component: PostComponent },
    // { path: 'About-us', component: AboutusComponent },
    { path: 'Help', component: HelpComponent },

    { path: 'SignIn', component: SigninComponent },
    { path: 'SignUp', component: SignupComponent },
    { path: 'Profile', component: ProfileComponent },

    { path: 'Maintenance', component: MaintenanceComponent },
    // { path: '**', redirectTo: '', pathMatch: "full" as "full" },
    { path: '**', redirectTo: 'Maintenance', pathMatch: "full" as "full" },
];
