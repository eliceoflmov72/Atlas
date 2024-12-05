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

const Maintenance = false;

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', component: MaintenanceComponent },
    { path: 'News', component: NewsComponent },
    // { path: 'Tech-news', component: TechComponent },
    // { path: 'Job-news', component: JobsComponent },
    { path: 'Learning', component: LearningComponent },
    { path: 'Projects', component: ProjectsComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'Explore', component: ExploreComponent },
    // { path: 'About-us', component: AboutusComponent },

    { path: 'SignIn', component: SigninComponent },
    { path: 'SignUp', component: SignupComponent },
    { path: 'Profile', component: ProfileComponent },

    { path: 'Maintenance', component: MaintenanceComponent },
    // { path: '**', redirectTo: '', pathMatch: "full" as "full" },
    { path: '**', redirectTo: 'Maintenance', pathMatch: "full" as "full" },
];
