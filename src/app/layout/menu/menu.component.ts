import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() pages: { title: string; url: string; icon: string }[] = [];
  menuVisibility = false;
  isDropdownOpen = false;

  constructor(
    public router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }

  toggleMenu() {
    this.menuVisibility = !this.menuVisibility;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
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
