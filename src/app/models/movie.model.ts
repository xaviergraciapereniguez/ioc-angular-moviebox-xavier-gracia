export type Genere = 'Drama' | 'Comedia' | 'Acció' | 'Documental' | 'Romàntic' | 'Drama bèl·lic' | 'Crim' | 'Drama judicial';

export interface Movie {
  id: number;
  titol: string;
  descripcio: string;
  categoria: Genere;
  dataActualitzacio: string;   
  valoracio: number;           
  destacat?: boolean;
}