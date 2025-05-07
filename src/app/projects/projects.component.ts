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
      image: 'assets/counter-app.png',
      link: 'https://github.com/7-ry/counter-app'
    },
    {
      title: 'Todo App',
      description: 'A basic todo list application to manage tasks.',
      image: 'assets/todo.png',
      link: 'https://github.com/7-ry/todo-app'
    },
    {
      title: 'Order Tracker',
      description: 'Track and manage simple product orders efficiently.',
      image: 'assets/order-tracker.png',
      link: 'https://github.com/7-ry/order-tracker'
    },
    {
      title: 'Attack on Titan QUIZ',
      description: 'Attack on Titan QUIZ built with JS.',
      image: 'assets/AOTQuiz.png',
      link: 'https://github.com/7-ry/AOTquiz'
    },
    {
      title: 'E-Commerce Demo Site',
      description: 'Shopping website built with Angular, Node.js, and MongoDB. Includes authentication and dynamic product listings.',
      image: 'assets/EcommerceApp.png',
      link: 'https://new-app-test-cb8f204d9370.herokuapp.com/products'
    }
  ];
}
