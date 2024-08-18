import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-search',
        items: [
          {
            label: 'La Fábrica Martos',
            icon: 'pi pi-building',
          },
        ],
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
