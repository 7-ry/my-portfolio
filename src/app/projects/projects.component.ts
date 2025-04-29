import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Counter App',
      description: 'A simple app to increment and reset a counter.',
      image: 'assets/counter.jpg',
      link: 'https://github.com/your-github-counter'
    },
    {
      title: 'Todo App',
      description: 'A basic todo list application to manage tasks.',
      image: 'assets/todo.jpg',
      link: 'https://github.com/your-github-todo'
    },
    {
      title: 'Order Tracker',
      description: 'Track and manage simple product orders efficiently.',
      image: 'assets/order.jpg',
      link: 'https://github.com/your-github-order'
    }
  ];
}
