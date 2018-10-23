import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibScrollingComponent } from './lib-scrolling.component';

describe('LibScrollingComponent', () => {
  let component: LibScrollingComponent;
  let fixture: ComponentFixture<LibScrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
