import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  // RouterOutlet
  imports: [CommonModule ,RouterOutlet,NavbarComponent, HomeComponent,
     ServicesComponent, ProjectsComponent, AboutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
