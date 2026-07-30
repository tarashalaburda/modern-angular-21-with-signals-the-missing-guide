import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  // readonly route = inject(ActivatedRoute);
  readonly moviesService = inject(MoviesService);

  readonly id = input.required({ transform: numberAttribute });

  // readonly id$ = this.route.params.pipe(map((params) => Number(params['id'])));

  // readonly movie$ = this.id$.pipe(
  //   map((id) => this.moviesService.movies().find((movie) => movie.id === id!)),
  // );

  readonly movie = computed(() =>
    this.moviesService.movies().find((mv) => mv.id === this.id()));

  // readonly poster$ = this.movie$.pipe(map((movie) => `movies/${movie?.posterImage}`));

  readonly poster = computed(
    () => `movies/${this.movie()?.posterImage ?? ''}`);
}
