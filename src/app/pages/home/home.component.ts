import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  joinUsList = [
    {
      title: 'Únete a la Comunidad',
      description: 'Regístrate en nuestra plataforma y crea tu perfil.',
      icon: 'group.svg',
    },
    {
      title: 'Conecta con Otros Juniors',
      description: 'Comparte tus experiencias y aprende de otros programadores como tú.',
      icon: 'chat-bubble-dots.svg',
    },
    {
      title: 'Colabora en Proyectos',
      description: 'Elige proyectos en los que puedas aportar y que se adapten a tu nivel.',
      icon: 'git-merge.svg',
    },
    {
      title: 'Sigue Aprendiendo',
      description: 'Accede a recursos y cursos para seguir desarrollando tus habilidades.',
      icon: 'chess-pawn.svg',
    },
    {
      title: 'Abre Nuevas Oportunidades',
      description: 'Haz networking y consigue referencias que te ayuden en tu carrera.',
      icon: 'key.svg',
    }
  ];

  mainNews = [
    {
      title: 'Angular 19 ya esta aquí',
      description: 'Descubre sus nuevas caracteristicas ya mismo.',
      imageURL: 'https://miro.medium.com/v2/resize:fit:1400/1*IKZuN_kzUYPl37lBXQkymQ.png',
      URL: 'https://blog.angular.dev/meet-angular-v19-7b29dfd05b84',
    },
    {
      title: 'Angular 19 ya esta aquí',
      description: 'Descubre sus nuevas caracteristicas ya mismo.',
      imageURL: 'https://miro.medium.com/v2/resize:fit:1400/1*IKZuN_kzUYPl37lBXQkymQ.png',
      URL: 'https://blog.angular.dev/meet-angular-v19-7b29dfd05b84',
    },
    {
      title: 'Angular 19 ya esta aquí',
      description: 'Descubre sus nuevas caracteristicas ya mismo.',
      imageURL: 'https://miro.medium.com/v2/resize:fit:1400/1*IKZuN_kzUYPl37lBXQkymQ.png',
      URL: 'https://blog.angular.dev/meet-angular-v19-7b29dfd05b84',
    },
  ]
}
