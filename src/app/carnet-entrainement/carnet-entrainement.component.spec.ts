import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetEntrainementComponent } from './carnet-entrainement.component';

describe('CarnetEntrainementComponent', () => {
  let component: CarnetEntrainementComponent;
  let fixture: ComponentFixture<CarnetEntrainementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarnetEntrainementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarnetEntrainementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
