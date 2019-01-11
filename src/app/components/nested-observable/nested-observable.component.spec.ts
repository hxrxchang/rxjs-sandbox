import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedObservableComponent } from './nested-observable.component';

describe('NestedObservableComponent', () => {
  let component: NestedObservableComponent;
  let fixture: ComponentFixture<NestedObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
