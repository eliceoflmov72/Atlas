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
      url: '',
      icon: 'house-fill'
    },
    {
      title: 'Noticias',
      url: 'news',
      icon: 'newspaper',
      sub: [
        {
          title: 'Tecnología',
          url: 'news/tech',
          icon: 'gear-fill'
        },
        {
          title: 'Empleo',
          url: 'news/jobs',
          icon: 'briefcase-fill'
        }
      ]
    },
    {
      title: 'Foro',
      url: 'explore',
      icon: 'chat-dots-fill',
    },
    /*     {
          title: 'Cursos',
          url: 'learning',
          icon: 'book-half'
        }, */
    {
      title: 'Proyectos',
      url: 'projects',
      icon: 'box-fill'
    },
    {
      title: 'Contacto',
      url: 'contact',
      icon: 'info-circle-fill'
    },
  ];
}
