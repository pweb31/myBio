import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitlegumeComponent } from './produitlegume.component';

describe('ProduitlegumeComponent', () => {
  let component: ProduitlegumeComponent;
  let fixture: ComponentFixture<ProduitlegumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitlegumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitlegumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
