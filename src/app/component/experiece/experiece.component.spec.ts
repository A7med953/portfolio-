import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperieceComponent } from './experiece.component';

describe('ExperieceComponent', () => {
  let component: ExperieceComponent;
  let fixture: ComponentFixture<ExperieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperieceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
