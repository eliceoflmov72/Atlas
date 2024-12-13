import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(public router: Router) { }
  @Input() pages: { title: string; url: string; icon: string }[] = [];
  menuVisibility = false;
  toggleMenu() {
    this.menuVisibility = !this.menuVisibility;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const isMenu = target.closest('app-menu');
    const isMenuItem = target.closest('li');
    if (this.menuVisibility && (!isMenu || isMenuItem)) {
      this.menuVisibility = false;
    }
  }

  @HostListener('window:scroll', [])
  @HostListener('window:touchmove', [])
  closeMenu() {
    if (this.menuVisibility) {
      this.menuVisibility = false;
    }
  }
}