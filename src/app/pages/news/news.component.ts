import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsInterface } from '../../interfaces/news-interface';

@Component({
  selector: 'app-news',
  imports: [RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  selectedCategory = '';
  news: Array<NewsInterface> = [
    {
      id: 1,
      title: 'Nueva Tecnología en la Nube',
      content:
        'La última tendencia en servicios cloud que está revolucionando el mercado.',
      image: 'https://via.placeholder.com/400x200',
      category: 'actualidad',
      publicationDate: new Date()
    },
    {
      id: 2,
      title: 'Nueva Tecnología en la Nube',
      content:
        'La última tendencia en servicios cloud que está revolucionando el mercado.',
      image: 'https://via.placeholder.com/400x200',
      category: 'actualidad',
      publicationDate: new Date()
    },
    {
      id: 3,
      title: 'Nueva Tecnología en la Nube',
      content:
        'La última tendencia en servicios cloud que está revolucionando el mercado.',
      image: 'https://via.placeholder.com/400x200',
      category: 'empleo',
      publicationDate: new Date()
    },
  ];

  get filteredNews() {
    return this.selectedCategory
      ? this.news.filter((item) => item.category === this.selectedCategory)
      : this.news;
  }

  filterNews(category: string) {
    this.selectedCategory = category;
  }
}
