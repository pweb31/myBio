import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitresultComponent } from './produitresult.component';

describe('ProduitresultComponent', () => {
  let component: ProduitresultComponent;
  let fixture: ComponentFixture<ProduitresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
