import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { NewsInterface } from '../../interfaces/news-interface';
import { CoursesService } from '../../services/courses.service';
import { CoursesInterface } from '../../interfaces/courses-interface';
import { ProjectsService } from '../../services/projects.service';
import { ProjectInterface } from '../../interfaces/project-interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  joinUsList = [
    {
      title: 'Únete a la Comunidad',
      description: 'Regístrate en nuestra plataforma y crea tu perfil.',
      icon: 'group.svg',
      url: '/sign-up',
    },
    {
      title: 'Conecta con Otros Juniors',
      description: 'Comparte tus experiencias y aprende de otros programadores como tú.',
      icon: 'chat-bubble-dots.svg',
      url: '/explore',
    },
    {
      title: 'Colabora en Proyectos',
      description: 'Elige proyectos en los que puedas aportar y que se adapten a tu nivel.',
      icon: 'git-merge.svg',
      url: '/projects',
    },
    {
      title: 'Sigue Aprendiendo',
      description: 'Accede a recursos y cursos para seguir desarrollando tus habilidades.',
      icon: 'chess-pawn.svg',
      url: '/learning',
    },
    {
      title: 'Abre Nuevas Oportunidades',
      description: 'Haz networking y consigue referencias que te ayuden en tu carrera.',
      icon: 'key.svg',
      url: '/explore',
    },
  ];

  private readonly newsSvc = inject(NewsService);
  private readonly coursesSvc = inject(CoursesService);
  private readonly projectsSvc = inject(ProjectsService);
  mainNews: Array<NewsInterface> = this.newsSvc.show();
  lastCourses: Array<CoursesInterface> = this.coursesSvc.show();
  lastProjects: Array<ProjectInterface> = this.projectsSvc.show();
}
