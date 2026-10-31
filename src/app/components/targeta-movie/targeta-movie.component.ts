import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { EtiquetaMovieComponent } from '../etiqueta-movie/etiqueta-movie.component';

@Component({
  imports: [DatePipe, EtiquetaMovieComponent],
  selector: 'app-targeta-movie',
  styleUrl: './targeta-movie.component.scss',
  templateUrl: './targeta-movie.component.html',
})

export class TargetaMovieComponent {
  @Input({ required: true }) movie!: Movie;
  @Input() seleccionada = false;
  @Output() selecciona = new EventEmitter<Movie>();

  avisaSeleccio(): void {
    this.selecciona.emit(this.movie);
  }
}