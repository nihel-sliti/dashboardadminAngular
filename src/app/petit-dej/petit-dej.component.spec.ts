import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitDejComponent } from './petit-dej.component';

describe('PetitDejComponent', () => {
  let component: PetitDejComponent;
  let fixture: ComponentFixture<PetitDejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetitDejComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetitDejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
