import { provideRouter, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import bootstrap from '../main.server';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
];
