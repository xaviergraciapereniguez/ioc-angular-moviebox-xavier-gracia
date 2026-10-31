import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaMovie } from './targeta-movie.component';

describe('TargetaMovie', () => {
  let component: TargetaMovie;
  let fixture: ComponentFixture<TargetaMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaMovie],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaMovie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
