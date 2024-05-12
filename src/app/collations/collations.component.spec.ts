import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollationsComponent } from './collations.component';

describe('CollationsComponent', () => {
  let component: CollationsComponent;
  let fixture: ComponentFixture<CollationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
