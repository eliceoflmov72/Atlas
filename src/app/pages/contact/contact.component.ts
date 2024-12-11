import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  teamList = [
    {
      name: 'Ismael',
      title: 'CEO y Desarrollador',
      photo: 'images/pfp/ismaelPhoto.webp',
      url: 'https://www.linkedin.com/in/ismmargar/',
    },
    {
      name: 'Eliceo',
      title: 'Desarrollador y Diseñador',
      photo: 'images/pfp/eliceoPhoto.webp',
      url: 'https://www.linkedin.com/in/eliceo-león-237877280/',
    },
  ];
}
