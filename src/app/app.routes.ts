import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { TechComponent } from './pages/news/tech/tech.component';
import { JobsComponent } from './pages/news/jobs/jobs.component';
import { LearningComponent } from './pages/learning/learning.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'News', component: NewsComponent },
    // { path: 'Tech-news', component: TechComponent },
    // { path: 'Job-news', component: JobsComponent },
    // { path: 'Learning', component: LearningComponent },
    // { path: 'Projects', component: ProjectsComponent },
    // { path: 'Contact', component: ContactComponent },

    // { path: '**', redirectTo: '', pathMatch: "full" }
    { path: 'Maintenance', component: MaintenanceComponent },


    // { path: 'About-us', component: AboutusComponent },

    // { path: 'SignIn', component: SigninComponent },
    // { path: 'SignUp', component: SignupComponent },

    { path: '**', redirectTo: 'Maintenance', pathMatch: "full" },
];
