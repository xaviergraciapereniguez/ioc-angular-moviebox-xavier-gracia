
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BarraFiltresComponent,
  type FiltresMovie,
} from './components/barra-filtres/barra-filtres.component';
import { LlistaMovieComponent } from './components/llista-movie/llista-movie.component';
import { MOVIES_MOCK } from './mocks/dades-mock';
import { Movie } from './models/movie.model';

@Component({
  imports: [
    RouterOutlet,
    BarraFiltresComponent,
    LlistaMovieComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  movies: Movie[] = [];
  moviesFiltrats: Movie[] = [];
  movieSeleccionat: Movie | undefined = undefined;

  carregant = signal(true);

  constructor() {
    setTimeout(() => {
      this.movies = MOVIES_MOCK;
      this.moviesFiltrats = MOVIES_MOCK;
      this.carregant.set(false);
    }, 800);
  }

  filtresActuals: FiltresMovie = {
    text: '',
    categoria: 'Totes',
  };

  actualitzaFiltres(filtres: FiltresMovie): void {
    this.filtresActuals = filtres;
    const text = filtres.text.trim().toLocaleLowerCase('ca');

    this.moviesFiltrats = this.movies.filter((movie) => {
      const categoriaCoincideix =
        filtres.categoria === 'Totes' ||
        movie.categoria === filtres.categoria;

      const textCoincideix =
        text === '' || this.conteText(movie, text);

      return categoriaCoincideix && textCoincideix;
    });

    // Si la pel·lícula seleccionada ja no coincideix amb els filtres,
    // tanquem el detall.
    if (
      this.movieSeleccionat &&
      !this.moviesFiltrats.includes(this.movieSeleccionat)
    ) {
      this.movieSeleccionat = undefined;
    }
  }

  seleccionaMovie(movie: Movie): void {
    this.movieSeleccionat = movie;
  }

  tancaDetall(): void {
    this.movieSeleccionat = undefined;
  }

  private conteText(movie: Movie, text: string): boolean {
    const contingut =
      `${movie.titol} ${movie.descripcio}`.toLocaleLowerCase('ca');

    return contingut.includes(text);
  }
}
