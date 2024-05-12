import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesSuiviComponent } from './fiches-suivi.component';

describe('FichesSuiviComponent', () => {
  let component: FichesSuiviComponent;
  let fixture: ComponentFixture<FichesSuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichesSuiviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichesSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
