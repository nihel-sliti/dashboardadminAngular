import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateurDietetiqueComponent } from './calculateur-dietetique.component';

describe('CalculateurDietetiqueComponent', () => {
  let component: CalculateurDietetiqueComponent;
  let fixture: ComponentFixture<CalculateurDietetiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateurDietetiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateurDietetiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
