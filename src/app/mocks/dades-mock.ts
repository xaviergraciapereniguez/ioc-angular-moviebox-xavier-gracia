import type { Movie } from '../models/movie.model';

export const MOVIES_MOCK: Movie[] = [
  {
    id: 1,
    titol: 'Harakiri',
    descripcio: 'Un samurai sense amo demana fer-se el seppuku a la residència d’un poderós clan.',
    categoria: 'Drama',
    dataActualitzacio: '1962-09-15',
    valoracio: 4.8,
    destacat: true
  },
  {
    id: 2,
    titol: 'The Human Condition III: A Soldier’s Prayer',
    descripcio: 'Un soldat japonès intenta sobreviure al final de la Segona Guerra Mundial.',
    categoria: 'Drama bèl·lic',
    dataActualitzacio: '1961-01-28',
    valoracio: 4.7,
    destacat: true
  },
  {
    id: 3,
    titol: '12 Angry Men',
    descripcio: 'Dotze membres d’un jurat han de decidir si un acusat és culpable.',
    categoria: 'Drama judicial',
    dataActualitzacio: '1957-04-10',
    valoracio: 4.7,
    destacat: true
  },
  {
    id: 4,
    titol: 'Come and See',
    descripcio: 'Un adolescent viu els horrors de la guerra durant l’ocupació nazi de Bielorússia.',
    categoria: 'Drama bèl·lic',
    dataActualitzacio: '1985-10-17',
    valoracio: 4.6,
    destacat: true
  },
  {
    id: 5,
    titol: 'High and Low',
    descripcio: 'Un empresari queda atrapat en un cas de segrest que posa en perill la seva família.',
    categoria: 'Crim',
    dataActualitzacio: '1963-03-01',
    valoracio: 4.6,
    destacat: true
  },
  {
    id: 6,
    titol: 'Seven Samurai',
    descripcio: 'Set samurais s’uneixen per defensar un poble dels atacs de bandits.',
    categoria: 'Acció',
    dataActualitzacio: '1954-04-26',
    valoracio: 4.6,
    destacat: true
  },
  {
    id: 7,
    titol: 'The Shawshank Redemption',
    descripcio: 'Un pres condemnat a cadena perpètua manté l’esperança i construeix una amistat a la presó.',
    categoria: 'Drama',
    dataActualitzacio: '1994-09-23',
    valoracio: 4.6,
    destacat: true
  },
  {
    id: 8,
    titol: 'The Godfather Part II',
    descripcio: 'La història de la família Corleone continua entre el poder, la lleialtat i la traïció.',
    categoria: 'Crim',
    dataActualitzacio: '1974-12-20',
    valoracio: 4.5,
    destacat: true
  },
  {
    id: 9,
    titol: 'The Human Condition I: No Greater Love',
    descripcio: 'Un pacifista japonès afronta els dilemes morals d’un camp de treball durant la guerra.',
    categoria: 'Drama bèl·lic',
    dataActualitzacio: '1959-01-15',
    valoracio: 4.5
  },
  {
    id: 10,
    titol: 'City of God',
    descripcio: 'Dos joves segueixen camins diferents en un barri marcat per la violència i el crim.',
    categoria: 'Crim',
    dataActualitzacio: '2002-08-30',
    valoracio: 4.5
  }
];