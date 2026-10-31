import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { TargetaMovieComponent } from '../targeta-movie/targeta-movie.component';

@Component({
  imports: [TargetaMovieComponent],
  selector: 'app-llista-movie',
  styleUrl: './llista-movie.component.scss',
  templateUrl: './llista-movie.component.html',
})
export class LlistaMovieComponent {
  @Input({ required: true }) movies: Movie[] = [];
  @Input() movieSeleccionatId?: number;
  @Output() selecciona = new EventEmitter<Movie>();

  propagaSeleccio(movie: Movie): void {
    this.selecciona.emit(movie);
  }
}