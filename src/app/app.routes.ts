import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Inicio',
  },
  {
    path: 'Projects',
    component: ProjectsComponent,
    title: 'Proyectos',
  },
  {
    path: 'Contact',
    component: ContactComponent,
    title: 'Contacto',
  },
];
