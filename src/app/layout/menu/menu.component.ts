import { Component, Injectable, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() pages: Array<{ title: string, url: string, icon: string }> = new Array
  log(msg: any) {
    console.log(msg);
  }

}
