import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [AsyncPipe],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  readonly route = inject(ActivatedRoute);
  readonly moviesService = inject(MoviesService);

  readonly id$ = this.route.params.pipe(map((params) => Number(params['id'])));

  readonly movie$ = this.id$.pipe(
    map((id) => this.moviesService.movies().find((movie) => movie.id === id!)),
  );

  readonly poster$ = this.movie$.pipe(map((movie) => `movies/${movie?.posterImage}`));
}
