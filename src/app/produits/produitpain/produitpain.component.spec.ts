import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitpainComponent } from './produitpain.component';

describe('ProduitpainComponent', () => {
  let component: ProduitpainComponent;
  let fixture: ComponentFixture<ProduitpainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitpainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
