import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './services/movies.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly moviesService = inject(MoviesService);
}
