import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DejeunerComponent } from './dejeuner.component';

describe('DejeunerComponent', () => {
  let component: DejeunerComponent;
  let fixture: ComponentFixture<DejeunerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DejeunerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DejeunerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
