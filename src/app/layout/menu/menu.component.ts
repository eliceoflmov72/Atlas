import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() pages: { title: string, url: string, icon: string }[] = []
  menuVisibility = false;
  toggleMenu() {
    this.menuVisibility = !this.menuVisibility;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (this.menuVisibility && !target.closest('app-menu')) {
      this.menuVisibility = false;
  }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.menuVisibility) {
      this.menuVisibility = false;
    }
  }

  @HostListener('window:touchmove', [])
  onTouchMove() {
    if (this.menuVisibility) {
      this.menuVisibility = false;
    }
  }
}

