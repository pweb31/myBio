import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitviandeComponent } from './produitviande.component';

describe('ProduitviandeComponent', () => {
  let component: ProduitviandeComponent;
  let fixture: ComponentFixture<ProduitviandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitviandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitviandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
