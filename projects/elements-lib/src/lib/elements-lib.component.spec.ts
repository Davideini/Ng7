import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsLibComponent } from './elements-lib.component';

describe('ElementsLibComponent', () => {
  let component: ElementsLibComponent;
  let fixture: ComponentFixture<ElementsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
