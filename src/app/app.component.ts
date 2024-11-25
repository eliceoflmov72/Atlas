import { Component } from '@angular/core';
import { MenuComponent } from "./layout/menu/menu.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Zemios';

  pages = [
    {
      title: 'Inicio',
      icon: 'house-fill'
    },
    {
      title: 'Noticias',
      icon: 'newspaper',
      sub: [
        {
          title: 'Tecnología',
          icon: 'gear-fill'
        },
        {
          title: 'Empleo',
          icon: 'briefcase-fill'
        }
      ]
    },
    {
      title: 'Cursos',
      icon: 'book-half'
    },
    {
      title: 'Proyectos',
      icon: 'box-fill'
    },
    {
      title: 'Contacto',
      icon: 'info-circle-fill'
    },
  ]
}
