import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitfromageComponent } from './produitfromage.component';

describe('ProduitfromageComponent', () => {
  let component: ProduitfromageComponent;
  let fixture: ComponentFixture<ProduitfromageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitfromageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitfromageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
