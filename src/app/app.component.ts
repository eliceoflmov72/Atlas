import { Component } from '@angular/core';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Zemios';

  pages = [
    {
      title: 'Inicio',
      url: '/',
      icon: 'house-fill',
    },
    {
      title: 'Noticias',
      url: 'News',
      icon: 'newspaper',
      sub: [
        {
          title: 'Tecnología',
          url: 'News/Tech',
          icon: 'gear-fill',
        },
        {
          title: 'Empleo',
          url: 'News/Jobs',
          icon: 'briefcase-fill',
        },
      ],
    },
    {
      title: 'Foro',
      url: 'Explore',
      icon: 'chat-dots-fill',
    },
    {
      title: 'Cursos',
      url: 'Learning',
      icon: 'book-half',
    },
    {
      title: 'Proyectos',
      url: 'Projects',
      icon: 'box-fill',
    },
    {
      title: 'Contacto',
      url: 'Contact',
      icon: 'info-circle-fill',
    },
  ];
}
