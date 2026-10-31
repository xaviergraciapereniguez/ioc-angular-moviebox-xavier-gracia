import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtiquetaMovie } from './etiqueta-movie.component';

describe('EtiquetaMovie', () => {
  let component: EtiquetaMovie;
  let fixture: ComponentFixture<EtiquetaMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaMovie],
    }).compileComponents();

    fixture = TestBed.createComponent(EtiquetaMovie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
