import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contacts = [
    {
      title: 'GitHub',
      link: 'https://github.com/7-ry',
      class: 'fab fa-github',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ryushin-oga-b61746344/',
      class: 'fab fa-linkedin',
    },
    {
      title: 'Email',
      link: 'ryushin0714@gmail.com',
      class: 'fas fa-envelope',
    }
  ]
}
