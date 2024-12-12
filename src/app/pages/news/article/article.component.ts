import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  // route = inject(ActivatedRoute)
  // id: string | null = this.route.snapshot.paramMap.get('id')
  // article: NewsInterface | undefined = inject(NewsService).get(Number(this.id))
}
