import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistaMovie } from './llista-movie.component';

describe('LlistaMovie', () => {
  let component: LlistaMovie;
  let fixture: ComponentFixture<LlistaMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaMovie],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaMovie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
