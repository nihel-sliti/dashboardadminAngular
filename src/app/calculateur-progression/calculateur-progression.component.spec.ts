import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateurProgressionComponent } from './calculateur-progression.component';

describe('CalculateurProgressionComponent', () => {
  let component: CalculateurProgressionComponent;
  let fixture: ComponentFixture<CalculateurProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateurProgressionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateurProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
