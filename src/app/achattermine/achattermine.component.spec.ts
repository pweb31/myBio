import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchattermineComponent } from './achattermine.component';

describe('AchattermineComponent', () => {
  let component: AchattermineComponent;
  let fixture: ComponentFixture<AchattermineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchattermineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchattermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
