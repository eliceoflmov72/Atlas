import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsInterface } from '../../../interfaces/news-interface';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  route = inject(ActivatedRoute);
  id: string | null = this.route.snapshot.paramMap.get('id');
  article: NewsInterface | undefined = inject(NewsService).get(Number(this.id));
}
