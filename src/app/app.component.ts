import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  title = 'my-portfolio';
}
