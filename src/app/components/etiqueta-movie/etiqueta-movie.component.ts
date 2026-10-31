import { Component, Input } from '@angular/core';
import { Genere } from '../../models/movie.model';


@Component({
  imports: [],
  selector: 'app-etiqueta-movie',
  styleUrl: './etiqueta-movie.component.scss',
  templateUrl: './etiqueta-movie.component.html',
})
export class EtiquetaMovieComponent {
	@Input({ required: true }) categoria!: Genere;
	@Input() destacat = false;
}
