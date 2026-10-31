import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Genere } from '../../models/movie.model';

export interface FiltresMovie {
  text: string;
  categoria: Genere | 'Totes';
}

@Component({
  selector: 'app-barra-filtres',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './barra-filtres.component.scss',
  templateUrl: './barra-filtres.component.html',
})
export class BarraFiltresComponent {
  @Output() filtresCanviats = new EventEmitter<FiltresMovie>();

  categories: Array<Genere | 'Totes'> = [
    'Totes',
    'Drama',
    'Comedia',
    'Acció',
    'Documental',
    'Romàntic',
    'Drama bèl·lic',
    'Crim',
    'Drama judicial',
  ];

  filtres: FiltresMovie = {
    text: '',
    categoria: 'Totes',
  };

  aplicaFiltres(): void {
    this.filtresCanviats.emit({
    text: this.filtres.text.trim().toLocaleLowerCase('ca'),
    categoria: this.filtres.categoria,
  });
  }

  restableixFiltres(): void {
    this.filtres = {
      text: '',
      categoria: 'Totes',
    };

    this.aplicaFiltres();
  }
}
