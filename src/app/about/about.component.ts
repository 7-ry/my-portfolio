import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  introParagraphs = [
    "Hello! I'm Ryushin Oga, a passionate Front-End Developer based in Vancouver.",
    "I enjoy creating modern and responsive web applications using Angular, TypeScript, and SCSS.",
    "Currently, I'm focused on improving my skills and building real-world projects to expand my portfolio."
  ];

  skills = [
    "Angular", "TypeScript", "SCSS", "HTML5", "CSS3", "JavaScript", "Responsive Design"
  ];
}
