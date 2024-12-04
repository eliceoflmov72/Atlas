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

  lastCourses = [
    {
      title: 'Curso de Angular',
      description: 'Aprende a crear aplicaciones web con Angular',
      color: 'text-red-500'
    },
    {
      title: 'Curso de React',
      description: 'Aprende a crear aplicaciones web con React',
      color: 'text-blue-500'
    },
    {
      title: 'Curso de Vue.js',
      description: 'Aprende a crear aplicaciones web con Vue.js',
      color: 'text-green-500'
    }
  ]

  lastProyects = [
    {
      title: 'Proyecto 1',
      description: 'Este es un proyecto de ejemplo',
      image: 'https://picsum.photos/200/300',
      URL: 'https://www.google.com',
      collaborators: [
        {
          name: 'Juan',
          image: 'https://picsum.photos/500/300',
          url: 'profileURL'
        },
        {
          name: 'Pedro',
          image: 'https://picsum.photos/800/300',
          url: 'profileURL'
        }
      ]
    }
  ]
}
