import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface NewsItem {
  title: string;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-news',
  imports: [RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  selectedCategory = '';
  news: NewsItem[] = [
    {
      title: 'Nueva Tecnología en la Nube',
      description: 'La última tendencia en servicios cloud que está revolucionando el mercado.',
      image: 'https://via.placeholder.com/400x200',
      category: 'actualidad'
    },
    {
      title: 'Inteligencia Artificial Avanza',
      description: 'Cómo los desarrollos en IA están impactando diferentes industrias.',
      image: 'https://via.placeholder.com/400x200',
      category: 'actualidad'
    },
    {
      title: 'Ofertas de Empleo para Juniors',
      description: 'Las empresas tecnológicas buscan talento junior para puestos remotos.',
      image: 'https://via.placeholder.com/400x200',
      category: 'empleo'
    }
  ];

  get filteredNews() {
    return this.selectedCategory 
      ? this.news.filter(item => item.category === this.selectedCategory)
      : this.news;
  }

  filterNews(category: string) {
    this.selectedCategory = category;
  }
}
