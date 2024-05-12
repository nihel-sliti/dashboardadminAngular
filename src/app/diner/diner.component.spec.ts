import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinerComponent } from './diner.component';

describe('DinerComponent', () => {
  let component: DinerComponent;
  let fixture: ComponentFixture<DinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
